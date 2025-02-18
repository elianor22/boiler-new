import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import NavbarLinkItem from './navbar-link-item';
import type { NavItem } from '@/contants/menu-items';

interface NavbarMenuItemProps {
  menu: NavItem;
  index: number;
}

const NavbarMenuItem = ({ menu, index }: NavbarMenuItemProps) => (
  <NavigationMenuItem data-testid={`nav_menu_item_${index}`} key={index}>
    <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle())}>
      <NavbarLinkItem
        href={menu.href ?? '#'}
        data-testid={`nav_menu_link_${index}`}
      >
        {menu.title}
      </NavbarLinkItem>
    </NavigationMenuLink>
  </NavigationMenuItem>
);

export default NavbarMenuItem;
