import React, { useEffect, useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import { useMediaQuery } from 'react-responsive';
import "./CalendarProduct.css"


function CalendarProduct({ unavailableDates }) {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [disabledDates, setDisabledDates] = useState([])

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    }

    const isMobile = useMediaQuery({ query: '(max-width: 761px)' });
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