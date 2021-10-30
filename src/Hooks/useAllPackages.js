import { useEffect } from "react";
import { useState } from "react"

const usePackages = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('https://desolate-spire-86561.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setService(data));
    }, []);
    return [services, setService];
}

export default usePackages;