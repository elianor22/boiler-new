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
      className="submenu-trigger hover:bg-transparant focus:bg-transparant bg-transparent font-bold uppercase text-white hover:text-green-300 focus:outline-2 data-[active]:bg-transparent data-[state=open]:bg-transparent"
    >
      {menu.title}
    </NavigationMenuTrigger>
    <NavigationMenuContent className="w-full">
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
          >
            {child.title}
          </NavbarLinkItem>
        </NavigationMenuLink>
      ))}
    </NavigationMenuContent>
  </NavigationMenuItem>
);

export default NavbarSubmenuItem;
