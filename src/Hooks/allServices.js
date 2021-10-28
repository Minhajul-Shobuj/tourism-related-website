import { useEffect } from "react";
import { useState } from "react"

const useProducts = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('./fakeDb.json')
            .then(res => res.json())
            .then(data => setService(data));
    }, []);
    return [services, setService];
}

export default useProducts;