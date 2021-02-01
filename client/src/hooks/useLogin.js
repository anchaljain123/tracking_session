import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import { asyncLoginUser } from '../redux/actions/user.asyncaction';
import { logoutUser } from '../redux/actions/user.action';

import useSessionStorage from './useSessionStorage';

const useLogin = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { setObjectItem, removeItem } = useSessionStorage();

    const doLogin = payload => {
        dispatch(asyncLoginUser(payload))
            .then((data) => {
                if (data?._id) {
                    // this.setState({
                    //     err: false,
                    // });
                    setObjectItem("user-session", data);
                    history.push('/dashboard');
                }
            })
            .catch((err) => {
                // this.setState({
                //     err: true,
                // })
            });
    };

    const signout = () => {
        removeItem("user-session");
        dispatch(logoutUser());
    }

    return { doLogin, signout };
}

export default useLogin;