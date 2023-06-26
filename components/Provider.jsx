'use client';
import { createContext, useContext } from 'react';
import { SessionProvider } from 'next-auth/react'
import { useState } from 'react';
export const SettingContext = createContext();


const Provider = ({ children, session }) => {
  const [pomodoro, setPomodoro] = useState(25);
  const [executing, setExecuting] = useState({
    work: 25,
    shortBreak: 5,
    longBreak: 30,
    active: 'Work',
});
  const [startAnimate, setStartAnimate] = useState(false);

  const stopTimer=()=>{
    setStartAnimate(false)
  }
  const startTimer = () => {
    setStartAnimate(true);
  }

  const pauseTimer = () => {
    setStartAnimate(false);
  }

  const updateExecute = (updatedSettings) => {
    setExecuting(updatedSettings);
    setTimerTime('Work',updatedSettings);
  }

  const settingButton = () => {
    setExecuting({});
    setPomodoro(0);
  }

  const setTimerTime = (activeState,evaluate) => {
    switch (activeState) {
      case 'Work':
        setPomodoro(evaluate.work)
        break;
      case 'Short Break':
        setPomodoro(evaluate.shortBreak)
        break;
      case 'Long Break':
        setPomodoro(evaluate.longBreak)
        break;
      default:
        setPomodoro(0);
        break;
    }

  }

  const countdownChildren = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return `${minutes}m ${seconds}s`
  }

  const setCurrentTimer = (activeState) => {   
    setExecuting({
      ...executing, active: activeState
    })
    setTimerTime(activeState,executing);
  }
  return (
    // <SessionProvider session={session}>
      <SettingContext.Provider 
      value={
        {stopTimer,
          updateExecute,
          pomodoro,
          executing,
          startAnimate,
          startTimer,
          pauseTimer,
          settingButton,
          setCurrentTimer,
          setTimerTime,
          countdownChildren
        }
        }>
        {children}
      </SettingContext.Provider>
    // </SessionProvider>
  )
}

export default Provider