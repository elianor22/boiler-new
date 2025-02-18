import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import NavbarLinkItem from './navbar-link-item';
import type { NavItem } from '@/contants/menu-items';

interface NavbarSubmenuItemProps {
  menu: NavItem;
  index: number;
}

const NavbarSubmenuItem = ({ menu, index }: NavbarSubmenuItemProps) => (
  <NavigationMenuItem
    data-testid={`nav_submenu_item_${index}`}
    key={index}
    className="w-full"
  >
    <NavigationMenuTrigger
      data-testid={`nav_submenu_trigger_${index}`}
      className="submenu-trigger"
    >
      {menu.title}
    </NavigationMenuTrigger>
    <NavigationMenuContent className="">
      <NavigationMenuIndicator />
      {menu.children?.map((child, childIndex) => (
        <NavigationMenuLink
          key={childIndex}
          asChild
          className={cn(navigationMenuTriggerStyle(), 'uppercase')}
        >
          <NavbarLinkItem
            href={child.href as string}
            data-testid={`nav_submenu_link_${index}_${childIndex}`}
            className="w-full whitespace-nowrap"
          >
            {child.title}
          </NavbarLinkItem>
        </NavigationMenuLink>
      ))}
    </NavigationMenuContent>
  </NavigationMenuItem>
);

export default NavbarSubmenuItem;
