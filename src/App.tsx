export default function App(){
    console.log("App")
    return(
        <div>
            <h1>Hi</h1>
        </div>
    )
}
// import React, {Dispatch, SetStateAction, useState} from 'react';
// import {Button} from "@nextui-org/button";
// import {Input} from "@nextui-org/input";
// import {Link} from "@nextui-org/link";
// import {Card, CardBody} from "@nextui-org/react";
// import './App.css';
//
// function App() {
//     const [visibility, setVisibility] = useState('logIn');
//     const [logInData, setLogInData] = useState({
//         email: '',
//         password: ''
//     });
//     const [signInData, setSignInData] = useState({
//         username: '',
//         email: '',
//         password: ''
//     });
//
//     function handleLogInTextareaChange(fieldName: string, value: any) {
//         setLogInData(prevData => ({
//             ...prevData,
//             [fieldName]: value,
//         }));
//     }
//
//     function handleSignInTextareaChange(fieldName: string, value: any) {
//         setSignInData(prevData => ({
//             ...prevData,
//             [fieldName]: value,
//         }));
//     }
//
//     function validateSignInInputs() {
//         if (!signInData.password && !signInData.email && !signInData.username) {
//
//         } else {
//             console.log("All fields are required")
//         }
//         console.log(logInData.password)
//     }
//
//     function validateLogInInputs() {
//         if (!signInData.password && !signInData.email) {
//
//         } else {
//             console.log("All fields are required")
//         }
//         console.log(signInData.password)
//     }
//
//     function SignIn(props: { setVisability: Dispatch<SetStateAction<string>> }) {
//         return (
//             <Card className="Auth-card">
//                 <CardBody>
//                     <h1 className={"Rainbow-text"}>Registration</h1>
//                     <div className="Auth-items">
//                         <Input
//                             value={signInData.username}
//                             onChange={(e) => handleSignInTextareaChange("username", e.target.value)}
//                             variant={"underlined"}
//                             type="text"
//                             label="Username"
//                             placeholder="name"
//                             className="Auth-input"
//                             maxLength={28}
//                             title={"Max length 28"}
//                         /><br/>
//                         <Input
//                             value={signInData.email}
//                             onChange={(e) => handleSignInTextareaChange("email", e.target.value)}
//                             variant={"underlined"}
//                             type="email"
//                             label="Email"
//                             placeholder="name@gmail.com"
//                             className="Auth-input"
//                             maxLength={28}
//                             title={"Max length 28"}
//                         /><br/>
//                         <Input
//                             value={signInData.password}
//                             onChange={(e) => handleSignInTextareaChange("password", e.target.value)}
//                             variant={"underlined"}
//                             type="password"
//                             label="Password"
//                             className="Auth-input"
//                             maxLength={16}
//                             title={"Max length 16"}
//                         /><br/>
//                     </div>
//                     <Button radius={"sm"} className="Auth-button" onClick={validateSignInInputs}
//                             variant={"shadow"}>Register</Button><br/>
//                     <div className={"Auth-link"}>Already have an account? <Link
//                         onClick={() => props.setVisability('logIn')}>Log in</Link></div>
//                 </CardBody>
//             </Card>
//         );
//     }
//
//     function LogIn(props: { setVisability: Dispatch<SetStateAction<string>> }) {
//         return (
//             <Card className="Auth-card">
//                 <CardBody>
//                     <h1 className={"Rainbow-text"}>Authorization</h1>
//                     <div className="Auth-items">
//                         <Input
//                             value={logInData.email}
//                             onChange={(e) => handleLogInTextareaChange("email", e.target.value)}
//                             variant={"underlined"}
//                             type="email"
//                             label="Email"
//                             placeholder="name@gmail.com"
//                             className="Auth-input"
//                             maxLength={28}
//                             title={"Max length 28"}
//                         /><br/>
//                         <Input
//                             value={logInData.password}
//                             onChange={(e) => handleLogInTextareaChange("password", e.target.value)}
//                             variant={"underlined"}
//                             type="password"
//                             label="Password"
//                             className="Auth-input"
//                             maxLength={16}
//                             title={"Max length 16"}
//                         /><br/>
//                     </div>
//                     <Button radius={"sm"} className="Auth-button" onClick={validateLogInInputs} variant={"shadow"}>Sign
//                         in</Button><br/>
//                     <div className={"Auth-link"}>Don't have an account yet? <Link
//                         onClick={() => props.setVisability('signIn')}>Register now</Link></div>
//                 </CardBody>
//             </Card>
//         );
//     }
//
//     return (
//         <div className="App">
//             {visibility === 'signIn' && <SignIn setVisability={setVisibility}/>}
//             {visibility === 'logIn' && <LogIn setVisability={setVisibility}/>}
//         </div>
//     );
// }
//
// export default App;