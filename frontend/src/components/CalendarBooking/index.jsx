import React, { useState, useEffect } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import { useMediaQuery } from 'react-responsive';
import "./CalendarBooking.css"

function CalendarProduct({ handleStartDateChange, handleEndDateChange, unavailableDates}) {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [disabledDates, setDisabledDates] = useState([])


    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        const startDay = start.getDate().toString().length === 1 ? `0${start.getDate()}` : start.getDate();
        const startMonth = start.getMonth().toString().length === 1 ? `0${start.getMonth() + 1}` : start.getMonth() + 1;
        const startYear = start.getFullYear();
        handleStartDateChange(`${startYear}-${startMonth}-${startDay}`);
        const endDay = end.getDate().toString().length === 1 ? `0${end.getDate()}` : end.getDate();
        const endMonth = end.getMonth().toString().length === 1 ? `0${end.getMonth() + 1}` : end.getMonth() + 1;
        const endYear = end.getFullYear();
        handleEndDateChange(`${endYear}-${endMonth}-${endDay}`)
    }

    const isMobile = useMediaQuery({ query: '(max-width: 1500px)' });
    registerLocale("es", es);
    setDefaultLocale("es");

    const getDaysArray = (start, end) => {
        for(var arr=[],dt=new Date(start); dt<=new Date(end); dt.setDate(dt.getDate()+1)){
            let date = new Date(dt)
            date.setDate(date.getDate() + 1)
            arr.push(date);
        }
        return arr;
    };
    
    const pairwise = (arr) => {
        let dates = []
        for(let i=0; i < arr.length-1; i+=2){
            dates.push(...getDaysArray(arr[i], arr[i + 1]))
        }
        setDisabledDates(dates);
    }

    useEffect(() => {
        pairwise(unavailableDates)
    }, [])

    return(
        <DatePicker
        monthsShown={isMobile ? 1 : 2}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        minDate={new Date()}
        selectsRange={true}
        locale="es"
        changeMonth
        excludeDates={disabledDates}
        inline
        />
    )
}

export default CalendarProduct;