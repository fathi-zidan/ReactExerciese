import React from "react";
import { useContext, useState } from "react";
import Grandson from './Grandson'
import { GiftContext } from '../App'

export default function Son() {
    return (
        <div>
            <h1>Son</h1>
            <Grandson />
        </div>
    );
}