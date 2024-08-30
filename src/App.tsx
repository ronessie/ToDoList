import React, {Dispatch, SetStateAction, useState} from 'react';
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import {Link} from "@nextui-org/link";
import {Card, CardBody} from "@nextui-org/react";
import './App.css';

function App() {
    const [visability, setVisability] = useState('logIn');
    const [authData, setAuthData] = useState({
        email: '',
        password: ''
    });
    const [registrationData, setRegistrationData] = useState({
        username: '',
        email: '',
        password: ''
    });

    function handleAuthTextareaChange(fieldName: string, value: any) {
        setAuthData(prevData => ({
            ...prevData,
            [fieldName]: value,
        }));
    }

    function handleRegTextareaChange(fieldName: string, value: any) {
        setRegistrationData(prevData => ({
            ...prevData,
            [fieldName]: value,
        }));
    }

    function validateSignInInputs() {
        console.log(authData.password)
    }

    function validateLogInInputs() {
        console.log(authData.password)
    }

    function SignIn(props: { setVisability: Dispatch<SetStateAction<string>> }) {
        return (
            <Card className="Auth-card">
                <CardBody>
                    <h1 className={"Rainbow-text"}>Registration</h1>
                    <div className="Auth-items">
                        <Input
                            value={registrationData.username}
                            onChange={(e) => handleRegTextareaChange("username", e.target.value)}
                            variant={"underlined"}
                            type="username"
                            label="Username"
                            placeholder="name"
                            className="Auth-input"
                            maxLength={28}
                            title={"Max length 28"}
                        /><br/>
                        <Input
                            value={registrationData.email}
                            onChange={(e) => handleRegTextareaChange("email", e.target.value)}
                            variant={"underlined"}
                            type="email"
                            label="Email"
                            placeholder="name@gmail.com"
                            className="Auth-input"
                            maxLength={28}
                            title={"Max length 28"}
                        /><br/>
                        <Input
                            value={registrationData.password}
                            onChange={(e) => handleRegTextareaChange("password", e.target.value)}
                            variant={"underlined"}
                            type="password"
                            label="Password"
                            className="Auth-input"
                            maxLength={16}
                            title={"Max length 16"}
                        /><br/>
                    </div>
                    <Button radius={"sm"} className="Auth-button" onClick={validateSignInInputs} variant={"shadow"}>Register</Button><br/>
                    <div className={"Auth-link"}>Already have an account? <Link
                        onClick={() => props.setVisability('logIn')}>Log in</Link></div>
                </CardBody>
            </Card>
        );
    }

    function LogIn(props: { setVisability: Dispatch<SetStateAction<string>> }) {
        return (
            <Card className="Auth-card">
                <CardBody>
                    <h1 className={"Rainbow-text"}>Authorization</h1>
                    <div className="Auth-items">
                        <Input
                            value={authData.email}
                            onChange={(e) => handleAuthTextareaChange("email", e.target.value)}
                            variant={"underlined"}
                            type="email"
                            label="Email"
                            placeholder="name@gmail.com"
                            className="Auth-input"
                            maxLength={28}
                            title={"Max length 28"}
                        /><br/>
                        <Input
                            value={authData.password}
                            onChange={(e) => handleAuthTextareaChange("password", e.target.value)}
                            variant={"underlined"}
                            type="password"
                            label="Password"
                            className="Auth-input"
                            maxLength={16}
                            title={"Max length 16"}
                        /><br/>
                    </div>
                    <Button radius={"sm"} className="Auth-button" onClick={validateLogInInputs} variant={"shadow"}>Sign
                        in</Button><br/>
                    <div className={"Auth-link"}>Don't have an account yet? <Link
                        onClick={() => props.setVisability('signIn')}>Register now</Link></div>
                </CardBody>
            </Card>
        );
    }

    return (
        <div className="App">
            {visability === 'signIn' && <SignIn setVisability={setVisability}/>}
            {visability === 'logIn' && <LogIn setVisability={setVisability}/>}
        </div>
    );
}

export default App;