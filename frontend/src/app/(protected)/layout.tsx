import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Sidebar */}
      <AppSidebar />
      {/* Body */}
      <SidebarInset>{children}</SidebarInset>
    </>
  );
}
