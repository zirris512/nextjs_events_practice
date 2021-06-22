import Link from "next/link";

import styles from "./button.module.css";

const Button = ({ children, link, onClick }) => {
    if (!link) {
        return (
            <button className={styles.btn} onClick={onClick}>
                {children}
            </button>
        );
    }

    return (
        <Link href={link}>
            <a className={styles.btn}>{children}</a>
        </Link>
    );
};

export default Button;
