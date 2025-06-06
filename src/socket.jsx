import io from "socket.io-client";
import { createContext,useContext, useMemo } from "react";
import { server } from "./constants/config";

const SocketContext = createContext();

const getSocket=()=>useContext(SocketContext)

const SocketProvider=({children})=>{
    const socket=useMemo(()=>io(server,{transports: ['websocket', 'polling'],withCredentials:true}),[]);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

export {SocketProvider,getSocket};