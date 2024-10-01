
import CommonForm from "@/components/common/form.jsx";
import { registerFormControls } from "@/config";
import { registerUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
    userName: "",
    email: "",
    password: "",
  };

function AuthRegister() {
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function onSubmit(event){
        event.preventDefault();
        dispatch(registerUser(formData)).then((data)=>{
            console.log(data);   
        });
    }
    console.log(formData);
    
    return ( 
        <div className="w-full max-w-md mx-auto space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tighter text-foreground">Create New Account</h1>
                <p className="mt-2">Already Have an Account
                    <Link className="ml-2 font-medium text-primary hover:underline" to="/auth/login">
                    Login</Link>
                </p>
            </div>
            <CommonForm
                formControls={registerFormControls}
                buttonText={"Sign Up"}
                formData={formData}
                setFormData={setFormData}
                onSubmit={onSubmit}
            />
        </div>
     );
}

export default AuthRegister;