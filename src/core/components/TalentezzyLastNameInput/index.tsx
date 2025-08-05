// import { input } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import styles from './last-name-input.module.scss';

interface Props {
  isSubmitted: boolean;
  isLoading: boolean;
  emitInputValue: Function;
  inputValue: string;
}

const TalentezzyLastNameInput = (props: Props) => {
  const { isSubmitted, isLoading, inputValue, emitInputValue } = props;
  const [value, setValue] = useState('');
  const [isValid, setValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Enter a valid last name.');

  const regex = /^[A-Za-z\s]+$/;

  useEffect(() => {
    if (inputValue) handleFormOnChange({ target: { value: inputValue } });
  }, [inputValue]);

  const handleFormOnChange = (event: any) => {
    const val = String(event.target.value).trim();
    const valid = regex.test(val);
    setValue(val);
    setErrorMessage(!valid ? 'Enter a valid lasst name.' : '');
    setValid(valid ? true : false);
    emitInputValue({ value: val, valid });
  };

  return (
    <div className={styles.lastNameInput}>
      <div
        className={
          isSubmitted
            ? !isValid || !value
              ? 'input-error'
              : 'input-success'
            : 'input'
        }
      >
        <Form.Control
          type='email'
          onChange={handleFormOnChange}
          pattern='[a-z]'
          value={value}
          placeholder='Last Name'
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

export default TalentezzyLastNameInput;
