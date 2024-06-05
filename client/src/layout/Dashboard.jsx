import { useDispatch } from 'react-redux';
import { jwtDecode } from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";

import { fetchMatches } from '../store/matches/matches-actions';
import MatchesList from '../store/matches/components/MatchesList';

const Dashboard = () => {

    const dispatch = useDispatch();

    // Check for token
    if (localStorage.jwtToken) {
        //  Set auth token auth
        setAuthToken(localStorage.jwtToken);
        // Decode token get user info
        const decoded = jwtDecode(localStorage.jwtToken);
        // Set user and Authenticate
        // store.dispatch(setCurrentUser(decoded));
    
        // check for expire token
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
        // store.dispatch(logoutUser());
        window.location.href = "/";
        }else{
            dispatch(fetchMatches());
        }
    }else{
        window.location.href = "/";
    }
    return(
        <div className="dashboard-box">
            <h1>Zakłady piłkarskie</h1>
            <MatchesList />
        </div>

    )
}

export default Dashboard;