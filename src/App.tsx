import React from 'react';
import './App.css';
import { motion } from "framer-motion"

function App() {
  return (
    <div className="App">
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
              type="text"
              id="username"
              required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
              type="email"
              id="email"
              required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
              type="password"
              id="password"
              required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
// import React, {useState} from 'react';
//
//
// interface RegisterFormProps {
//     onRegister: (username: string, email: string, password: string) => void;
// }
//
// function App() {
//     const RegisterForm: React.FC<RegisterFormProps> = ({onRegister}) => {
//         const [username, setUsername] = useState<string>('');
//         const [email, setEmail] = useState<string>('');
//         const [password, setPassword] = useState<string>('');
//
//         const handleSubmit = (event: React.FormEvent) => {
//             event.preventDefault();
//             onRegister(username, email, password);
//         };
//
//         return (
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="username">Username:</label>
//                     <input
//                         type="text"
//                         id="username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Register</button>
//             </form>
//         );
//     };
// }
//
// export default App;