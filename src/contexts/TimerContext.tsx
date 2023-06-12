import { createContext, useContext, useEffect, useMemo, useState } from 'react';

interface TimerContextProps {
  seconds: number;
}

interface TimerProviderProps {
  children: React.ReactNode;
}

export const TimerContext = createContext<TimerContextProps>(
  {} as TimerContextProps,
);

export const TimerProvider: React.FC<TimerProviderProps> = ({ children }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((sec) => sec + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <TimerContext.Provider
      value={useMemo(
        () => ({
          seconds,
        }),
        [seconds],
      )}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = (): TimerContextProps => {
  const context = useContext(TimerContext);

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useTimer must be within TimerProvider');
  }

  return context;
};
