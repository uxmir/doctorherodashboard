import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../app/components/SideBar/SideBar"; // ← client component import
import SidebarProvider from '../app/components/SidebarProvider/SidebarProvider'
import MainContent from './components/MainContent/MainContent'
import Upperside from '../app/components/UppersideComponent/Upperside'
const inter = Inter({
  variable: "--font-inter",
    weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doctor Dashboard",
  description: "Clinic management dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
      <SidebarProvider>
        <Upperside/>
          <div className="flex bg-[#F5F8FD] h-full">
          
          {/* Sidebar */}
          <Sidebar />

          {/* Main */}
          <MainContent>{children}</MainContent>
        </div>
      </SidebarProvider>
      </body>
    </html>
  );
}
