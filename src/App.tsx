import React, {Dispatch, SetStateAction, useState} from 'react';
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import {Link} from "@nextui-org/link";
import {Card, CardBody} from "@nextui-org/react";
import './App.css';

function SignIn(props: { setVisability: Dispatch<SetStateAction<string>> }) {
        return (
            <Card className="SignIn-card">
                <CardBody>
                    <h1 className={"Rainbow-text"}>Registration</h1>
                    <div className="SignIn-items">
                        <Input
                            variant={"underlined"}
                            type="username"
                            label="Username"
                            placeholder="name"
                            className="SignIn-input"
                        /><br/>
                        <Input
                            variant={"underlined"}
                            type="email"
                            label="Email"
                            placeholder="name@gmail.com"
                            className="SignIn-input"
                        /><br/>
                        <Input
                            variant={"underlined"}
                            type="password"
                            label="Password"
                            className="SignIn-input"
                        /><br/>
                    </div>
                    <Button radius={"sm"} className="SignIn-button" variant={"shadow"}>Register</Button><br/>
                    <div className={"SignIn-link"}>Already have an account? <Link onClick={() => props.setVisability('logIn')}>Log in</Link></div>
                </CardBody>
            </Card>
        );
}

function LogIn(props: { setVisability: Dispatch<SetStateAction<string>> }) {
    return (
        <Card className="SignIn-card">
            <CardBody>
                <h1 className={"Rainbow-text"}>Authorization</h1>
                <div className="SignIn-items">
                    <Input
                        variant={"underlined"}
                        type="email"
                        label="Email"
                        placeholder="name@gmail.com"
                        className="SignIn-input"
                    /><br/>
                    <Input
                        variant={"underlined"}
                        type="password"
                        label="Password"
                        className="SignIn-input"
                    /><br/>
                </div>
                <Button radius={"sm"} className="SignIn-button" variant={"shadow"}>Sign in</Button><br/>
                <div className={"SignIn-link"}>Don't have an account yet? <Link onClick={() => props.setVisability('signIn')}>Register now</Link></div>
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