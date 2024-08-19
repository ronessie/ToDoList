import React from 'react';
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";

function App() {
  return (
    <div className="App">
      <form>
        <Input
            variant={"underlined"}
            type="username"
            label="Username"
            defaultValue="name"
            className="max-w-xs"
        /><br/>
        <Input
            variant={"underlined"}
            type="email"
            label="Email"
            defaultValue="name@gmail.com"
            className="max-w-xs"
        /><br/>
        <Input
            variant={"underlined"}
            type="password"
            label="Password"
            className="max-w-xs"
        /><br/>
        <Button color={"primary"} radius={"sm"} style={{width: 320}} type="submit">Register</Button>
      </form>
    </div>
  );
}

export default App;