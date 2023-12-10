import React,{useState,useContext,createContext,useEffect,useRef} from "react";
import axios from 'axios';

export const AvatarContext = createContext();

export const AvatarProvider = ({children})=>{
    const [avatars,setAvatars] = useState([]);
    useEffect(()=>{
        const fetchAvatars = async()=>{
            try {
                const response = await axios.get('https://6559b7d66981238d054ccc29.mockapi.io/Myusers');
                // console.log(response);
                setAvatars(response.data)
                // console.log(avatars);

            }catch(err){
                console.log("Error:", err)
            }
        }
        fetchAvatars();

    },[])

    return(
        <AvatarContext.Provider value={{avatars,setAvatars}}>
            {children}
        </AvatarContext.Provider>
    );

}
export const useAvatar = ()=>{
    return useContext(AvatarContext)
}