import {Link} from 'react-router-dom'; 

const Login = () => {
	return (
		<div className="login__">
			<form className="box">
				<h1>Login</h1>
				<input type="text" name="" placeholder="Username" className="login" />
				<input type="password" name="" placeholder="Password" className="password" />
				<a className="btn-log" onClick={login}>Login</a>
			</form>
			
		</div>
	);
}

function login(){
	if (document.querySelector('.login').value === 'throwdownyourfears' && document.querySelector('.password').value === 'ULyu4YLDj6EP4IPTcm5c'){
		alert('zssoib u_4re_4dm1n3');
	}
}

export { Login }