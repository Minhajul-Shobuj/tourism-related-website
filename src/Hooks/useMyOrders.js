import { useEffect, useState } from "react";

const useMyOrders = () => {
    const [orders, setOrder] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users').then(res => res.json()).then(data => setOrder(data));
    }, []);
    return [orders, setOrder];
};

export default useMyOrders;