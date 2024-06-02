// StudentContext.js
import React, { createContext, useState } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    const [selectedModality, setSelectedModality] = useState('TODOS'); // Default to 'TODOS'

    return (
        <StudentContext.Provider value={{ selectedModality, setSelectedModality }}>
            {children}
        </StudentContext.Provider>
    );
};