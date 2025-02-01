import React from 'react';

export interface IInputProps {
    type?: 'text';
    mask?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
    type = 'text',
    mask,
    placeholder = 'Digite o código',
    value,
    onChange,
}: IInputProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = e.target.value;
        if (mask) {
            inputValue = applyMask(inputValue, mask);
        }
        if (onChange) {
            onChange(e);
        }
    };

    const applyMask = (value: string, mask: string) => {
        let maskedValue = value.replace(/\D/g, '');
        let index = 0;
        return mask.replace(/#/g, () => maskedValue[index++] || '');
    };

    return (
        <input
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className="border p-2 w-full"
        />
    );
}
