// StudentContext.js
import React, { createContext, useState } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    const [selectedModality, setSelectedModality] = useState('TODOS'); // Default to 'TODOS'
    const [inputValue, setInputValue] = useState("")

    return (
        <StudentContext.Provider value={{ selectedModality, setSelectedModality, inputValue, setInputValue }}>
            {children}
        </StudentContext.Provider>
    );
};