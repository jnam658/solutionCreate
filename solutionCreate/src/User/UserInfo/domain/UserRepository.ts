import type { UserInfo } from "./UserInfo";

export interface UserRepository {
  fetchUserInfo(): Promise<UserInfo>;
}
