import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
    const [ currentPath, setCurrentPath ] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            // Tell component to re-render itself
            setCurrentPath(window.location.pathname)
        };
        window.addEventListener('popstate', onLocationChange);
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    return currentPath === path ? children : null; 
};

export default Route;
