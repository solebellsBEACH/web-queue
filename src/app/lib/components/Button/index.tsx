import React from 'react';

export interface IButtonProps {
    onClick?: () => any;
    text: string;
    color?: 'blue' | 'red' | 'green';
    disabled?: boolean;
}

export default function Button({
    onClick,
    text,
    color = 'blue',
    disabled = false,
}: IButtonProps) {
    const getColorClass = () => {
        switch (color) {
            case 'red':
                return 'bg-red-500';
            case 'green':
                return 'bg-green-500';
            default:
                return 'bg-blue-500';
        }
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${getColorClass()} text-white p-2 rounded w-full cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            {text}
        </button>
    );
}
