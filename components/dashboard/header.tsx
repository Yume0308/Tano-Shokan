import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import NavUser from "./nav-user";
import { SearchInput } from "./search-input";
import ThemeToggle from "../theme/toggle/theme-toggle";

export function AppHeader() {
  return (
    <>
      <header className="flex sticky top-0 h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear border-b z-50">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          {/* <Breadcrumb /> */}
        </div>
        <div className="w-1/3 items-center gap-2 px-4 md:flex ">
          <SearchInput />
        </div>
        <div className="flex items-center gap-2 px-4">
          <NavUser />
          {/* <ThemeToggle /> */}
        </div>
      </header>
    </>
  )
}
