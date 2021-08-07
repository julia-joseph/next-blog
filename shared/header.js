import Link from "next/link";

import BackspaceIcon from "../icons/backspace.-icon.js";
import classes from "../styles/header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.brand}>
        <Link href="/">
          <a>
            <BackspaceIcon className={classes.brandIcon} /> J-Log
          </a>
        </Link>
      </div>
      <nav>
        <ul className={classes.navlinks}>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
