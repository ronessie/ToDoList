import React from 'react';
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import {Card, CardBody} from "@nextui-org/react";
import './App.css';

function App() {
    return (
        <div className="App">
            <Card className="App-card">
                <CardBody>
                    <h1 className={"LogIn-text"}>Registration</h1>
                    <div className="LogIn-items">
                        <Input
                            variant={"underlined"}
                            type="username"
                            label="Username"
                            defaultValue="name"
                            className="LogIn-input"
                        /><br/>
                        <Input
                            variant={"underlined"}
                            type="email"
                            label="Email"
                            defaultValue="name@gmail.com"
                            className="LogIn-input"
                        /><br/>
                        <Input
                            variant={"underlined"}
                            type="password"
                            label="Password"
                            className="LogIn-input"
                        /><br/>
                    </div>
                    <Button radius={"sm"} className="LogIn-button" variant={"shadow"}>Register</Button>
                </CardBody>
            </Card>
        </div>
    );
}

export default App;