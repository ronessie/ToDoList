import React, {useState} from 'react';
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import {Link} from "@nextui-org/link";
import {Card, CardBody, Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import '../App.css';
import {useNavigate} from "react-router-dom";
import {EyeFilledIcon} from "../images/EyeFilledIcon";
import {EyeSlashFilledIcon} from "../images/EyeSlashFilledIcon";

function LogIn() {
    const [isVisible, setIsVisible] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const toggleOpen = () => setIsOpen(!isOpen);

    const [logInData, setLogInData] = useState({
        email: '',
        password: ''
    });
    const validateEmail = (value: any) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    const navigate = useNavigate()

    function handleLogInTextareaChange(fieldName: string, value: any) {
        setLogInData(prevData => ({
            ...prevData,
            [fieldName]: value,
        }));
    }

    function validateLogInInputs() {
        if (!logInData.password && !logInData.email) {
            toggleOpen()
            console.log("All fields are required")
            return
        }
        if (!validateEmail(logInData.email)) {
            console.log("Email not valid")
            return;
        } else {
            navigate("/Main")
        }
    }

    function InfPopover() {
        return (
            <Popover placement="top" isOpen={isOpen}>
                <PopoverTrigger>
                    <Button radius={"sm"} className="Auth-button"
                            onClick={validateLogInInputs} variant={"shadow"}>Sign
                        in</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="px-1 py-2">
                        <Button onClick={toggleOpen}>Close</Button>
                        <div className="text-small font-bold">Popover Content</div>
                        <div className="text-tiny">This is the popover content</div>
                    </div>
                </PopoverContent>
            </Popover>
        )
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
                            errorMessage="Please enter a valid email"
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
                            endContent={
                                <button className="focus:outline-none" type="button" onClick={toggleVisibility}
                                        aria-label="toggle password visibility">
                                    {isVisible ? (
                                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                                    ) : (
                                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                                    )}
                                </button>
                            }
                            type={isVisible ? "text" : "password"}
                            label="Password"
                            className="Auth-input"
                            maxLength={16}
                            title={"Max length 16"}
                        /><br/>
                    </div>
                    <InfPopover/>
                    <br/>
                    <div className={"Auth-link"}>Don't have an account yet? <Link onClick={() => navigate("/SignIn")}>Register
                        now</Link></div>
                </CardBody>
            </Card>

        </div>
    );
}

export default LogIn;