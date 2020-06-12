import useLocalStorage from './useLocalStorage'


 const useDark = key => {
    
    const [value, setValue] = useLocalStorage(key)

    const toggleMode = event => {
        event.preventDefault()
        setValue(!value)
    }

    var body = document.getElementsByTagName("BODY")[0]; 
    body.classList.toggle('dark-mode')

    return [value, toggleMode];
};

export default useDark;
