import React,{useEffect, useState} from 'react'
const Context = React.createContext({})

export function SessionContext({children}) {
    const [token,setToken] = useState(null)
    const [user, setUser] = useState(null)
   /* useEffect(()=>{
        if(token !== null && token !== undefined){
            fetch(`http://localhost:8080/api/v1/user/${decoded.jti}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(res => res.json())
            .then(data => {
                setUser(data)
            })
        }else{
            setUser(null)
        }
    },[token])*/
    
    return <Context.Provider value={{user,token, setToken}}>
        {children}
    </Context.Provider>
}

export default Context;