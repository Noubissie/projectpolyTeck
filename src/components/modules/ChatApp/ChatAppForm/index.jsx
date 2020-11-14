import React,{useCallback } from "react"
import io from "socket.io-client"

const ChatAppForm =  ()=>{
    // let socket = useCallback(io,["/"])
    let socket = io.connect("/")
    let a = useCallback(async ()=>{
        let data = await fetch("/",{
            method:"GET",
        })
        socket.emit('chat',{
            message:"this is the message",
            handle:"this is the handler"
        })
        console.log("data::",data.body)
    },[])
    socket.on('chat',(data)=>{
        console.log("message:",data.message,data.handle)
    })
    socket.on('typying',(data)=>{
        console.log("he is typying")
    })
    
    return(
        <div>
            <input />
            <button onClick={a} >click</button>
            <input onChange={
                ()=>{
                    socket.emit('typying',"he is typing")
                }
            } />
        </div>
    )
}
export default React.memo(ChatAppForm)