"use client";

import styles from "./Nav.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../Button/Button";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (window.innerWidth <= 870 && isOpen) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    }

    const handleResize = () => {
      setIsOpen(false);
      window.addEventListener("resize", handleResize);
    };

    return () => {
      window.removeEventListener("resize", handleResize);
      if (body) {
        body.style.overflow = "auto";
      }
    };
  }, [isOpen]);

  const pathname = usePathname();

  const navItems = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Services",
      href: "/services",
    },
    {
      text: "Portfolio",
      href: "/portfolio",
    },
    {
      text: "Pricing",
      href: "/pricing",
    },
    {
      text: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href='/'>CWA</Link>
        </div>
        <div className={styles.menuItemsGroup}>
          <ul
            className={
              isOpen === false
                ? styles.navMenu
                : styles.navMenu + " " + styles.active
            }
          >
            {navItems.map((navItem, index) => (
              <li key={index} className={styles.navItem} onClick={openMenu}>
                <Link
                  href={navItem.href}
                  className={pathname === navItem.text ? styles.activeLink : ""}
                >
                  {navItem.text}
                </Link>
                <span className={styles.arrow}>↗</span>
              </li>
            ))}
          </ul>
          <div className={styles.naBarRight}>
            <div className={styles.btnContainer}>
              <Button href='/' text='Log in' btnType='navBtnii' />
              <Button href='/' text='Sign up' btnType='navBtn' />
            </div>
            <span
              className={
                isOpen === false
                  ? styles.hamburger
                  : styles.hamburger + " " + styles.active
              }
              onClick={openMenu}
            >
              <span className={styles.whiteBar}></span>
              <span className={styles.whiteBar}></span>
              <span className={styles.whiteBar}></span>
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Nav;
