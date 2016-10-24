import React from 'react';
import { Link } from 'react-router';

class ErrorPage extends React.Component {
    render() {
        return (
            <div>
                <h3>404 Page</h3>
                <div className="content-wrapper">
                    <p>Something went wrong...</p>
                    <p>Go back to the <Link to="/">home page</Link>.</p>
                </div>
            </div>
        );
    }
}

export default ErrorPage;