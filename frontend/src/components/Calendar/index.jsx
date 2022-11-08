import React, { useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";

const Calendar = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  //console.log({ dateRange })

  registerLocale("es", es);
  setDefaultLocale("es");

  return (
      <DatePicker
        className="date-picker-container"
        placeholderText="Check in - Check out"
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        minDate={new Date()}
        locale="es"
        monthsShown={2}
        dateFormat="yyyy/M/d"
        changeMonth
      />
  );
}

export default Calendar;
