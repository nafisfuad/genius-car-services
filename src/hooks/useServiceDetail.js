import { useState } from "react";
import { useEffect } from "react";

const useServiceDetail = serviceId => {
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `https://pure-sierra-28164.herokuapp.com/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [serviceId]);

    return [service];
}

export default useServiceDetail;