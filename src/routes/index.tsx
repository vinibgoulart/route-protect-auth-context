import { useAuth } from "../context/auth";

import { SignRoutes } from "./SignRoutes";
import { ProtectRoutes } from "./ProtectRoutes";

export const Routes = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <div>
        <div>Loading...</div>
      </div>
    );
  }

  return signed ? <ProtectRoutes /> : <SignRoutes />;
};
