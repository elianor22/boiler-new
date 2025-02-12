'use client';

import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { NAV_ITEMS } from '@/contants/menu-items';
import { cn } from '@/lib/utils';

const Navbar = () => {
  function onNavChange() {
    setTimeout(() => {
      // Select elements with the state "open"
      const triggers = document.querySelectorAll(
        '.submenu-trigger[data-state="open"]',
      );

      const dropdowns = document.querySelectorAll(
        '.nav-viewport[data-state="open"]',
      );

      // Check if both triggers and dropdowns are present
      if (!triggers.length || !dropdowns.length) return;

      // Simplify the calculation by extracting it into a variable
      const { offsetLeft, offsetWidth } = triggers[0] as HTMLElement;
      const menuWidth = dropdowns[0].children[0].clientWidth;
      const menuLeftPosition = offsetLeft + offsetWidth / 2 - menuWidth / 2;

      // Apply the calculated position
      document.documentElement.style.setProperty(
        '--menu-left-position',
        `${menuLeftPosition}px`,
      );
    });
  }

  return (
    <div className="container relative mx-auto flex justify-center">
      <div className="justify-center rounded-xl bg-primary py-4">
        <NavigationMenu className="" onValueChange={onNavChange}>
          <NavigationMenuList className="w-full">
            {NAV_ITEMS.map((menu, index: number) => {
              if (menu.children) {
                return (
                  <NavigationMenuItem key={index} className="w-full">
                    <NavigationMenuTrigger className="submenu-trigger hover:bg-transparant bg-transparent font-bold uppercase text-white hover:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent">
                      {menu.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-full">
                      <NavigationMenuIndicator />
                      {menu.children.map((child, childIndex) => (
                        <Link
                          href={child.href as string}
                          key={childIndex}
                          passHref
                          legacyBehavior
                          className="w-full"
                        >
                          <NavigationMenuLink
                            className={cn(
                              navigationMenuTriggerStyle(),
                              'uppercase',
                            )}
                          >
                            {child.title}
                          </NavigationMenuLink>
                        </Link>
                      ))}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }

              return (
                <NavigationMenuItem key={index}>
                  <Link href={menu.href ?? '#'} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'bg-transparent font-bold uppercase text-white hover:!bg-transparent hover:text-white',
                      )}
                    >
                      {menu.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
