import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard/sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // page layout
    <SidebarProvider>
      {/* sidebar  */}
      <AppSidebar />

      {/* main content */}
      <SidebarInset className="w-full">

        {/* header */}

        {/* page main content */}
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}

