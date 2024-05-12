import { useSearchParams } from "react-router-dom";

import Card from "../../shared/components/UIElements/Card";
import Login from "./Login";
import Signup from "./Signup";

const Auth: React.FC = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const formClasses = "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4";

  return (
    <Card className="px-2">
      <div className="w-full mx-auto max-w-[40rem]">
        {isLogin && <Login isLogin={isLogin} classes={formClasses} />}
        {!isLogin && <Signup isLogin={isLogin} classes={formClasses} />}
      </div>
    </Card>
  );
};

export default Auth;
