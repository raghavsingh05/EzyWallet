"use client"

export const TextInput = ({
    placeholder,
    onChange,
    label,
    value  // Add the value prop here
}: {
    placeholder: string;
    onChange: (value: string) => void;
    label: string;
    value: string;  // Define the type of the value prop
}) => {
    return (
        <div className="pt-2">
            <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
            <input
                value={value}  // Bind the value prop here
                onChange={(e) => onChange(e.target.value)}  // Pass the input value as a string
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
            />
        </div>
    );
};
