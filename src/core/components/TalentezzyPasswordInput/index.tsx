import React, { useState } from 'react';
import { passwordStrength } from 'check-password-strength';
import { Form } from 'react-bootstrap';
import styles from './password-input.module.scss';

interface Props {
  isSubmitted: boolean;
  isLoading: boolean;
  emitInputValue: Function;
  placeholder: string;
  showPasswordStrength: boolean;
  className?: string;
}

const TalentezzyPasswordInput = (props: Props) => {
  const {
    isSubmitted,
    isLoading,
    placeholder,
    showPasswordStrength,
    emitInputValue,
    className,
  } = props;

  const passwordStrengthValue: any = {
    ['Too weak']: 'tooWeak',
    ['Weak']: 'weak',
    ['Medium']: 'medium',
    ['Strong']: 'strong',
  };

  const [value, setValue] = useState('');
  const [isValid, setValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Enter a password.');

  const [phoneFieldType, setPhoneFieldType] = useState('password');
  const [passStrength, setPassStrength] = useState('');

  const handleFormOnChange = (event: any) => {
    const passValue = event.target.value;
    const { length, value } = passwordStrength(passValue);
    const valid = passValue && (showPasswordStrength ? ['Medium', 'Strong'].includes(value) : true);
    setValue(passValue);
    setValid(valid ? true : false);
    setErrorMessage(!valid ? 'Enter a password.' : '');
    setPassStrength(length ? value : '');
    emitInputValue({ value: passValue, valid });
  };

  return (
    <div className={`${styles.passwordInput} ${className || ''}`}>
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
          type={phoneFieldType}
          onChange={handleFormOnChange}
          placeholder={placeholder || 'Password'}
        />
        {/* <img */}
        {/*   src={phoneFieldType === 'password' ? '/svg/eye-invisible.svg' : '/svg/eye-visible.svg'} */}
        {/*   className='eye-icon' */}
        {/*   onClick={() => */}
        {/*     setPhoneFieldType( */}
        {/*       phoneFieldType === 'password' ? 'text' : 'password' */}
        {/*     ) */}
        {/*   } */}
        {/*   alt='View Password' */}
        {/* /> */}
      </div>
      {showPasswordStrength && value && (
        <div className={passwordStrengthValue[passStrength]}>
          Password Strength: {passStrength}!
        </div>
      )}
      {isSubmitted && errorMessage && !value && (
        <div className={styles.errorMsg}>{errorMessage}</div>
      )}
    </div>
  );
};

export default TalentezzyPasswordInput;
