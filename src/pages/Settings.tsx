import '../App.css';
import {useNavigate} from "react-router-dom";
import {Link} from "@nextui-org/react";


function Settings() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>hello settings</h1>
            <Link onClick={() => navigate("/Main")}>back</Link>
        </div>

    );
}

export default Settings;