// import React from "react";
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import {useNavigate} from "react-router-dom";
import {fetchToken} from './Auth.js';

/**
  Comparison Between Functional and Class Component

  Functional Component

      1 There is no render() method in functional therefore you don’t always have to return HTML.
      2 For when you want to quickly build a simple component without having to deal with complex logic or states.
      3 Often used as a component whereby props got passed to it and used to render a part of UI.
      4 Have access to hooks.

  Class Component

      1 Always need a render() method to return HTML if you want to return a HTML.
      2 For when you need to create complex component dealing with states and logic.
      3 Often used to fetch data and manipulate it before passing it down as props to child component.
      4 Have access to lifecycle methods.
*/

// class Profile extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>My Profile Class Component</h1>
//       </div>
//     );
//   }
// }

/**
  function Profile() {
      return (
        <div>
          <h1>My Profile</h1>
        </div>
      );
  }
*/

/**
  // you can also define a function like this using the arrow function
  const Profile = () => {
      return (
        <div >
          <h1>My Profile Arrow</h1>
        </div>
      );
  }
*/

// export default Profile;

export default function Profile() {
  const navigate = useNavigate();
  const signOut = () => {

    localStorage.removeItem('rasyueToken')
    navigate("/");
  }

  return(
    <>
      <NavBar />
        <div style={{minHeight: 800, marginTop: 20}}>
          <h1>Profile Page</h1>

          <p>Hi, {fetchToken()}. This is your profile</p>

          <div>
            <button type='button' onClick={signOut}>Sign Out</button>
          </div>
        </div>
      <Footer />
    </>
  )
}