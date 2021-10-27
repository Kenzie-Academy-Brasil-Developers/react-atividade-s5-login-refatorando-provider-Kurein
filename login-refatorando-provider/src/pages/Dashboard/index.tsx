import { useAuth } from "../../providers/Auth";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const history = useHistory();

  const { Logout, authToken } = useAuth();

  if (!authToken) {
    history.push("/");
  }

  return (
    <div>
      <button onClick={Logout}>Deslogar</button>
    </div>
  );
};

export default Dashboard;
