import LogInForm from "../../components/Auth/LoginForm";
import PageContainer from "../../components/PageContainer/PageContainer";

const Login = () => {
  return (
    <PageContainer justifyContentCenter={true} alignItemsCenter={true}>
      <LogInForm />
    </PageContainer>
  );
};

export default Login;
