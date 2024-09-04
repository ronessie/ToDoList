import React, {useState} from 'react';
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import {Link} from "@nextui-org/link";
import {Card, CardBody, Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import '../App.css';
import {useNavigate} from "react-router-dom";
import {EyeFilledIcon} from "../images/EyeFilledIcon";
import {EyeSlashFilledIcon} from "../images/EyeSlashFilledIcon";

function SignIn() {
    const [isVisible, setIsVisible] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);
    const toggleOpen = () => setIsOpen(!isOpen);
    const [signInData, setSignInData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [popoverData, setPopoverData] = useState({
        title: '',
        text: ''
    });

    const validateEmail = (value: any) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    const navigate = useNavigate()

    function handleSignInTextareaChange(fieldName: string, value: any) {
        setSignInData(prevData => ({
            ...prevData,
            [fieldName]: value,
        }));
    }
    function handlePopoverDataChange(fieldName: string, value: any) {
        setPopoverData(prevData => ({
            ...prevData,
            [fieldName]: value,
        }));
    }

    function validateSignInInputs() {
        if (!signInData.password || !signInData.email || !signInData.username) {
            handlePopoverDataChange("title","Warning!")
            handlePopoverDataChange("text","All fields are required")
            toggleOpen()
            console.log("All fields are required")
            return
        }
        if (!validateEmail(signInData.email)) {
            handlePopoverDataChange("title","Warning!")
            handlePopoverDataChange("text","Email not valid")
            toggleOpen()
            console.log("Email not valid")
            return;
        } else {
            navigate("/Main")
        }
    }

    function InfPopover() {
        return (
            <Popover className={"Inf-popover"} placement="top" isOpen={isOpen} backdrop={"opaque"}>
                <PopoverTrigger>
                    <Button radius={"sm"} className="Auth-button" onClick={validateSignInInputs}
                            variant={"shadow"}>Register</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="px-1 py-2">
                        <div onClick={toggleOpen} className="closeModal"></div>
                        <div>{popoverData.title}</div>
                        <div>{popoverData.text}</div>
                    </div>
                </PopoverContent>
            </Popover>
        )
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
                            errorMessage="Please enter a valid email"
                            placeholder="name@gmail.com"
                            className="Auth-input"
                            maxLength={28}
                            title={"Max length 28"}
                        /><br/>
                        <Input
                            value={signInData.password}
                            onChange={(e) => handleSignInTextareaChange("password", e.target.value)}
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
                    <InfPopover/><br/>
                    <div className={"Auth-link"}>Already have an account? <Link onClick={() => navigate("/")}>Log
                        in</Link></div>
                </CardBody>
            </Card>
        </div>
    );
}

export default SignIn;
