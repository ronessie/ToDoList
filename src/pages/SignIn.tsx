import React, {useState} from 'react';
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import {Link} from "@nextui-org/link";
import {Card, CardBody} from "@nextui-org/react";
import '../App.css';
import {useNavigate} from "react-router-dom";

function SignIn() {
    const [signInData, setSignInData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate()

    function handleSignInTextareaChange(fieldName: string, value: any) {
        setSignInData(prevData => ({
            ...prevData,
            [fieldName]: value,
        }));
    }

    function validateSignInInputs() {
        if (!signInData.password && !signInData.email && !signInData.username) {

        } else {
            console.log("All fields are required")
        }
        console.log(signInData.password)
    }

    return (
        <div className="App">
            <Card className="Auth-card">
                <CardBody>
                    <h1 className={"Rainbow-text"}>Registration</h1>
                    <div className="Auth-items">
                        <Input
                            value={signInData.username}
                            onChange={(e) => handleSignInTextareaChange("username", e.target.value)}
                            variant={"underlined"}
                            type="text"
                            label="Username"
                            placeholder="name"
                            className="Auth-input"
                            maxLength={28}
                            title={"Max length 28"}
                        /><br/>
                        <Input
                            value={signInData.email}
                            onChange={(e) => handleSignInTextareaChange("email", e.target.value)}
                            variant={"underlined"}
                            type="email"
                            label="Email"
                            placeholder="name@gmail.com"
                            className="Auth-input"
                            maxLength={28}
                            title={"Max length 28"}
                        /><br/>
                        <Input
                            value={signInData.password}
                            onChange={(e) => handleSignInTextareaChange("password", e.target.value)}
                            variant={"underlined"}
                            type="password"
                            label="Password"
                            className="Auth-input"
                            maxLength={16}
                            title={"Max length 16"}
                        /><br/>
                    </div>
                    <Button radius={"sm"} className="Auth-button" onClick={() => navigate("/Main")}
                            variant={"shadow"}>Register</Button><br/>
                    <div className={"Auth-link"}>Already have an account? <Link onClick={() => navigate("/")}>Log in</Link></div>
                </CardBody>
            </Card>
        </div>
    );
}

export default SignIn;