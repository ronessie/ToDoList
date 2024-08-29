import React, {Dispatch, ReactElement, SetStateAction, useState} from 'react';
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import {Link} from "@nextui-org/link";
import {Card, CardBody} from "@nextui-org/react";
import './App.css';

function SignIn(props: { setVisability: Dispatch<SetStateAction<string>> }) {
    interface SignInFormProps {
        onRegister: (username: string, email: string, password: string) => void;
    }

    interface LogInFormProps {
        onAuth: (email: string, password: string) => void;
    }

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailLog, setEmailLog] = useState('');
    const [passwordLog, setPasswordLog] = useState('');

    function checkLogInInputs() {

    }

    function checkSignInInputs() {

    }

    return (
        <Card className="Auth-card">
            <CardBody>
                <h1 className={"Rainbow-text"}>Registration</h1>
                <div className="Auth-items">
                    <Input
                        value={username}
                        //onChange={setUsername}
                        variant={"underlined"}
                        type="username"
                        label="Username"
                        placeholder="name"
                        className="Auth-input"
                        maxLength={28}
                        title={"Max length 28"}
                    /><br/>
                    <Input
                        variant={"underlined"}
                        type="email"
                        label="Email"
                        placeholder="name@gmail.com"
                        className="Auth-input"
                        maxLength={28}
                        title={"Max length 28"}
                    /><br/>
                    <Input
                        variant={"underlined"}
                        type="password"
                        label="Password"
                        className="Auth-input"
                        maxLength={16}
                        title={"Max length 16"}
                    /><br/>
                </div>
                <Button radius={"sm"} className="Auth-button" variant={"shadow"}>Register</Button><br/>
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
                        variant={"underlined"}
                        type="email"
                        label="Email"
                        placeholder="name@gmail.com"
                        className="Auth-input"
                        maxLength={28}
                        title={"Max length 28"}
                    /><br/>
                    <Input
                        variant={"underlined"}
                        type="password"
                        label="Password"
                        className="Auth-input"
                        maxLength={16}
                        title={"Max length 16"}
                    /><br/>
                </div>
                <Button radius={"sm"} className="Auth-button" variant={"shadow"}>Sign in</Button><br/>
                <div className={"Auth-link"}>Don't have an account yet? <Link
                    onClick={() => props.setVisability('signIn')}>Register now</Link></div>
            </CardBody>
        </Card>
    );
}

function App() {
    const [visability, setVisability] = useState('logIn');
    return (
        <div>
            <head>
                <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no"/>
            </head>
            <div className="App">
                {visability === 'signIn' && <SignIn setVisability={setVisability}/>}
                {visability === 'logIn' && <LogIn setVisability={setVisability}/>}
            </div>
        </div>
    );
}

export default App;