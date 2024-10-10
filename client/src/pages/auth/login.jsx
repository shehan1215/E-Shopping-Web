import CommonForm from "@/components/common/form";
import { LoginFormControls} from "@/config";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const initialState = {
    email : '',
    password : ''
}

function AuthLogin() {

    const [formData,setFormData] = useState(initialState);
    const dispatch = useDispatch();

    function onSubmit(event){
        event.preventDefault();
        dispatch(loginUser(formData)).then((data)=>{
            console.log(data);
            
        })
    }

    return ( 
        <div className="w-full max-w-md mx-auto space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tighter text-foreground">Sign In</h1>
                <p className="mt-2">Don't have an Account
                    <Link className="ml-2 font-medium text-primary hover:underline" to="/auth/register">
                    Register</Link>
                </p>
            </div>
            <CommonForm
                formControls={LoginFormControls}
                buttonText={"Sign In"}
                formData={formData}
                setFormData={setFormData}
                onSubmit={onSubmit}
            />
        </div>
     );
}

export default AuthLogin;