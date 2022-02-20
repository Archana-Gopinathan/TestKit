import React from 'react';
import { useHistory} from "react-router-dom";


// Browser back History ,Not created other pages ,SO just writing the way that need to implement


function HomePage({ location }) {
    const history = useHistory();
    return (
        <>
            <p>About Page </p>
            <button
                onClick={() => {
                    history.goBack();
                }}
            >
                Go back
            </button>
            <p> You were redirected from {location.state.from}</p>
        </>
    );
}

export default HomePage;