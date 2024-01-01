import { useContext } from "react";
import { LoginPageVisible } from "../Context/LoginPageVisible";

const useLoginPageVisible=()=>{
    return useContext(LoginPageVisible)
}
export default useLoginPageVisible