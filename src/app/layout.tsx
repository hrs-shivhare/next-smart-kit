import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import theme from "../theme";
import { NextAppProvider } from "@toolpad/core/nextjs";
import { connectDb } from "@/database/config/db";
import { NAVIGATION } from "./navigation";
import { poppins, roboto } from "../ui/fonts";

export const metadata: Metadata = {
  title:
    "Next Smart Kit : Next.js - Sequelize.js - Material UI - Auth.js - React-Hook-Form - Tailwind CSS",
  description:
    "Next.js integration with Sequelize.js, Material UI, Auth.js, React-Hook-Form, Tailwind CSS",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await connectDb();
  return (
    <html lang="en" className={roboto.variable} suppressHydrationWarning>
      <body className={`${roboto.variable} ${poppins.variable} antialiased`}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <NextAppProvider theme={theme} navigation={NAVIGATION}>
            {children}
          </NextAppProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

