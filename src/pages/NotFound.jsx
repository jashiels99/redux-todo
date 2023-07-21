import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="w-full mx-auto text-center md:w-2/3">
            <h1 className="mt-20 font-bold text-9xl">404</h1>
            <h2 className="mt-5 text-3xl text-gray-300">Page Not Found</h2>
            <p className="mt-3 text-gray-200">
                The page you are looking for might have been removed, had its
                name changed or is temporarily unavailble.
            </p>
            <Link to="/" role="button" className="mt-6 btn primary">
                Back Home
            </Link>
        </div>
    );
};

export default NotFound;
