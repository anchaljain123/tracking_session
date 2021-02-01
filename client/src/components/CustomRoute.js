import { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import useSessionStorage from '../hooks/useSessionStorage';
import useLogin from '../hooks/useLogin';

const CustomRoute = ({ children, ...rest }) => {
    const { getObjectItem } = useSessionStorage();
    const { doLogin } = useLogin();

    const user = useSelector(state => state.userReducers.user);

    useEffect(() => {
        const userDataFromSession = getObjectItem("user-session");
        if (!user?._id && userDataFromSession?._id) {
            doLogin(userDataFromSession);
        }
    }, [user]);

    return (
        <Route
            {...rest}
            render={({ location }) => (user?._id)
                ? children
                : (<Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                />)
            }
        />
    );
}

export default CustomRoute;
