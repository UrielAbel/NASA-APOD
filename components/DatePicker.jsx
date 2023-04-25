import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from '../styles/Pickers.module.css'

const DatePicker = ({ date, setDate }) => {

    return (
        <div>
            <ReactDatePicker
                selected={date}
                onChange={setDate}
                className={styles.inputPicker}
                dateFormat="yyyy-MM-dd"
            />
        </div>
    )
}
export default DatePicker;