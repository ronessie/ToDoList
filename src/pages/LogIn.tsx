import {useState} from 'react';
import '../App.css';
import {useNavigate} from "react-router-dom";
import {ROUTER_PATH} from "../shared/constants";
import {initInitData, initPopup, initMiniApp} from '@telegram-apps/sdk';
import {Anchor, Button, Input, Text, TextInput} from "@mantine/core";

function LogIn() {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const toggleOpen = () => setIsOpen(!isOpen);

    const [logInData, setLogInData] = useState({
        email: '',
        password: ''
    });
    const [popoverData, setPopoverData] = useState({
        title: '',
        text: ''
    });
    const validateEmail = (value: any) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    const navigate = useNavigate()
    const initData = initInitData();//initData.user - инфа о пользователе который зашёл
    const [miniApp] = initMiniApp();//тут можно менять фон и цвет шапки
    const popup = initPopup();//попсы тг
    function handleLogInTextareaChange(fieldName: string, value: any) {
        setLogInData(prevData => ({
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

    function validateLogInInputs() {
        if (!logInData.password || !logInData.email) {
            handlePopoverDataChange("title", "Warning!")
            handlePopoverDataChange("text", "All fields are required")
            toggleOpen()
            console.log("All fields are required")
            return
        }
        if (!validateEmail(logInData.email)) {
            handlePopoverDataChange("title", "Warning!")
            handlePopoverDataChange("text", "Email not valid")
            toggleOpen()
            console.log("Email not valid")
            return;
        } else {
            navigate(ROUTER_PATH.MAIN)
        }
    }

    return (
        <div className="App">
            <div className="auth-items">
                <Text className={"auth-text"}>Authorization</Text>
                <TextInput
                    label="Input email:"
                    value={logInData.email}
                    onChange={(e) => handleLogInTextareaChange("email", e.target.value)}
                    type="email"
                    className="auth-inputs"
                    maxLength={28}
                    title={"Max length 28"}
                /><br/>
                <TextInput
                    label="Input password:"
                    value={logInData.password}
                    onChange={(e) => handleLogInTextareaChange("password", e.target.value)}
                    type={isVisible ? "text" : "password"}
                    className="auth-inputs"
                    maxLength={16}
                    title={"Max length 16"}
                /><br/>
                <Button radius={"sm"} className="auth-button"
                        onClick={validateLogInInputs}>Sign
                    in</Button>
                <br/>
                <div className={"auth-link"}>Don't have an account yet? <Anchor
                    onClick={() => navigate(ROUTER_PATH.SIGN_IN)}>Register
                    now</Anchor></div>
            </div>
        </div>
    );
}

export default LogIn;
