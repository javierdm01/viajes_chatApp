// SessionContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
    const [sessionData, setSessionData] = useState(() => {
        // Inicializa con un número aleatorio
        const randomSessionId = Math.floor(Math.random() * 1000000);
        return { sessionId: randomSessionId }; // Guarda el ID de sesión aleatorio
    });

    const saveSessionData = (data) => {
        const updatedData = { ...sessionData, ...data };
        setSessionData(updatedData);
        sessionStorage.setItem('sessionData', JSON.stringify(updatedData)); // Guarda en sessionStorage
    };

    const loadSessionData = () => {
        const data = JSON.parse(sessionStorage.getItem('sessionData'));
        if (data) {
            setSessionData(data);
        }
    };

    useEffect(() => {
        loadSessionData(); // Carga datos de sesión al montar el proveedor
    }, []);

    return (
        <SessionContext.Provider value={{ sessionData, saveSessionData }}>
            {children}
        </SessionContext.Provider>
    );
};

export const useSession = () => useContext(SessionContext);
