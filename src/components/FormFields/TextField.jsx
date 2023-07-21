import { useController } from 'react-hook-form';
import Error from '../Error';

const TextField = ({ control, name, rules, error }) => {
    const {
        field: { value, onChange },
    } = useController({ control, name, rules });

    return (
        <>
            <input
                type="text"
                className={`${
                    error
                        ? 'border-red-500 hover:border-red-500 focus:border-red-500'
                        : 'border-gray-500 hover:border-gray-400 focus:border-purple-500'
                } w-full mt-1.5 p-2 text-sm px-2.5 bg-gray-900 rounded-md outline-none border-2`}
                value={value}
                onChange={onChange}
                aria-invalid={error ? 'true' : 'false'}
            />
            {error && <Error>{error.message}</Error>}
        </>
    );
};

export default TextField;
