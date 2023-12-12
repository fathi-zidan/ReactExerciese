import { useState, useEffect, useRef } from "react";
import React from 'react'
import axios from 'axios'

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const dataFetch = async () => {
            setLoading(true)
            try {
                const response = await axios.get(url);
                setData(response.data);

            } catch (err) {
                console.log("Error: ", err);
            }
            setLoading(false);
        }
        dataFetch();

    }, [])
    return { data, loading };

}

export default useFetch
