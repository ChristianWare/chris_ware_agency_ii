import styles from "./Nav.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (window.innerWidth <= 768 && isOpen) {
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

  // const navItems = [
  //   {
  //     text: "Home",
  //     href: "/",
  //   },
  //   {
  //     text: "services",
  //     href: "/services",
  //   },
  //   {
  //     text: "Portfolio",
  //     href: "/portfolio",
  //   },
  //   {
  //     text: "Pricing",
  //     href: "/pricing",
  //   },
  //   {
  //     text: "About",
  //     href: "/about",
  //   },
  //   {
  //     text: "Contact",
  //     href: "/contact",
  //   },
  // ];

  const currentDate = new Date();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentMonth = monthNames[currentDate.getMonth()];

  const message = `Now accepting new clients for the month of ${currentMonth}!`;

  return (
    <header className={styles.container}>
      <div className={styles.preNav}>
        {message} <span className={styles.span}>Contact us</span>
      </div>
      <nav className={styles.content}>Nav Here</nav>
    </header>
  );
}
export default Nav;
