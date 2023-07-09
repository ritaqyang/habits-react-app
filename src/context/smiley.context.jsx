import { createContext, useState } from "react";


export const SmileyContext = createContext({
    isSmileyOpen: false, 
    setIsSmileyOpen: () => {},
})


export const SmileyProvider = ({children}) => {
    const [isSmileyOpen, setIsSmileyOpen] = useState(false); 

    const value = {
        isSmileyOpen,
        setIsSmileyOpen,
    }; 

    return <SmileyContext.Provider value={value}>{children}</SmileyContext.Provider>;
};

