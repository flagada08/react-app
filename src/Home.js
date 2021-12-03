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

					<div className="d-flex justify-content-center">
						{
							fetchToken()
							?(
								<p>You are logged in, {fetchToken()}</p>
							)
							:(
								<form>
									<div style={{marginBottom: 15}}>
									<label>Input Username: </label>
									</div>
									<input type='text'
									onChange={(e) => setUsername(e.target.value)}
									onKeyDown={(e) => e.key === 'Enter' ? login(username) : null} />
									<div>
									<button style={{marginTop: 15}} type='button' onClick={login}>Login</button>
									</div>
								</form>
							)
						}
					</div>
				</div>
			<Footer />
		</>
	)
}