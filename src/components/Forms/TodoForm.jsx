import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';

import TextField from '../FormFields/TextField';
import SelectBox from '../FormFields/SelectBox';
import FormGroup from '../FormGroup';
import Label from '../Label';
import Button from '../Button';

const priorityOptions = ['High', 'Medium', 'Low'];

const TodoForm = ({
    onSubmit,
    onCancel,
    todo = {
        id: uuidv4(),
        name: '',
        priority: priorityOptions[0],
        complete: false,
    },
    submitBtnText = 'Add',
}) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: todo,
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
                <Label text="Name" />
                <TextField
                    control={control}
                    name="name"
                    rules={{
                        required: {
                            value: true,
                            message: 'You must enter a task name.',
                        },
                    }}
                    error={errors.name}
                />
            </FormGroup>
            <FormGroup>
                <Label text="Priority" />
                <SelectBox
                    options={priorityOptions}
                    control={control}
                    name="priority"
                    rules={{
                        required: {
                            value: true,
                            message: 'You must choose a priority level.',
                        },
                    }}
                    error={errors.priority}
                />
            </FormGroup>
            <div className="flex justify-end gap-2 mt-6">
                <Button variation="secondary" onClick={onCancel}>
                    Cancel
                </Button>
                <Button type="submit">{submitBtnText}</Button>
            </div>
        </form>
    );
};

export default TodoForm;
