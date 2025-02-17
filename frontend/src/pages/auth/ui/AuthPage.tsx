import { useSearchParams } from "react-router-dom";
import { Card } from "~/shared/ui/card";
import { Login, Signup } from "~/features/auth";

export function AuthPage() {
  const [searchParams] = useSearchParams();

  const mode = searchParams.get("mode");

  const isLogin = mode === "login" || !mode;
  const isSignup = mode === "signup";

  return (
    <Card className="px-2 bg-transparent">
      <div className="w-full mx-auto max-w-[40rem]">
        {isLogin && <Login />}
        {isSignup && <Signup />}
      </div>
    </Card>
  );
}
