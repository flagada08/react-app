import React, {/*useState*/} from "react";
const axios = require('axios');

class Entry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            count: 0
        }
    }

    getData = () => {
        axios.get('https://api.publicapis.org/entries')
        .then((response) => {
            console.log(response.data.entries)
            this.setState({
                count: response.data.count,
                data: response.data.entries
            })
        })
        .catch((error) => {
            // handle error
            console.log(error);
        })
    }

    render() {

        return (
            <div>
                <h1>Hello Entry</h1>
                <button onClick={this.getData}>Get Entry Data</button>
                <p>Entry Count: {this.state.count}</p>

                {
                    this.state.data.length > 0
                    ?(
                        <>
                        <div>
                            {this.state.data.map((data, index) => <p key={index}>{data.Description}</p>)}
                        </div>
                        </>
                    )
                    :(
                        <>
                        <p>No Data</p>
                        </>
                    )
                }
            </div>
        )
    }
}

// function Entry() {

//     const [data, setData] = useState([])

//     const getData = () => {
//         axios.get('https://api.publicapis.org/entries')
//         .then((response) => {
//             console.log(response.data.entries)           
//             setData(response.data.entries)
//         })
//         .catch((error) => {
            
//             console.log(error);
//         })    
//     }
    
//     return (
//         <div>
//             <h1>Hello Entry Functional</h1>
//             <button onClick={getData}>Get Entry Data</button>
//             <p>Entry Count: {data.length}</p>
//                 {
//                     data.map((item, index) => <p key={index}>{item.Description}</p>)
//                 }
//         </div>
//     )
// }

export default Entry;