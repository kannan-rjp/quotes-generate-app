import {useState} from 'react'

export const useLocalStorage = (keyName,defaultValue)=> {
    const [storedValue, setstoredValue] = useState(()=> {
        try {
            const value = localStorage.getItem(keyName);
            if(value){
                return value;
            }
            else{
                return defaultValue
            }
        }
        catch(e) {
            return defaultValue;
        }
    })
    const setValue = (newValue) => {
        try {
          window.localStorage.setItem(keyName, newValue);
        } catch (err) {}
        setstoredValue(newValue);
      };
    return [storedValue, setValue]
}