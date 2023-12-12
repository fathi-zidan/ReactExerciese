import { useEffect, useState } from "react";
import React from 'react'

function useCounter(num) {
    const [count, setCount] = useState(num);
    function Increase() {
        setCount(pre => pre + 1)
    }
    function Decrease() {
        setCount(pre => pre - 1)
    }
    function Double() {
        setCount(pre => 2 * pre)
    }
    function Divide() {
        setCount(pre => pre / 2)
    }
    return {count,Increase,Decrease,Double,Divide}

}

export default useCounter
