import {useState} from 'react';
import '../App.css';
import {useNavigate} from "react-router-dom";
import {EyeFilledIcon} from "../images/EyeFilledIcon";
import {EyeSlashFilledIcon} from "../images/EyeSlashFilledIcon";
import {ROUTER_PATH} from "../shared/constants";
import {initInitData, initPopup, initMiniApp} from '@telegram-apps/sdk';
import {Button, Input, NavLink, Popover} from "@mantine/core";

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

    function ErrorPopover() {
        return (
            <h1>Hi</h1>
            // <Popover className={"Error-popover"} placement="top" isOpen={isOpen} backdrop={"opaque"}>
            //     <PopoverTrigger>
            //         <Button radius={"sm"} className="auth-button"
            //                 onClick={validateLogInInputs}>Sign
            //             in</Button>
            //     </PopoverTrigger>
            //     <PopoverContent>
            //         <div className="px-1 py-2">
            //             <div onClick={toggleOpen} className="closeModal"></div>
            //             <div>{popoverData.title}</div>
            //             <div>{popoverData.text}</div>
            //         </div>
            //     </PopoverContent>
            // </Popover>
        )
    }

    return (
        <div className="App">
            <div className="auth-items">
                <h1 className={"auth-text"}>Authorization</h1>
                <Input
                    value={logInData.email}
                    onChange={(e) => handleLogInTextareaChange("email", e.target.value)}
                    variant={"underlined"}
                    type="email"
                    className="auth-inputs"
                    maxLength={28}
                    title={"Max length 28"}
                /><br/>
                <Input
                    value={logInData.password}
                    onChange={(e) => handleLogInTextareaChange("password", e.target.value)}
                    variant={"underlined"}
                    type={isVisible ? "text" : "password"}
                    className="auth-inputs"
                    maxLength={16}
                    title={"Max length 16"}
                /><br/>
                <ErrorPopover/>
                <br/>
                <div className={"auth-link"}>Don't have an account yet? <NavLink
                    onClick={() => navigate(ROUTER_PATH.SIGN_IN)}>Register
                    now</NavLink></div>
            </div>
        </div>
    );
}

export default LogIn;
