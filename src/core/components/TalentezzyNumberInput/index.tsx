import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import styles from './number-input.module.scss';

interface Props {
  placeholder: string;
  isSubmitted?: boolean;
  isLoading: boolean;
  emitInputValue: Function;
  message: string
}

const TalentEzyNumberInput = (props: Props) => {
  const { isSubmitted, placeholder, message, isLoading, emitInputValue } = props;
  const [inputValue, setInputValue] = useState('');
  const [errorState, setErrorState] = useState(false);
  const [errorMessage, setErrorMessage] = useState(message);

  const handleFormOnChange = (event: any) => {
    const value = event.target.value;
    setInputValue(value);
    setErrorState(value ? false : true);
    setErrorMessage(!value ? message : '');
    emitInputValue(value);
  };

  return (
    <div className={styles.numberInput}>
      <div
        className={
          isSubmitted
            ? errorState || !inputValue
              ? 'input-error'
              : 'input-success'
            : 'input'
        }
      >
        <Form.Control
          type='number'
          value={inputValue}
          pattern='[0-9]*'
          onChange={handleFormOnChange}
          placeholder={placeholder}
          onInput={(e: any) => {
            e.target.value = e.target.value.replace(/\D/g, '').toString().slice(0, 6); // Remove non-numeric characters
            // e.target.value = Math.max(0, parseInt(e.target.value))
            //   .toString()
            //   .slice(0, 6);
          }}
        />
        {isSubmitted && (errorState || !inputValue) && (
          <img src='/svg/failure.svg' className='failure-icon' alt='Invalid' />
        )}
        {isSubmitted && !errorState && inputValue && (
          <img src='/svg/success.svg' className='success-icon' alt='Valid' />
        )}
      </div>
      {isSubmitted && errorMessage && (
        <div className={styles.errorMsg}>{errorMessage}</div>
      )}
    </div>
  );
};

export default TalentEzyNumberInput;
