import React, { useEffect, useState, ChangeEvent } from 'react';
import { Form } from 'react-bootstrap';
import IntlTelInput, { CountryData } from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import styles from './phone-input.module.scss';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'

interface Props {
  isSubmitted?: boolean;
  isLoading?: boolean;
  emitInputValue: Function;
  inputValue: string;
  customClass?: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
}

const TalentEzyPhoneInput = (props: Props) => {
  const {
    isSubmitted,
    isLoading,
    inputValue,
    emitInputValue,
    customClass,
    disabled = false,
    onChange,
  } = props;

  const [value, setValue] = useState('');
  const [countryISOCode, setCountryISOCode] = useState('in');
  // const [countryDialCode, setCountryDialCode] = useState('');
  const [isValid, setValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Enter phone number.');

  const { ipConfig }: any = useSelector((state: RootState) => state.app);

  const handleFormOnChange = ({
    value, 
    data,
    event,
    formattedValue,
  }: any) => {
    // const v = String(fullNumber)
    //   .replace(/[^0-9.]/g, '')
    //   .replace(/(\..*?)\..*/g, '$1');
    // setValue(fullNumber);
    setValid(true);
    setErrorMessage(!isValid ? 'Enter phone number.' : '');
    emitInputValue({
      value: String(formattedValue).replace(/\s/g, '').replace(/-/g, ''),
      valid: true,
    });
  };

  // useEffect(() => {
  //   setCountryISOCode(ipConfig.isoCode);
  //   // setCountryDialCode(ipConfig.dialCode);
  // }, [ipConfig.isoCode, ipConfig.dialCode]);

  useEffect(() => {
    setValue(inputValue);
    onChange && onChange({ target: { value: inputValue } });
  }, [inputValue]);

  return (
    <div className={styles.phoneInput}>
      <div
        className={
          isSubmitted
            ? !isValid || !value
              ? `input-error ${customClass}`
              : `input-success ${customClass}`
            : `input ${customClass}`
        }
      >
        <PhoneInput
          country={countryISOCode}
          placeholder='Mobile'
          value={value}
          onChange={(
            value: string, 
            data: {} | CountryData, 
            event: ChangeEvent<HTMLInputElement>, 
            formattedValue: string,
          ) =>
            handleFormOnChange({
              value, 
              data,
              event,
              formattedValue,
            })
          }
        />
        {/* {countryISOCode && ( */}
        {/*   <IntlTelInput */}
        {/*     containerClassName='intl-tel-input' */}
        {/*     // preferredCountries={['in']} */}
        {/*     defaultCountry={countryISOCode} */}
        {/*     placeholder='Mobile' */}
        {/*     // geoIpLookup={(e) => console.log(e)} */}
        {/*     // telInputProps={{}} */}
        {/*     value={value} */}
        {/*     disabled={disabled} */}
        {/*     onPhoneNumberChange={( */}
        {/*       isValid: boolean, */}
        {/*       value: string, */}
        {/*       selectedCountryData: CountryData, */}
        {/*       fullNumber: string */}
        {/*     ) => */}
        {/*       handleFormOnChange({ */}
        {/*         value, */}
        {/*         isValid, */}
        {/*         fullNumber, */}
        {/*         selectedCountryData, */}
        {/*       }) */}
        {/*     } */}
        {/*     // onSelectFlag={(currentNumber: any, selectedCountryData: any) => { */}
        {/*     //   setCountryISOCode(selectedCountryData.iso2); */}
        {/*     //   setCountryDialCode(selectedCountryData.dialCode); */}
        {/*     // }} */}
        {/*   /> */}
        {/* )} */}
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

export default TalentEzyPhoneInput;
