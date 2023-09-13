import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (date, field) => {
    console.log(date)
    if (field === 'start') {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  return (
    <div>
      <div>
        <DatePicker
          selected={startDate}
          onChange={(date) => handleDateChange(date, 'start')}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText='Start Date'
        />
      </div>
      <div>
        <DatePicker
          selected={endDate}
          onChange={(date) => handleDateChange(date, 'end')}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText='End Date'
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
