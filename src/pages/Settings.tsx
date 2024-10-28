import '../App.css';
import {useNavigate} from "react-router-dom";
import {ROUTER_PATH} from "../shared/constants";
import {useState} from "react";
import {Anchor, Input} from "@mantine/core";


function Settings() {
    const navigate = useNavigate()
    const [isDisabled, setIsDisabled] = useState(true);

    const toggleDisabled = () => setIsDisabled(!isDisabled);
    return (
        <div>
            <h1>hello settings</h1>
            <Anchor onClick={() => navigate(ROUTER_PATH.MAIN)}>back</Anchor>
            <div style={{display: "flex"}}>
                <Input variant={"flat"} placeholder={"Name"} type={"text"}/>
                <img alt={"pencil-image"} onClick={toggleDisabled} className={"pencil-approve-icon"}
                     src={isDisabled ? '/icon-pencil.png' : '/icon-approve.png'}/></div>
            <switch className={"localization"}>

            </switch>
        </div>

    );
}

export default Settings;