import { useEffect } from "react";
import { useState } from "react"

const usePackages = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setService(data));
    }, []);
    return [services, setService];
}

export default usePackages;