import { FlagIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/todoSlice';
import EditTodoDialog from './EditTodoDialog';
import { TrashIcon } from '@heroicons/react/24/outline';

const TodoCard = ({ todo }) => {
    const { name, priority, complete } = todo;
    const dispatch = useDispatch();

    const colours = {
        Low: 'text-blue-500',
        Medium: 'text-yellow-500',
        High: 'text-red-500',
    };

    const toggleComplete = () => {
        dispatch(updateTodo({ ...todo, complete: !complete }));
    };

    const removeTodo = () => {
        dispatch(deleteTodo(todo));
    };

    return (
        <div className="flex items-center gap-4 p-4 bg-gray-800 border border-gray-700 rounded-lg">
            <FlagIcon className={`w-5 h-5 ${colours[priority]}`} />
            <p className="grow">{name}</p>
            <div className="flex items-center gap-2">
                <EditTodoDialog todo={todo} />
                <div role="button" onClick={removeTodo}>
                    <TrashIcon className="h-5 text-gray-400 hover:text-gray-300" />
                </div>
                <div role="button" onClick={toggleComplete}>
                    <CheckCircleIcon
                        className={`h-7 ${
                            complete
                                ? 'text-green-500'
                                : 'text-gray-700 hover:text-gray-600'
                        }`}
                    />
                </div>
            </div>
        </div>
    );
};

export default TodoCard;
