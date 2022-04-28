import react from 'react';

function debounce (cb:Function, delay = 1000) {
    let timeout:any;
    return (...args:any) => {
        clearTimeout(timeout)
        setTimeout(() => {
            cb(...args)
        }, delay)
    }
}

export default debounce;