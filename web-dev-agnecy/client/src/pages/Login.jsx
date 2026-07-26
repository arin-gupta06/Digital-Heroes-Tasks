import { useState } from "react";
import { loginAdmin } from "../services/auth.services";
import {useNavigate} from "react-router-dom"
function Login() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

       try {
         const response = await loginAdmin(credentials);

        console.log(response);
        setCredentials({
            email: "",
            password: "",
        });
        navigate("/admin");
       } catch (error) {
        console.error(error.message);
        alert(error.message);
        
       }



        // TODO: Connect to backend
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

                <h1 className="text-3xl font-bold text-center mb-8">
                    Admin Login
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={credentials.email}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                    >
                        Login
                    </button>

                </form>

            </div>
        </div>
    );
}

export default Login;