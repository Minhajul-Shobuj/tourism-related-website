import { useEffect, useState } from "react";

const useAllOrders = () => {
    const [orders, setOrder] = useState([]);
    useEffect(() => {
        fetch('https://desolate-spire-86561.herokuapp.com/users').then(res => res.json()).then(data => setOrder(data));
    }, []);
    return [orders, setOrder];
};

export default useAllOrders;