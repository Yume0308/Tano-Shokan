import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import NavUser from "./nav-user";
import { SearchInput } from "./search-input";

export function AppHeader() {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          {/* <Breadcrumb /> */}
        </div>
        <div className=" hidden w-[40%] items-center gap-2 px-4 md:flex ">
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