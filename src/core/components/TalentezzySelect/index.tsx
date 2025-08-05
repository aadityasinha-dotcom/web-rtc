import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useOnClickOutside } from 'shared/hooks/useOnClickOutside';
import style from './select.module.scss';

interface ISelectOptions {
  label: string;
  value: string;
}

interface Props {
  value?: string;
  label?: string;
  groupClass?: string;
  labelClass?: string;
  controlClass?: string;
  placeholder?: string;
  onChange: any;
  onInput?: Function;
  onSelect?: Function;
  style?: object;
  options: ISelectOptions[];
  optionKey?: string | number;
  valueKey?: string | number;
  multiSelect?: boolean;
  error?: string;
  prefixOptionElement?: any;
  suffixOptionElement?: any;
  inputPrefix?: any;
  clearIcon?: boolean;
  defaultCaret?: boolean;
}

const TalentezzySelect = (props: Props) => {
  const {
    value,
    label,
    labelClass,
    placeholder,
    options,
    onChange,
    optionKey,
    prefixOptionElement,
    suffixOptionElement,
    inputPrefix,
    clearIcon,
    defaultCaret,
  } = props;
  
  const dropdownRef: any = useRef(null);
  const [inputValue, setInputValue] = useState<string | undefined>('');
  const [showOptions, setShowOptions] = useState(false);

  useOnClickOutside(dropdownRef, () => setShowOptions(false));

  useEffect(() => {
    if (!inputValue) setInputValue(value);
  }, [value]);

  useMemo(() => {
    if (!inputValue) {
      onChange('');
      return;
    }
    if (!options.length) return;
    const index = options.findIndex(
      (option: any) => option.label === inputValue
    );
    if (index === -1) { 
      onChange(inputValue);
    } else {
      onChange(options[index].value);
    }
  }, [inputValue]);

  const selectOption = (optionPosition: string) => {
    const index = options.findIndex((option) => option.label === inputValue);
    if (optionPosition == 'prev' && index > 0) {
      setInputValue(options[index - 1].label);
    } else if (optionPosition == 'next' && index < options.length - 1) {
      setInputValue(options[index + 1].label);
    }
  };

  return (
    <div className={style.selectContainer}>
      <div className={style.selectFieldGroup}>
        {label && <label className={labelClass || style.selectLabel}>{label}</label>}
        <div className={style.selectWrapper} ref={dropdownRef}>
          <div className={style.selectField}>
            {inputPrefix && <div className={style.inputPrefix}>{inputPrefix}</div>}
            <input
              type='text'
              readOnly
              value={inputValue}
              onChange={(e: any) => {
                if (!showOptions) setShowOptions(true);
                setInputValue(e.target.value);
              }}
              placeholder={placeholder || 'Select an option'}
              onClick={() => setShowOptions(!showOptions)}
              className={style.selectInput}
            />
            <div className={style.selectControls}>
              {clearIcon && inputValue && (
                <img
                  className={style.clearIcon}
                  onClick={(e) => {
                    e.stopPropagation();
                    setInputValue('');
                  }}
                  src='/svg/cross-black.svg'
                  alt='Clear'
                />
              )}
              {/* {!defaultCaret && ( */}
              {/*   <div className={style.inputSuffix}> */}
              {/*     <div className={style.caretGroup}> */}
              {/*       <div */}
              {/*         className={style.caretUp} */}
              {/*         onClick={(e) => { */}
              {/*           e.stopPropagation(); */}
              {/*           selectOption('prev'); */}
              {/*         }} */}
              {/*       > */}
              {/*         <img src='/svg/caret-up.svg' alt='Previous' /> */}
              {/*       </div> */}
              {/*       <div */}
              {/*         className={style.caretDown} */}
              {/*         onClick={(e) => { */}
              {/*           e.stopPropagation(); */}
              {/*           selectOption('next'); */}
              {/*         }} */}
              {/*       > */}
              {/*         <img src='/svg/caret-down.svg' alt='Next' /> */}
              {/*       </div> */}
              {/*     </div> */}
              {/*   </div> */}
              {/* )} */}
              {defaultCaret && (
                <div className={style.defaultCaret}>
                  <img
                    src='/svg/caret-down.svg'
                    className={showOptions ? style.caretRotated : ''}
                    alt='Toggle dropdown'
                  />
                </div>
              )}
            </div>
          </div>
          
          {showOptions && (
            <div className={style.optionsDropdown}>
              {!options.length && <div className={style.noOption}>No options available</div>}
              {options && options.map((option: any) => (
                <div
                  key={option.value}
                  onClick={() => {
                    setInputValue(option.label);
                    setShowOptions(false);
                  }}
                  className={`${style.option} ${option.label === inputValue ? style.selected : ''}`}
                >
                  {prefixOptionElement && (
                    <div className={style.prefixElement}>
                      {prefixOptionElement}
                    </div>
                  )}
                  <div className={style.optionLabel}>
                    {optionKey ? option[optionKey] : option.label}
                  </div>
                  {suffixOptionElement && (
                    <div className={style.suffixElement}>
                      {suffixOptionElement}
                    </div>
                  )}
                  {option.label === inputValue && (
                    <div className={style.checkmark}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3334 4.66666L6.00002 12L2.66669 8.66666" stroke="#061178" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TalentezzySelect;
