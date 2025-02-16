import { Outlet } from "react-router-dom";

import { PageLayout } from "~/shared/ui/page-layout";
import { TopBarWidget } from "~/widgets/top-bar";

export function RootLayout() {
  return (
    <PageLayout topBar={<TopBarWidget />}>
      <Outlet />
    </PageLayout>
  );
}
