import NavBar from './NavBar.js';
import Footer from './Footer.js';

export default function About() {

    return (
        <>
            <NavBar />
            <div style={{minHeight: 800, marginTop: 20}}>
                <h1>About Page</h1>
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