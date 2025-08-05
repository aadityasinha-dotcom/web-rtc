import React, { useEffect, useState } from 'react';
import 'react-datetime/css/react-datetime.css';
import Datetime from 'react-datetime';
import styles from './datepicker.module.scss';
import moment from 'moment';

interface Props {
  value?: Date | string;
  emitInputValue: (e: any) => void;
  defaultValue?: Date;
  label?: string;
  labelClass?: string;
  isSubmitted?: boolean;
  viewDate?: Date;
  dateFormat?: boolean | string;
  timeFormat?: boolean | string;
  input?: boolean;
  open?: boolean;
  locale?: string;
  utc?: boolean;
  displayTimeZone?: string;
  onChange?: (e: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  onViewModeChange?: (e: any) => void;
  onNavigateBack?: (e: any) => void;
  onNavigateForward?: (e: any) => void;
  viewMode?: string | number;
  className?: string;
  inputProps?: object; // onClick, placeholder, disabled, required, name, className
  isValidDate?: (e: any) => void;
  renderInput?: (e: any) => void;
  renderDay?: (e: any) => void;
  renderMonth?: (e: any) => void;
  renderYear?: (e: any) => void;
  strictParsing?: boolean;
  closeOnSelect?: boolean;
  closeOnTab?: boolean;
  timeConstraints?: object; // { hours: { min: 9, max: 15, step: 2 }} hours can't be lower than 9 and higher than 15, and it will change adding or subtracting 2 hours everytime the buttons are clicked
  disableCloseOnClickOutside?: boolean;
}
const TalentezzyDatepicker = ({
  emitInputValue,
  value,
  defaultValue,
  label,
  labelClass,
  isSubmitted,
  viewDate,
  dateFormat,
  timeFormat,
  input,
  open,
  locale,
  utc,
  displayTimeZone,
  onChange,
  onFocus,
  onBlur,
  onViewModeChange,
  onNavigateBack,
  onNavigateForward,
  viewMode,
  className,
  inputProps,
  isValidDate,
  renderInput,
  renderDay,
  renderMonth,
  renderYear,
  strictParsing,
  closeOnSelect,
  closeOnTab,
  timeConstraints,
  disableCloseOnClickOutside,
}: Props) => {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined | null>(
    'Enter a valid email.'
  );

  useEffect(() => {
    if (value && !inputValue) handleFormOnChange(value);
  }, [value]);

  const handleFormOnChange = (event: any) => {
    const val = event;
    const valid = val ? true : false;
    setInputValue(val);
    setErrorMessage(!valid ? 'Enter a valid email.' : '');
    setValid(valid);
    emitInputValue({ value: moment(val).format(String(dateFormat)), valid });
  };

  return (
    <div className={styles.datepickerInput}>
      {label && <label className={labelClass}>{label}</label>}
      <div
        className={
          isSubmitted
            ? !isValid || !value
              ? 'input-error'
              : 'input-success'
            : 'input'
        }
      >
        <Datetime
          value={value}
          dateFormat={dateFormat}
          timeFormat={timeFormat}
          viewMode={viewMode}
          closeOnSelect={closeOnSelect}
          timeConstraints={timeConstraints}
          inputProps={inputProps}
          onChange={handleFormOnChange}
        />
        {isSubmitted && (!isValid || !value) && (
          <img src='/svg/failure.svg' className='failure-icon' alt='Invalid' />
        )}
        {isSubmitted && isValid && value && (
          <img src='/svg/success.svg' className='success-icon' alt='Valid' />
        )}
      </div>
      {isSubmitted && errorMessage && (
        <div className={styles.errorMsg}>{errorMessage}</div>
      )}
    </div>
  );
};

export default TalentezzyDatepicker;
