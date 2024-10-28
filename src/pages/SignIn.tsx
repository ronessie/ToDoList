import {useState} from 'react';
import '../App.css';
import {useNavigate} from "react-router-dom";
import {ROUTER_PATH} from "../shared/constants";
import {Anchor, Button, Input, Text} from "@mantine/core";

function SignIn() {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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
            handlePopoverDataChange("title", "Warning!")
            handlePopoverDataChange("text", "All fields are required")
            toggleOpen()
            console.log("All fields are required")
            return
        }
        if (!validateEmail(signInData.email)) {
            handlePopoverDataChange("title", "Warning!")
            handlePopoverDataChange("text", "Email not valid")
            toggleOpen()
            console.log("Email not valid")
            return;
        }
        if (signInData.password.length < 6) {
            handlePopoverDataChange("title", "Warning!")
            handlePopoverDataChange("text", "Password must be at least 6 characters long")
            toggleOpen()
            console.log("Short password")
            return;
        } else {
            navigate(ROUTER_PATH.MAIN)
        }
    }

    return (
        <div className="App">
            <div className="auth-items">
                <Text className={"auth-text"}>Registration</Text>
                <Text>Input username:</Text>
                <Input
                    value={signInData.username}
                    onChange={(e) => handleSignInTextareaChange("username", e.target.value)}
                    type="text"
                    className="auth-inputs"
                    maxLength={28}
                    title={"Max length 28"}
                /><br/>
                <Text>Input email:</Text>
                <Input
                    value={signInData.email}
                    onChange={(e) => handleSignInTextareaChange("email", e.target.value)}
                    type="email"
                    className="auth-inputs"
                    maxLength={28}
                    title={"Max length 28"}
                /><br/>
                <Text>Input password:</Text>
                <Input
                    value={signInData.password}
                    onChange={(e) => handleSignInTextareaChange("password", e.target.value)}
                    type={isVisible ? "text" : "password"}
                    className="auth-inputs"
                    maxLength={16}
                    title={"Max length 16"}
                /><br/>
                <Button radius={"sm"} className="auth-button" onClick={validateSignInInputs}>Register</Button>
                <br/>
                <div className={"auth-link"}>Already have an account? <Anchor onClick={() => navigate(ROUTER_PATH.ROOT)}>Log
                    in</Anchor></div>
            </div>
        </div>
    );
}

export default SignIn;
