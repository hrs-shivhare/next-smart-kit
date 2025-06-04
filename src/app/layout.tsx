import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { connectDb } from "@/database/config/db";
import { poppins, roboto } from "../ui/fonts";
import React from "react";

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
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

