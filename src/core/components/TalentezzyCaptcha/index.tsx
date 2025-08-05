import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import 'react-intl-tel-input/dist/main.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCaptchaAction } from 'store/actions/app.actions';
import { RootState } from 'store/reducers';
import styles from './captcha.module.scss';

interface Props {
  isSubmitted: boolean;
  isLoading: boolean;
  emitInputValue: Function;
  refreshCaptcha: () => void;
}

const TalentezzyCaptcha = (props: Props) => {
  const { isSubmitted, isLoading, refreshCaptcha, emitInputValue } = props;

  const [value, setValue] = useState('');
  const [isValid, setValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Enter captcha.');

  const { captcha, isCaptchaLoading }: any = useSelector(
    (state: RootState) => state.app
  );

  const handleFormOnChange = (event: any) => {
    const value = event.target.value;
    setValue(value);
    setValid(value ? false : true);
    setErrorMessage(!value ? 'Enter captcha.' : '');
    emitInputValue({
      value,
      valid: value ? true : false,
    });
  };

  //   useEffect(() => {
  //     setCountryISOCode(ipConfig.isoCode);
  //     setCountryDialCode(ipConfig.dialCode);
  //   }, [ipConfig.isoCode, ipConfig.dialCode]);

  return (
    <div className={styles.captchaContainer}>
      <div
        className={
          isSubmitted
            ? isValid || !value
              ? 'input-error'
              : 'input-success'
            : 'input'
        }
      >
        <Form.Control
          type='text'
          value={value}
          pattern='[0-9]*'
          onChange={handleFormOnChange}
          placeholder='Captcha'
          maxLength={20}
        />
        <img
          className='captcha'
          src={'data:img/jpg;base64,' + captcha}
          alt='Captcha'
        />
        <img
          className={isCaptchaLoading ? 'refresh-btn rotate' : 'refresh-btn'}
          onClick={refreshCaptcha}
          src='/svg/refresh.svg'
          alt='Refresh'
        />
      </div>
      {isSubmitted && errorMessage && (
        <div className={styles.errorMsg}>{errorMessage}</div>
      )}
    </div>
  );
};

export default TalentezzyCaptcha;
