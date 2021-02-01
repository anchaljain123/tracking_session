import './styles/App.css';
import CustomRoute from "./components/CustomRoute";
import { Switch, Route } from "react-router-dom";

//Pages
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard"
//Hooks
import useLogin from "./hooks/useLogin";
import useSignup from "./hooks/useSignup";

const App = () => {
	const { doLogin } = useLogin();
	const doSignup = useSignup();

	return (
		<div className="App">
			<Switch>
				<Route path="/login">
					<Login onSubmit={doLogin} />
				</Route>
				<Route path="/signup">
					<Signup onSubmit={doSignup} />
				</Route>
				<CustomRoute path="/dashboard" >
					<Dashboard />
				</CustomRoute>
			</Switch>
		</div >
	);
}

export default App;
