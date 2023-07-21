import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

import AddButton from './AddButton';
import Modal from './Modal';
import TodoForm from './Forms/TodoForm';

const AddTodoDialog = () => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const handleSubmit = (data) => {
        dispatch(addTodo(data));
        closeModal();
    };

    return (
        <>
            <AddButton
                className="col-start-12 col-end-13 justify-self-end"
                onClick={openModal}
            />
            <Modal isOpen={isOpen} closeModal={closeModal} size="lg">
                <Modal.Title>Add a Todo</Modal.Title>
                <Modal.Description>
                    Enter the details for the task below...
                </Modal.Description>
                <TodoForm onSubmit={handleSubmit} onCancel={closeModal} />
            </Modal>
        </>
    );
};

export default AddTodoDialog;
