import { useRef } from "react";

import Button from "../ui/button";
import styles from "./events-search.module.css";

const EventsSearch = ({ onSearch }) => {
    const months = [
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

    const yearRef = useRef();
    const monthRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const selectedYear = yearRef.current.value;
        const selectedMonth = monthRef.current.value;

        onSearch(selectedYear, selectedMonth);
    };

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.controls}>
                <div className={styles.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={yearRef}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={styles.control}>
                    <label htmlFor="month">Month</label>
                    <select id="month" ref={monthRef}>
                        {months.map((month, idx) => (
                            <option key={month} value={idx + 1}>
                                {month}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <Button>Find Events</Button>
        </form>
    );
};

export default EventsSearch;
