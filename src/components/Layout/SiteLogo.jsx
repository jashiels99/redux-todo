import { Link } from 'react-router-dom';

const SiteLogo = () => {
    return (
        <Link to="/" className="flex items-center gap-4">
            <img src="/redux.svg" className="w-10 h-10" />
            <h2 className="text-xl">ReduxTodo</h2>
        </Link>
    );
};

export default SiteLogo;
