export type LoginType = {
  email: string;
  password: string;
};

export interface AuthContextData {
  signed: boolean;
  user: object | null;
  Login: ({}: LoginType) => Promise<void>;
}
