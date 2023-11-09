import styles from "./Nav.module.css";

function Nav() {
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
      <div className={styles.preNav}>{message}</div>
      <nav className={styles.content}>Nav Here</nav>
    </header>
  );
}
export default Nav;
