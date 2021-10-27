import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../providers/Auth";

interface UserData {
  username: string;
  password: string;
}

const Home = () => {
  const { signIn } = useAuth();

  const schema = yup.object().shape({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data: UserData) => {
    signIn(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <input placeholder="Nome" {...register("username")} />
        {errors.username?.message}
        <input placeholder="Senha" type="password" {...register("password")} />
        {errors.password?.message}
        <button type="submit">Logar</button>
      </form>
    </div>
  );
};

export default Home;
