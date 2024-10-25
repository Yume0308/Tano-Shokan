import { SidebarItemType } from "@/types/sidebar-item.type"
import { Bell, Home, LineChart, Users, Book, User, MessageCircle, LogOut, ShoppingCart, Settings, Wallet, MessageCircleQuestion, FileUser } from "lucide-react"

const SidebarItemInfo: SidebarItemType[] =
[
  {
    id: 'badbcd93-4abb-5d44-a93b-18424488f927',
    title: 'Home',
    href : '/',
    attribute: Home,
    isAccessToVisible: ['all'],
    option: 'Application',
  },
  {
    id: '65bf5e06-4016-5e78-88dd-4bbc3b20a509',
    title: 'Books',
    href : '/books',
    attribute: Book,
    isAccessToVisible: ['all'],
    option: 'Application',
  },
  {
    id: 'ce1c6487-701a-5c4e-a95a-6087b9e55cca',
    title: 'Users',
    href : '/users',
    attribute: User,
    isAccessToVisible: ['all'],
    option: 'Application',
  },
  {
    id: '8f3b7790-6a0c-512d-8aae-34af9d0fcaa9',
    title: 'Staffs',
    href : '/staffs',
    attribute: Users,
    isAccessToVisible: ['all'],
    option: 'Application',
  },
  {
    id: '299fdf34-6a6b-56a0-932a-196de5660f2c',
    title: 'Analytics',
    href : '/analytics',
    attribute: LineChart,
    isAccessToVisible: ['all'],
    option: 'Application',
  },
  {
    id: '6c3716de-6fd9-54f1-a860-910c57034e30',
    title: 'Message',
    href : '/message',
    attribute: MessageCircle,
    isAccessToVisible: ['all'],
    option: 'Application',
  },
  {
    id: '4c519f69-96b6-562f-b739-5034169ad2c2',
    title: 'Notifications',
    href : '/notifications',
    attribute: Bell,
    isAccessToVisible: ['all'],
    option: 'Application',
  },
  {
    id: '25bac922-5ad1-5e0d-a001-abdddd49340e',
    title: 'Account',
    href : '/account',
    attribute: FileUser,
    isAccessToVisible: ['all'],
    option: 'Option',
  },
  {
    id: 'bfe2258b-51c0-5f81-a92f-5a5826d693bb',
    title: 'Feedback',
    href : '/feedback',
    attribute: MessageCircleQuestion,
    isAccessToVisible: ['all'],
    option: 'Option',
  },
  {
    id: '807ab3d2-f967-5de2-82a1-e74bc22dc8db',
    title: 'Settings',
    href : '/settings',
    attribute: Settings,
    isAccessToVisible: ['all'],
    option: 'Option',
  },
  {
    id: 'b9735aeb-2847-5ee4-849a-8087c24a8805',
    title: 'Logout',
    href : '/logout',
    attribute: LogOut,
    isAccessToVisible: ['all'],
    option: 'Option',
  }
]

const SidebarItemComponent = {
  Application: SidebarItemInfo.filter((item) => item.option === 'Application'),
  Option: SidebarItemInfo.filter((item) => item.option === 'Option')
}

export { SidebarItemComponent }
