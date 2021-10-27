import { ReactNode } from "react";
import { AuthProvider } from "./Auth";

interface ProdividersData {
  children: ReactNode;
}

const Providers = ({ children }: ProdividersData) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Providers;
