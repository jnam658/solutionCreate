export interface UserInfo {
  email: string;
  nickname: string;
  gender: string;
  birthdate: string;
  level: number;
  percentage: number;
  roles: string[];
  items: UserItem[];
  hasDiaryPassword: boolean;
}
export interface UserItem {
  type: string;
  equipped: boolean;
  unlocked: boolean;
}
