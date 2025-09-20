import type { UserInfo } from "../domain/UserInfo";
import type { UserRepository } from "../domain/UserRepository";

type ApiEnvelope<T> = {
  statusCode: number;
  message: string;
  data: T;
};

export class UserRepositoryImpl implements UserRepository {
  async fetchUserInfo(): Promise<UserInfo> {
    const token = sessionStorage.getItem("accessToken");
    if (!token) {
      throw new Error("No access token");
    }
    const res = await fetch("/user/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error(`HTTP_${res.status}`);

    // 서버 포맷: { statusCode, message, data: {...UserInfo} }
    const body = (await res.json()) as ApiEnvelope<UserInfo>;

    // 앱 레벨 성공 판정
    if (body.statusCode !== 200 || !body.data) {
      throw new Error(body.message || "API_ERROR");
    }

    // 필요하면 여기에서 매핑/보정(필드명 변환, 기본값) 수행
    const d = body.data;
    const user: UserInfo = {
      email: d.email ?? "",
      nickname: d.nickname ?? "",
      gender: d.gender ?? "",
      birthdate: d.birthdate ?? "",
      level: Number(d.level ?? 0),
      percentage: Number(d.percentage ?? 0),
      roles: Array.isArray(d.roles) ? d.roles : [],
      items: Array.isArray(d.items)
        ? d.items.map((it) => ({
            type: it.type ?? "",
            equipped: !!it.equipped,
            unlocked: !!it.unlocked,
          }))
        : [],
      hasDiaryPassword: !!d.hasDiaryPassword,
    };

    return user; // ← 저장은 하지 않고, 가공된 도메인 모델만 반환
  }
}
