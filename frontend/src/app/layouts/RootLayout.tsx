import { Outlet } from "react-router-dom";

import { PageLayout } from "~/shared/ui/page-layout";

export function RootLayout() {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
}
