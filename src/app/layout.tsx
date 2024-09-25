import type { Metadata } from "next";
import localFont from "next/font/local";
import HomeIcon from "@mui/icons-material/Home";
import EngineeringIcon from "@mui/icons-material/Engineering";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import SettingsIcon from "@mui/icons-material/Settings";
import "./globals.css";
import { ResponsiveDrawer, Menu } from "./menu";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const menu: Menu = {
  "/": { key: "home", text: "主页面", icon: <HomeIcon /> },
  "/upload": { key: "upload", text: "上传CAD文件", icon: <FileUploadIcon /> },
  "/manual": { key: "manual", text: "手动操作", icon: <EngineeringIcon /> },
  "/config": { key: "config", text: "焊接参数", icon: <SettingsIcon /> },
};

export const metadata: Metadata = {
  title: "Centroid Locator",
  description: "Centroid Locator",
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
