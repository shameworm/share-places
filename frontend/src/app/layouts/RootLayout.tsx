import { Outlet } from "react-router-dom";

import { PageLayout } from "~/shared/ui/page-layout";
import { TopBarWidget } from "~/shared/widgets/top-bar/TopBarWidget";

export function RootLayout() {
  return (
    <PageLayout topBar={<TopBarWidget />}>
      <Outlet />
    </PageLayout>
  );
}
