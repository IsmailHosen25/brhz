import React, {useState,createContext} from 'react'
export const LoginPageVisible=createContext({})

const LoginPageVisibleProvider=({children})=>{
    const [visible,setvisible]=useState(false)
   return <LoginPageVisible.Provider value={{visible,setvisible}}>
        {children}
   </LoginPageVisible.Provider>
}
export default LoginPageVisibleProvider
