'use client';
import React from 'react';
import { IDpObj } from '@/types';

interface IProps {
  children: React.ReactNode;
}

interface IDpCntent {
  dpDataObj: IDpObj | null;
  setDpDataObj: React.Dispatch<React.SetStateAction<IDpObj>>;
}

// default no-op functions
const NOOP = () => {};

export const DpContext = React.createContext<IDpCntent>({
  dpDataObj: null,
  setDpDataObj: NOOP,
});

export const DpProvider: React.FC<IProps> = ({ children }) => {
  const [dpDataObj, setDpDataObj] = React.useState<IDpObj>({
    name: '',
    hook: '',
    picture: '',
  });

  return (
    <DpContext.Provider
      value={{
        dpDataObj,
        setDpDataObj,
      }}
    >
      {children}
    </DpContext.Provider>
  );
};

export const useDpObj = () => {
  const context = React.useContext(DpContext);
  return context;
};
