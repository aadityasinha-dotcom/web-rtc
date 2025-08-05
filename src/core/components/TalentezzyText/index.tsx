import React, { useEffect, useMemo, useRef, useState } from 'react';
import style from './text.module.scss';

interface Props {
  value?: string | undefined;
  label?: string;
  labelClass?: string;
  groupClass?: string;
  controlClass?: string;
  placeholder?: string;
  onChange: any;
  onInput?: Function;
  onSelect?: Function;
  style?: object;
  valueKey?: string | number;
  error?: string;
  inputPrefix?: any;
  inputSuffix?: any;
  clearIcon?: boolean;
}

const TalentezzyText = (props: Props) => {
  const {
    label,
    labelClass,
    placeholder,
    value,
    onChange,
    inputPrefix,
    inputSuffix,
    clearIcon,
  } = props;
  const dropdownRef: any = useRef(null);
  const [inputValue, setInputValue] = useState<string | undefined>('');

  // useEffect(() => {
    useMemo(() => setInputValue(value || ''), [value]);
  // }, [value]);

  useEffect(() => {
    onChange(inputValue);
  }, [inputValue]);

  return (
    <div className={style.autocompleteContainer}>
      <div className={style.inputFieldGroup}>
        {label && <label className={labelClass}>{label}</label>}
        <div ref={dropdownRef}>
          <div className={style.inputField}>
            {inputPrefix && <div className='inputPrefix'>{inputPrefix}</div>}
            <input
              type='text'
              value={inputValue}
              onChange={(e: any) => setInputValue(e.target.value)}
              placeholder={placeholder || ''}
            />
            {clearIcon && inputValue && (
              <img
                className='clear-icon'
                onClick={() => setInputValue('')}
                src='/svg/cross-black.svg'
                alt='Clear'
              />
            )}
            {inputSuffix && <div className='inputSuffix'>{inputSuffix}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentezzyText;
