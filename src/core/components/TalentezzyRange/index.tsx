import React, { useEffect, useState } from 'react';
import { Range, getTrackBackground } from 'react-range';

interface Props {
  emitRange: (e: any) => void;
}

const STEP = 0.1;
const MIN = 0;
const MAX = 100;

const TalentezzyRange = ({ emitRange }: Props) => {
  const STEP = 10;
  const MIN = 0;
  const MAX = 100;
  const [values, setValues] = useState([0, 100]);

  useEffect(() => {
    emitRange(values);
  }, [values]);

  return (
    <Range
      values={values}
      step={STEP}
      min={MIN}
      max={MAX}
      onChange={(values) => setValues(values)}
      renderMark={({ props, index }) => (
        <div
          {...props}
          style={{
            ...props.style,
            marginTop: 0,
            height: '6px',
            width: '5px',
            backgroundColor: index * STEP < values[0] ? '#548BF4' : '#ccc',
          }}
        >
          <span
            style={{
              display: 'block !important',
              marginTop: '15px',
              marginLeft: '-4px',
              fontSize: '12px',
            }}
          >
            {(MIN + 10) * index}
          </span>
        </div>
      )}
      renderTrack={({ props, children }) => (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{
            ...props.style,
            height: '36px',
            display: 'flex',
            width: '100%',
          }}
        >
          <div
            ref={props.ref}
            style={{
              height: '5px',
              width: '100%',
              borderRadius: '4px',
              background: getTrackBackground({
                values,
                colors: ['#ccc', '#548BF4', '#ccc'],
                min: MIN,
                max: MAX,
              }),
              alignSelf: 'center',
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: '25px',
            width: '25px',
            borderRadius: '15px',
            backgroundColor: '#FFF',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0px 2px 6px #AAA',
          }}
        >
          {/* <div
            style={{
              height: "16px",
              width: "5px",
              backgroundColor: isDragged ? "#548BF4" : "#CCC"
            }}
          /> */}
        </div>
      )}
    />
  );
};

export default TalentezzyRange;
