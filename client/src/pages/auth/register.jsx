import { Link } from "react-router-dom";

function AuthRegister() {
    return ( 
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tighter text-foreground">Create New Account</h1>
                <p className="mt-2">Already Have an Account
                    <Link className="font-medium ml-2 text-primary hover:underline">
                    Login</Link>
                </p>
            </div>
        </div>
     );
}

export default AuthRegister;