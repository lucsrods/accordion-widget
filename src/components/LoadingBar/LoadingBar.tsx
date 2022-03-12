import React, { useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import { BarFilling, BarWrapper, CountUpWrapper } from './styles';

type Props = {
  total: number;
  completed: number;
}

function LoadingBar({ total, completed }: Props) {
  const prevPercentageRef = useRef<number>(0);
  const percentage = Number((completed * 100 / total).toFixed(0));

  useEffect(() => {
    prevPercentageRef.current = percentage;
  }, [percentage]);

  return (
    <>
      <BarWrapper>
        <BarFilling percentage={percentage}>
          <CountUpWrapper>
            <CountUp start={prevPercentageRef.current} end={percentage} duration={0.5} suffix="%" />
          </CountUpWrapper>
        </BarFilling>
      </BarWrapper>
    </>
  );
}

export default LoadingBar;
