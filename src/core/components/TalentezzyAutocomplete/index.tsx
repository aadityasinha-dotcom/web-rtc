import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useOnClickOutside } from 'shared/hooks/useOnClickOutside';
import style from './autocomplete.module.scss';

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
  options: any[];
  optionKey?: string | number;
  valueKey?: string | number;
  multiSelect?: boolean;
  error?: string;
  prefixOptionElement?: any;
  suffixOptionElement?: any;
  inputPrefix?: any;
  inputSuffix?: any;
  clearIcon?: boolean;
  getOptionSelected?: any;
}

const TalentezzyAutocomplete = (props: Props) => {
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
    inputSuffix,
    clearIcon,
    getOptionSelected,
  } = props;
  
  const dropdownRef: any = useRef(null);
  const [inputValue, setInputValue] = useState<string | undefined | number>('');
  const [showOptions, setShowOptions] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<any[]>([]);
  
  useOnClickOutside(dropdownRef, () => setShowOptions(false));
  
  useMemo(() => {
    setInputValue(value);
  }, [value]);
  
  useEffect(() => {
    onChange(inputValue);
    const filtered_options = inputValue 
      ? options.filter(
          (option) =>
            String(option)
              .toLocaleLowerCase()
              .indexOf(String(inputValue).toLocaleLowerCase()) !== -1
        )
      : options;
    setFilteredOptions(filtered_options);
  }, [inputValue]);
  
  useEffect(() => {
    if (!inputValue || !filteredOptions.length) setFilteredOptions(options);
  }, [options]);
  
  return (
    <div className={style.autocompleteContainer}>
      <div className={style.inputFieldGroup}>
        {label && <label className={labelClass}>{label}</label>}
        <div className={style.inputField}>
          <div className={style.inputWrapper}>
            {inputPrefix && <span className="inputPrefix">{inputPrefix}</span>}
            <input
              value={inputValue || ''}
              onChange={(e) => {
                if (!showOptions) setShowOptions(true);
                setInputValue(e.target.value);
              }}
              placeholder={placeholder || ''}
              onClick={() => setShowOptions(!showOptions)}
            />
            {clearIcon && inputValue && (
              <img 
                className="clear-icon" 
                onClick={() => setInputValue('')}
                src='/svg/cross-black.svg'
                alt='Clear'
              />
            )}
            {inputSuffix && <span className="inputSuffix">{inputSuffix}</span>}
          </div>
          
          {showOptions && (
            <div className="options" ref={dropdownRef}>
              {!filteredOptions.length && (
                <div className="no-option">No options</div>
              )}
              {filteredOptions.map((option: any, index: number) => (
                <div
                  key={index}
                  onClick={() => {
                    setInputValue(option);
                    setShowOptions(false);
                    getOptionSelected && getOptionSelected(option);
                  }}
                  className="option"
                >
                  {prefixOptionElement && (
                    <span className="prefix-element">{prefixOptionElement}</span>
                  )}
                  <span className="option-text">
                    {optionKey ? option[optionKey] : option}
                  </span>
                  {suffixOptionElement && (
                    <span className="suffix-element">{suffixOptionElement}</span>
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

export default TalentezzyAutocomplete;
