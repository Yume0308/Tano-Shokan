import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, } from "@/components/ui/sidebar"
import Link from "next/link";
import LinkLogo from "@/components/link/logo/link-logo-header";
import { SidebarItemComponent } from "@/constants/sidebar.data";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <LinkLogo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {
                SidebarItemComponent.Application.map((item) => {

                  return (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton asChild tooltip={item.title}>
                        <Link href = {item.href}>
                          <item.attribute strokeWidth={2.5} />
                          <span className="font-medium">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })
              }
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="pl-0">

        <SidebarGroup>
          <SidebarGroupLabel>Option</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {
                SidebarItemComponent.Option.map((item) => {
                  return (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton asChild tooltip={item.title} >
                        <Link href = {item.href}>
                          <item.attribute strokeWidth={2.2}/>
                          <span className="font-medium">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })
              }
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  )
}
