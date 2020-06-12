import useLocalStorage from './useLocalStorage'
import { useEffect } from 'react';


 const useDark = key => {
    
    const [value, setValue] = useLocalStorage(key)

    const toggleMode = event => {
        event.preventDefault()
        setValue(!value)
    }

    useEffect(() => {
        if (value) {
            document.body.classList.add("dark-mode")
        }
        else {
            document.body.classList.remove("dark-mode")
        }
    },[value])


    return [value, toggleMode];

};

export default useDark;
