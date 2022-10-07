export type LoginType = {
  email: string;
  password: string;
};

export interface AuthContextData {
  signed: boolean;
  user: object | null;
  loading: boolean;
  Login: ({}: LoginType) => Promise<void>;
  Logout: () => void;
}
