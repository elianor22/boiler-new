'use client';

import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { NAV_ITEMS } from '@/contants/menu-items';
import NavbarSubmenuItem from './navbar-submenu-item';
import NavbarMenuItem from './navbar-menu-item';

const Navbar = () => {
  function onNavChange() {
    setTimeout(() => {
      const triggers = document.querySelectorAll<HTMLElement>(
        '.submenu-trigger[data-state="open"]',
      );

      const dropdowns = document.querySelectorAll<HTMLElement>(
        '.nav-viewport[data-state="open"]',
      );

      if (!triggers.length || !dropdowns.length) return;
      const trigger = triggers[0];
      const dropdown = dropdowns[0];

      if (!trigger || !dropdown) return;
      const { offsetLeft, offsetWidth } = trigger;
      const menuWidth = dropdown.children[0]?.clientWidth ?? 0;
      const menuLeftPosition = offsetLeft + offsetWidth / 2 - menuWidth / 2;

      document.documentElement.style.setProperty(
        '--menu-left-position',
        `${menuLeftPosition}px`,
      );
    });
  }

  return (
    <div className="container relative mx-auto flex justify-center">
      <div className="justify-center rounded-xl bg-primary py-4">
        <NavigationMenu onValueChange={onNavChange}>
          <NavigationMenuList data-testid="nav_list">
            {NAV_ITEMS.map((menu, index: number) =>
              menu.children ? (
                <NavbarSubmenuItem key={index} menu={menu} index={index} />
              ) : (
                <NavbarMenuItem key={index} menu={menu} index={index} />
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
