import { useEffect, useState } from "react";
import useAllOrders from "./useAllOrders";
import useAuth from "./useAuth";

const useMyOrders = () => {
    const { user } = useAuth();
    const [orders] = useAllOrders();
    const [myOrders, setmyOrders] = useState([]);
    useEffect(() => {
        const myOrders = orders.filter(order =>
            order.email === user.email);
        setmyOrders(myOrders);
    }, [orders]);
    return [myOrders, setmyOrders];
};

export default useMyOrders;