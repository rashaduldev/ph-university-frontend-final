import { ReactNode } from "react";

export type Troutes={
    path:string;
    element:ReactNode;
} 

export type TUserPath = {
    name: string;
    path?: string;
    element?: ReactNode;
    children?: TUserPath[];
  };

 export type TsideberItem= {
     key: string;
     label: ReactNode;
     children?: TsideberItem[];
   };