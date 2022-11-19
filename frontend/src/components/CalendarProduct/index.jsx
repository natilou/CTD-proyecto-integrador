import React, { useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import { addDays } from 'date-fns';
import { useMediaQuery } from 'react-responsive';
import moment from 'moment';
import "./CalendarProduct.css"

function CalendarProduct({ handleStartDateChange, handleEndDateChange }) {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        const startDay = start.getDate();
        const startMonth = start.getMonth() + 1;
        const startYear = start.getFullYear();
        handleStartDateChange(`${startDay}/${startMonth}/${startYear}`);
        const endDay = end.getDate();
        const endMonth = end.getMonth() + 1;
        const endYear = end.getFullYear();
        handleEndDateChange(`${endDay}/${endMonth}/${endYear}`);

    }
    const isMobile = useMediaQuery({ query: '(max-width: 761px)' });
    registerLocale("es", es);
    setDefaultLocale("es");

    return(
        <DatePicker
        monthsShown={isMobile ? 1 : 2}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        minDate={moment().toDate()}
        selectsRange={true}
        locale="es"
        changeMonth
        excludeDates={
            [
                addDays(new Date(), 3),
                addDays(new Date(), 4),
                addDays(new Date(), 5),
                addDays(new Date(), 30),
                addDays(new Date(), 31),
                addDays(new Date(), 32),
                addDays(new Date(), 33),
            ]}
        inline
        />
    )
}

export default CalendarProduct;