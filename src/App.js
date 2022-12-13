// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './Home.js';
import About from './About.js';
import Profile from './Profile.js';
import {RequireToken} from './Auth.js';
// import Contact, {ContactUs} from './Contact';
// import Entry from './Entry';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/loginapp" element={<Home />} />
        <Route path="/loginapp/about" element={<About />} />
        <Route path="/loginapp/profile" element={
          <RequireToken>
            <Profile />
          </RequireToken>
        } />
      </Routes>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <Contact />
//         <ContactUs />
//         <Entry />
//       </header>
//     </div>
//   );
// }

// // https://medium.com/codex/web-development-with-react-for-beginners-bbfbc09063fe

// export default App;