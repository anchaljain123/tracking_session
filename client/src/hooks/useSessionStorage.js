const useSessionStorage = () => {
    const setItem = (key, value) => {
        window.sessionStorage.setItem(key, value);
    }

    const getItem = (key) => {
        return window.sessionStorage.getItem(key);
    }

    const setObjectItem = (key, value) => {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    }

    const getObjectItem = (key) => {
        return JSON.parse(window.sessionStorage.getItem(key));
    }

    const removeItem = key => {
        window.sessionStorage.removeItem(key)
    }

    return { setItem, getItem, setObjectItem, getObjectItem, removeItem }
};

export default useSessionStorage;