import * as React from 'react';
import { Spinner } from 'reactstrap';

// @ts-ignore
import IntervalTimer from 'react-interval-timer';

const Loading = () => {
  const [dotPosition, setDotPosition] = React.useState(0);

  const setNewDotPosition = () => {
    if (dotPosition === 3) {
      setDotPosition(0);
    } else {
      setDotPosition(dotPosition + 1);
    }
  };

  const renderDots = () => {
    if (dotPosition === 0) {
      return `\u00a0\u00a0\u00a0`;
    } else if (dotPosition === 1) {
      return `.\u00a0\u00a0`;
    } else if (dotPosition === 2) {
      return `..\u00a0`;
    } else {
      return `...`;
    }
  };
  return (
    <div
      style={{
        marginTop: '30px',
        marginBottom: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <IntervalTimer
        timeout={400}
        callback={() => {
          setNewDotPosition();
        }}
        enabled={true}
        repeat={true}
      />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Spinner color="primary" />

        <span
          style={{
            marginTop: '20px',
            fontSize: '13px',
          }}
        >
          Učitavanje u toku{renderDots()}
        </span>
      </div>
    </div>
  );
};

export default Loading;
