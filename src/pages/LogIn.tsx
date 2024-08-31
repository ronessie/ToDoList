import React, {useMemo, useState} from 'react';
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import {Link} from "@nextui-org/link";
import {Card, CardBody} from "@nextui-org/react";
import '../App.css';
import {useNavigate} from "react-router-dom";

function LogIn() {
    const [logInData, setLogInData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate()

    function handleLogInTextareaChange(fieldName: string, value: any) {
        setLogInData(prevData => ({
            ...prevData,
            [fieldName]: value,
        }));
    }

    function validateLogInInputs() {
        if (!logInData.password && !logInData.email) {

        } else {
            console.log("All fields are required")
        }
        console.log(logInData.password)
    }

    return (
        <div className="App">
            <Card className="Auth-card">
                <CardBody>
                    <h1 className={"Rainbow-text"}>Authorization</h1>
                    <div className="Auth-items">
                        <Input
                            value={logInData.email}
                            onChange={(e) => handleLogInTextareaChange("email", e.target.value)}
                            variant={"underlined"}
                            type="email"
                            label="Email"
                            placeholder="name@gmail.com"
                            className="Auth-input"
                            maxLength={28}
                            title={"Max length 28"}
                        /><br/>
                        <Input
                            value={logInData.password}
                            onChange={(e) => handleLogInTextareaChange("password", e.target.value)}
                            variant={"underlined"}
                            type="password"
                            label="Password"
                            className="Auth-input"
                            maxLength={16}
                            title={"Max length 16"}
                        /><br/>
                    </div>
                    <Button radius={"sm"} className="Auth-button" onClick={() => navigate("/Main")} variant={"shadow"}>Sign
                        in</Button><br/>
                    <div className={"Auth-link"}>Don't have an account yet? <Link onClick={() => navigate("/SignIn")}>Register now</Link></div>
                </CardBody>
            </Card>
        </div>
    );
}

export default LogIn;