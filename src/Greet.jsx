import PropTypes from 'prop-types';

function Greet(props) {
    const welcomeMessage = <h2 className="welcome-message">
                           Welcome {props.username}
                           </h2>
                        
    const loginPrompt = <h2 className="login-prompt">
                        Please Login To Process 
                        </h2>

    return(props.isLoggedIn? welcomeMessage : loginPrompt);
}
Greet.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

export default Greet