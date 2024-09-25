import '../App.css';
import {useNavigate} from "react-router-dom";
import {Link} from "@nextui-org/react";
import {ROUTER_PATH} from "../shared/constants";
import {Input} from "@nextui-org/input";
import {useState} from "react";


function Settings() {
    const navigate = useNavigate()
    const [isDisabled, setIsDisabled] = useState(true);

    const toggleDisabled = () => setIsDisabled(!isDisabled);
    return (
        <div>
            <h1>hello settings</h1>
            <Link onClick={() => navigate(ROUTER_PATH.MAIN)}>back</Link>
            <div style={{display: "flex"}}>
                <Input isDisabled={isDisabled} variant={"flat"} placeholder={"Name"} label={"Username"} type={"text"}
                       labelPlacement={"outside-left"}/>
                <img alt={"pencil-image"} onClick={toggleDisabled} className={"pencil-approve-icon"}
                     src={isDisabled ? '/icon-pencil.png' : '/icon-approve.png'}/></div>
            <switch className={"localization"}>

            </switch>
        </div>

    );
}

export default Settings;