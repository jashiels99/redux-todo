import { PlusIcon } from '@heroicons/react/24/outline';

const AddButton = ({ className = '', onClick }) => {
    return (
        <button
            className={`p-1.5 bg-purple-600 rounded-full hover:bg-purple-500 ${className}`}
            onClick={onClick}
        >
            <PlusIcon className="w-5 h-5 text-gray-50" />
        </button>
    );
};

export default AddButton;
