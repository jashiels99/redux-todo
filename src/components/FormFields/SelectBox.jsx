import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { useController } from 'react-hook-form';
import Error from '../Error';

const SelectBox = ({ control, name, rules, options, error }) => {
    const {
        field: { value, onChange },
    } = useController({ control, name, rules });

    return (
        <>
            <Listbox value={value} onChange={onChange}>
                <div className="relative mt-1.5">
                    <Listbox.Button
                        className={`${
                            error
                                ? 'border-red-500 hover:border-red-500 focus:border-red-500'
                                : 'border-gray-500 hover:border-gray-400 focus-visible:border-purple-500'
                        } relative w-full py-2 pl-3 pr-10 text-sm text-left bg-gray-900 border-2 rounded-lg cursor-default focus:outline-none`}
                    >
                        <span className="block truncate">{value}</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <ChevronUpDownIcon
                                className="w-5 h-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-gray-900 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {options.map((option, key) => (
                                <Listbox.Option
                                    key={key}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active
                                                ? 'bg-purple-100 text-purple-900'
                                                : 'text-white'
                                        }`
                                    }
                                    value={option}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${
                                                    value
                                                        ? 'font-medium'
                                                        : 'font-normal'
                                                }`}
                                            >
                                                {option}
                                            </span>
                                            {selected && (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-purple-600">
                                                    <CheckIcon
                                                        className="w-5 h-5"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            )}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
            {error && <Error>{error.message}</Error>}
        </>
    );
};

export default SelectBox;
