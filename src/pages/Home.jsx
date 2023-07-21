import { useSelector } from 'react-redux';
import TodoCard from '../components/TodoCard';
import AddTodoDialog from '../components/AddTodoDialog';
import { RectangleStackIcon } from '@heroicons/react/24/outline';

const Home = () => {
    const todos = useSelector((state) => state.todos);

    return (
        <>
            <div className="flex items-center justify-between gap-4 mt-6 md:justify-normal">
                <h1 className="text-2xl">Tasks</h1>
                <AddTodoDialog />
            </div>
            {todos.length > 0 ? (
                <ul
                    className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2"
                    role="list"
                >
                    {todos.map((todo, index) => (
                        <TodoCard todo={todo} key={index} />
                    ))}
                </ul>
            ) : (
                <div className="mt-16 text-center">
                    <RectangleStackIcon className="w-12 mx-auto text-gray-500" />
                    <h3 className="mt-2 text-sm font-bold">No tasks</h3>
                    <p className="mt-1 text-sm text-gray-400">
                        Get started by creating a new task.
                    </p>
                </div>
            )}
        </>
    );
};

export default Home;
