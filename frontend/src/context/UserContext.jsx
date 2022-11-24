import React from 'react';
//import jwtDecode from 'jwt-decode';
const Context = React.createContext({})

export function SessionContext({children}) {
    
   /* useEffect(()=>{
        if(token !== null && token !== undefined){
            fetch(`http://localhost:8080/api/user${decoded.jti}`, {
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
    
    return <Context.Provider /*value={{user,token, setToken}}*/>
        {children}
    </Context.Provider>
}

export default Context;