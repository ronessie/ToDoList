import '../App.css';
import {useNavigate} from "react-router-dom";
import {Link} from "@nextui-org/react";
import {ROUTER_PATH} from "../shared/constants";


function Settings() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>hello settings</h1>
            <Link onClick={() => navigate(ROUTER_PATH.MAIN)}>back</Link>
        </div>

    );
}

export default Settings;