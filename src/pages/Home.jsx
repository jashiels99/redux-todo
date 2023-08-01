import { useSelector } from 'react-redux';
import TodoCard from '../components/TodoCard';
import AddTodoDialog from '../components/AddTodoDialog';
import { RectangleStackIcon } from '@heroicons/react/24/outline';
import { useMemo } from 'react';

const Home = () => {
    const todos = useSelector((state) => state.todos);

    const priorityOrder = {
        High: 3,
        Medium: 2,
        Low: 1,
    };

    const sortedTodos = useMemo(
        () =>
            todos.slice().sort((a, b) => {
                if (a.priority === b.priority) return 0;
                if (priorityOrder[a.priority] > priorityOrder[b.priority])
                    return -1;
                return 1;
            }),
        [todos]
    );

    return (
        <>
            <div className="flex items-center justify-between gap-4 mt-6 md:justify-normal">
                <h1 className="text-2xl">Tasks</h1>
                <AddTodoDialog />
            </div>
            {sortedTodos.length > 0 ? (
                <ul
                    className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2"
                    role="list"
                >
                    {sortedTodos.map((todo, index) => (
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
