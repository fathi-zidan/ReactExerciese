import React from "react";
import { useContext,useState } from "react";
import Father from './Father'
import { GiftContext } from '../App'

export default function Grandfather(){
    return(
        <div>
            <h1>GrandFather</h1>
            <Father/>

        </div>
    );

}