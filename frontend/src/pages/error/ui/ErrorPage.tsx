import { TopBarWidget } from "~/shared/widgets/top-bar/TopBarWidget";
import { useErrorPage } from "../lib";
import { PageLayout } from "~/shared/ui/page-layout";
import { useRouteError } from "react-router-dom";
import { ShieldAlert } from "lucide-react";

export function ErrorPage() {
  const error = useRouteError();
  const statusCode = (error as { status?: number })?.status || 500;
  const { code, message } = useErrorPage(statusCode);
  const topBar = <TopBarWidget />;

  return (
    <PageLayout topBar={topBar}>
      <div className="mt-8 flex flex-col items-center justify-center gap-8">
        <ShieldAlert className="text-destructive h-24 w-24" />
        <h1 className="min-w-24 text-center text-xl font-bold md:text-3xl text-destructive">
          {code}
        </h1>
        <p className="max-w-96 text-center text-base md:text-xl text-destructive">
          {message}
        </p>
      </div>
    </PageLayout>
  );
}
