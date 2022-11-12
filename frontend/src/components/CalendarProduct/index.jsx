import React, { useState, useEffect } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import { addDays } from 'date-fns';
import { useMediaQuery } from 'react-responsive';
import moment from 'moment';
import "./CalendarProduct.css"

function CalendarProduct() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    }
    const isMobile = useMediaQuery({ query: '(max-width: 761px)' });
    registerLocale("es", es);
    setDefaultLocale("es");

    return(
        <DatePicker
        monthsShown={isMobile ? 1 : 2}
        selected={startDate}
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