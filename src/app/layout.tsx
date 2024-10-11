import type { Metadata } from "next";
import { Home, AutoMode, Engineering, Settings } from "@mui/icons-material";
import "@/app/ui/globals.css";
import { geistSans, geistMono } from "@/app/ui/fonts";
import { ResponsiveDrawer, Menu } from "@/app/menu";

export const metadata: Metadata = {
  title: "Centroid Locator",
  description: "Centroid Locator",
};

const menu: Menu = {
  "/": { key: "home", text: "主页面", icon: <Home /> },
  "/auto": { key: "auto", text: "自动焊接", icon: <AutoMode /> },
  "/manual": { key: "manual", text: "手动操作", icon: <Engineering /> },
  "/config": { key: "config", text: "焊接参数", icon: <Settings /> },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ResponsiveDrawer menu={menu}>{children}</ResponsiveDrawer>
      </body>
    </html>
  );
}
