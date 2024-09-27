import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
    userName : '',
    email : '',
    password : ''
}

function AuthRegister() {

    const [formData,setFormData] = useState(initialState)

    function onSubmit(event){
        event.preventDefault()
    }

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
                setformData={setFormData}
                onSubmit={onSubmit}
            />
        </div>
     );
}

export default AuthRegister;