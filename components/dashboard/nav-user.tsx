'use client';

import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sidebar,
  Sparkles
} from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from '@/components/ui/sidebar';

export function NavUser(){

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
              <Avatar className='h-8 w-8 rounded-lg'>
                <AvatarImage src="https://github.com/shadcn.png" alt="" />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={4} className="w-[--radix-dropdown-menu-trigger-width] min-w-[220px] rounded-lg" >
            <DropdownMenuLabel>
              <div className="grid flex-1 text-left leading-none">
                <span className="truncate font-semibold pb-1">Shadcn</span>
                <span className="truncate text-xs text-muted-foreground">Shadcn@gmail.com</span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='truncate font-light'>Account</DropdownMenuItem>
            <DropdownMenuItem className='truncate font-light'>Settings</DropdownMenuItem>
            <DropdownMenuItem className='truncate font-light'>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='truncate font-normal'>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

export default NavUser;
