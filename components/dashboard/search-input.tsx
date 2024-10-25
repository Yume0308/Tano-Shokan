import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Search, SendHorizonal } from "lucide-react";

export function SearchInput(){
  return (
    <div className="w-full space-y-2 rounded-sm">
      <form>
        <div className="relative w-full">
          <Input className="w-full pl-9 pr-9" placeholder="Search..." type="search" />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="w-4 h-4" role="presentation" aria-hidden='true' strokeWidth={2} />
          </div>
          <a>
            <Button
              variant="outline"
              className ="bg-zinc-400 absolute inset-y-px right-px flex h-full w-9 items-center justify-center rounded-r-lg"
              aria-label="Submit search-input"
              type="submit"
            >
              <SendHorizonal size={16} strokeWidth={2} aria-hidden="true" role="presentation" />
            </Button>
          </a>
        </div>
      </form>
    </div>
  )
}
