export default function Button({
    children,
    onClick,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) {
    const baseClasses = 'rounded-lg font-semibold transition-all active:scale-95';

    const variants = {
        primary: 'bg-gradient-to-r from-primary-500 to-emerald-500 text-white hover:from-primary-600 hover:to-emerald-600 shadow-md',
        secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
        outline: 'border-2 border-primary-500 text-primary-600 hover:bg-primary-50'
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg'
    };

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
