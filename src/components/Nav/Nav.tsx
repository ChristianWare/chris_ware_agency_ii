"use client";

import styles from "./Nav.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../Button/Button";
import Instagram from "../../../public/icons/instagram.svg";
import LinkedIn from "../../../public/icons/linkedin.svg";
import Twitter from "../../../public/icons/twitter.svg";
import Facebook from "../../../public/icons/facebook.svg";

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
      text: "Features",
      href: "/features",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    {
      text: "Blog",
      href: "/blog",
    },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href='/' className={styles.logo}>
            CWA
          </Link>
        </div>
        <ul
          className={
            isOpen === false
              ? styles.navMenu
              : `${styles.navMenu} ${styles.active}`
          }
        >
          {navItems.map((navItem, index) => (
            <li
              key={index}
              className={styles.navItem}
              onClick={() => setIsOpen(false)}
            >
              <Link
                href={navItem.href}
                className={
                  pathname === navItem.href
                    ? `${styles.activeLink}  ${styles.navItem}`
                    : styles.navItem
                }
              >
                {navItem.text}
              </Link>
            </li>
          ))}
          <div className={styles.btnContainer}>
            <Button
              href='tel:+4806236780'
              text='480-623-6780'
              btnType='navBtn'
            />
          </div>
          {isOpen && (
            <div className={styles.navFooter}>
              <div className={styles.lb2}>
                <Instagram width={25} height={25} className={styles.icon} />
                <LinkedIn width={25} height={25} className={styles.icon} />
                <Twitter width={25} height={25} className={styles.icon} />
                <Facebook width={25} height={25} className={styles.icon} />
              </div>
              <div className={styles.bottomDesktop}>
                <div className={styles.bottomLeft}>
                  <p className={styles.copy}>
                    &copy; 2023 Chris Ware Agency - All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          )}
        </ul>
        <span
          className={
            isOpen === false
              ? styles.hamburger
              : `${styles.hamburger} ${styles.active}`
          }
          onClick={openMenu}
        >
          <span className={styles.whiteBar}></span>
          <span className={styles.whiteBar}></span>
          <span className={styles.whiteBar}></span>
        </span>
      </nav>
    </header>
  );
}
export default Nav;
