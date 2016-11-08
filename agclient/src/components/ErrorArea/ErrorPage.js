import React from 'react';
import { Link } from 'react-router';

class ErrorPage extends React.Component {
    render() {
        return (
            <div className="content-wrapper">
                <h3>404 Page</h3>
                <div>
                    <p>Something went wrong...</p>
                    <p>Go back to the <Link to="/">home page</Link>.</p>
                </div>
            </div>
        );
    }
}

export default ErrorPage;