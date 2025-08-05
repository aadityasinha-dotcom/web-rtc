import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import styles from './button.module.scss';

interface Props {
  btnText: string;
  variant?: 'text' | 'outlined' | 'contained' | 'primary';
  className?: string;
  isLoading?: boolean;
  onBtnClick: Function;
  type?: 'button' | 'submit' | 'reset';
  style?: any;
}

const TalentEzyButton = (props: Props) => {
  const { btnText, variant, className, type, style, isLoading, onBtnClick } =
    props;

  return (
    <Button
      variant={variant}
      className={className}
      type={type}
      onClick={(e) => onBtnClick(e)}
      style={style}
    >
      {isLoading ? (
        <div style={{ display: 'flex' }}>
          <Spinner
            animation='border'
            style={{
              color: variant === 'primary' ? '#ffffff' : '#061178',
              width: '30px',
              height: '30px',
            }}
          />
        </div>
      ) : (
        btnText
      )}
    </Button>
  );
};

export default TalentEzyButton;
