"use client";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import SidebarFooter from "../../ui/components/SidebarFooter";
import ToolbarActionsSearch from "../../ui/components/ToolbarActionsSearch";
import AppTitle from "../../ui/components/AppTitle";
import { type Session } from "@toolpad/core/AppProvider";
import React from "react";
import theme from "@/theme";
import { NextAppProvider } from "@toolpad/core/nextjs";
import { NAVIGATION } from "@/app/navigation";
import Footer from "@/ui/components/Footer";

export default function DashboardPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [session, setSession] = React.useState<Session | null>({
    user: {
      name: "Bharat Kashyap",
      email: "bharatkashyap@outlook.com",
      image: "https://avatars.githubusercontent.com/u/19550456",
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: "Bharat Kashyap",
            email: "bharatkashyap@outlook.com",
            image: "https://avatars.githubusercontent.com/u/19550456",
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);
  return (
    <NextAppProvider
      theme={theme}
      navigation={NAVIGATION}
      authentication={authentication}
      session={session}
    >
      <DashboardLayout
        slots={{
          appTitle: AppTitle,
          toolbarActions: ToolbarActionsSearch,
          sidebarFooter: SidebarFooter,
        }}
        defaultSidebarCollapsed
      >
        <PageContainer>{children}</PageContainer>
        <Footer />
      </DashboardLayout>
    </NextAppProvider>
  );
}
