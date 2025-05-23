"use client";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import SidebarFooter from "../../ui/components/SidebarFooter";
import ToolbarActionsSearch from "../../ui/components/ToolbarActionsSearch";
import AppTitle from "../../ui/components/AppTitle";

export default function DashboardPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout
      slots={{
        appTitle: AppTitle,
        toolbarActions: ToolbarActionsSearch,
        sidebarFooter: SidebarFooter,
      }}
      defaultSidebarCollapsed
    >
      <PageContainer>{children}</PageContainer>
    </DashboardLayout>
  );
}
