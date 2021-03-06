import NavBar from './NavBar.js';
import Footer from './Footer.js';
import Logo from './Logo.js';

export default function About() {

	return (
		<>
			<NavBar />
				<div style={{height: 800, marginTop: 20}}>
					<h1>About Page</h1>
				<Logo />
					<p className="mx-auto w-75 p-3">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			<Footer />
		</>
	)
}

// import React from "react";

// class About extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             name: "Rasyue",
//             website: "rasyue.com",
//             post:"React for Beginners"
//         }

//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(event) {
//         this.setState({[event.target.name]: event.target.value
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>About Class Component</h1>
//                 <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
//                 <input type="text" name="website" value={this.state.website} onChange={this.handleChange} />
//                 <input type="text" name="post" value={this.state.post} onChange={this.handleChange} />
//                 <p>{this.state.name}</p>
//                 <p>{this.state.website}</p>
//                 <p>{this.state.post}</p>
//             </div>
//         );
//     }
// }

// export default About;