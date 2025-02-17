// import { useSearchParams } from "react-router-dom";
import { Card } from "~/shared/ui/card";

export function AuthPage() {
  //   const [searchParams] = useSearchParams();
  // const isLogin = searchParams.get("mode") === "login";

  return (
    <Card className="px-2">
      <div className="w-full mx-auto">Auth Page</div>
    </Card>
  );
}
