import NavBar from './NavBar.js';
import Footer from './Footer.js';
import Logo from './Logo.js';
import {useState} from 'react';
import {setToken, fetchToken} from './Auth.js';
import {useNavigate} from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    
    const login = () => {
        
        setToken(username)
        navigate("/profile");
    }

    return (
        <>
            <NavBar />
            <div style={{minHeight: 800, marginTop: 20}}>
                <h1>Home Page</h1>
                
                <Logo />

                <div style={{marginTop: 50}}>
                    {
                        fetchToken()
                        ?(
                            <p>You are logged in, {fetchToken()}</p>
                        )
                        :(
                            <form>
                                <label style={{marginRight: 10}}>Input Username: </label>
                                <input type='text'
                                onChange={(e) => setUsername(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' ? login(username) : null} />
                                <button type='button' onClick={login}>Login</button>
                            </form>
                        )
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}