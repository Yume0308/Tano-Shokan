import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { LucideProps } from 'lucide-react';

type SidebarItemType =
{
  id: string,
  title: string,
  href: string,
  attribute: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
  isAccessToVisible: string[],
  option: 'Application' | 'Option'
}

export type { SidebarItemType }
