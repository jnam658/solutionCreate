import { useCallback, useEffect, useState } from "react";
import type { UserInfo } from "../domain/UserInfo";
import { UserRepositoryImpl } from "../data/UserRepositoryImpl";

// 🔹 any 대신 unknown을 받고, 메시지 뽑는 유틸
function getErrorMessage(err: unknown): string {
  if (err instanceof Error) return err.message;
  if (typeof err === "string") return err;
  try {
    return JSON.stringify(err);
  } catch {
    return "UNKNOWN_ERROR";
  }
}

export function useUserViewModel() {
  const [me, setMe] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const repo = new UserRepositoryImpl();
      const data = await repo.fetchUserInfo();
      setMe(data);
    } catch (err: unknown) {
      // ✅ any → unknown
      setError(getErrorMessage(err)); // ✅ 안전한 메시지 추출
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  return { me, nickname: me?.nickname ?? "", loading, error, refresh: load };
}

export default useUserViewModel;
