import {useState} from 'react';
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import {Link} from "@nextui-org/link";
import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import '../App.css';
import {useNavigate} from "react-router-dom";
import {EyeFilledIcon} from "../images/EyeFilledIcon";
import {EyeSlashFilledIcon} from "../images/EyeSlashFilledIcon";
import {ROUTER_PATH} from "../shared/constants";

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

    function InfPopover() {
        return (
            <Popover className={"Inf-popover"} placement="top" isOpen={isOpen} backdrop={"opaque"}>
                <PopoverTrigger>
                    <Button radius={"sm"} className="auth-button" onClick={validateSignInInputs}>Register</Button>
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
            <div className="auth-items">
                <h1 className={"auth-text"}>Registration</h1>
                <Input
                    value={signInData.username}
                    onChange={(e) => handleSignInTextareaChange("username", e.target.value)}
                    variant={"underlined"}
                    type="text"
                    label="Username"
                    className="auth-inputs"
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
                    className="auth-inputs"
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
                    className="auth-inputs"
                    maxLength={16}
                    title={"Max length 16"}
                /><br/>
                <InfPopover/><br/>
                <div className={"Auth-link"}>Already have an account? <Link onClick={() => navigate(ROUTER_PATH.ROOT)}>Log
                    in</Link></div>
            </div>
        </div>
    );
}

export default SignIn;
