import React from "react";
import { createContext } from "react";

type ContextType = 
{
    wondrousName: string;
    setWondrousName: React.Dispatch<React.SetStateAction<string>>;
    wondrousLevel: string;
    setWondrousLevel: React.Dispatch<React.SetStateAction<string>>;
    wondrousDescription: string;
    setWondrousDescription: React.Dispatch<React.SetStateAction<string>>;
    wondrousPrice: number;
    setWondrousPrice: React.Dispatch<React.SetStateAction<number>>;
    wondrousProperty: string;
    setWondrousProperty: React.Dispatch<React.SetStateAction<string>>;
    // setWondrousProperty: () => void;
};

export const WondrousContext = createContext<ContextType>({
    wondrousName: "name",
    wondrousLevel: "1+",
    wondrousDescription: "description",
    wondrousPrice: 200,
    wondrousProperty: "property",
    setWondrousName: () => {},
    setWondrousLevel: () => {},
    setWondrousDescription: () => {},
    setWondrousPrice: () => {},
    setWondrousProperty: () => {},    
});