import { useAuth } from "../context/auth";

import { SignRoutes } from "./SignRoutes";
import { ProtectRoutes } from "./ProtectRoutes";

export const Routes = () => {
  const { signed } = useAuth();
  return signed ? <ProtectRoutes /> : <SignRoutes />;
};
