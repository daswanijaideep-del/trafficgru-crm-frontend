import { useState } from "react";

import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { login } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login: loginUser } = useAuth();

    const handleLogin = async () => {
        try {
            const response = await login(username, password);

            loginUser(
                response.data.user,
                response.data.token
            );

            navigate("/dashboard");
        } catch (error) {
            alert(error.response?.data?.message || "Login failed");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">

            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">

                <h1 className="text-3xl font-bold">
                    TrafficGru CRM
                </h1>

                <p className="mt-2 text-gray-500">
                    Administrator Login
                </p>

                <div className="mt-8 space-y-5">

                    <Input
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <Input
                        type="password"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button onClick={handleLogin}>
                        Login
                    </Button>

                </div>

            </div>

        </div>
    );

};

export default Login;