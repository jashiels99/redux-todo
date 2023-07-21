import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../redux/todoSlice';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

import Modal from './Modal';
import TodoForm from './Forms/TodoForm';

const EditTodoDialog = ({ todo }) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const handleSubmit = (data) => {
        dispatch(updateTodo(data));
        closeModal();
    };

    return (
        <>
            <div role="button" onClick={openModal}>
                <PencilSquareIcon className="h-5 text-gray-400 hover:text-gray-300" />
            </div>
            <Modal isOpen={isOpen} closeModal={closeModal} size="lg">
                <Modal.Title>Edit Todo</Modal.Title>
                <Modal.Description>
                    Update the details for the task below...
                </Modal.Description>
                <TodoForm
                    onSubmit={handleSubmit}
                    onCancel={closeModal}
                    todo={todo}
                    submitBtnText="Save"
                />
            </Modal>
        </>
    );
};

export default EditTodoDialog;
