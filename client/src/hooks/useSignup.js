import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import { asyncSaveUser } from '../redux/actions/user.asyncaction';


const useSignup = () => {
    const dispatch = useDispatch();
    let history = useHistory();

    const doSignup = payload => {

        dispatch(asyncSaveUser(payload))
            .then(() => {
                // this.setState({
                //     err: false,
                // });
                history.push('/dashboard');
            }).catch((err) => {
                // this.setState({
                //     err: true,
                // });
            });
    };

    return doSignup;
}

export default useSignup;
