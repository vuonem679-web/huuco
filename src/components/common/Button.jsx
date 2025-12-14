export default function Button({
    children,
    onClick,
    variant = 'primary',
    size = 'md',
    className = '',
    icon: Icon,
    ...props
}) {
    const baseClasses = 'rounded-2xl font-semibold transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 backdrop-blur-md';

    const variants = {
        primary: 'glass bg-gradient-to-r from-primary-400/80 to-primary-500/80 text-white hover:from-primary-500/90 hover:to-primary-600/90 shadow-soft hover:shadow-glow border border-white/20',
        secondary: 'glass bg-white/40 text-gray-700 border border-white/30 hover:bg-white/60 shadow-soft hover:shadow-medium',
        outline: 'glass border-2 border-primary-400/50 bg-white/20 text-primary-700 hover:bg-primary-400/30 hover:border-primary-500/70 shadow-soft',
        ghost: 'glass-dark text-gray-100 hover:bg-white/10 border border-white/10',
        accent: 'glass bg-gradient-to-r from-accent-300/80 to-accent-400/80 text-white hover:from-accent-400/90 hover:to-accent-500/90 shadow-soft hover:shadow-medium border border-white/20'
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2.5 text-base',
        lg: 'px-7 py-3.5 text-lg'
    };

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {Icon && <Icon className={`${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} transition-transform duration-300 group-hover:scale-110`} />}
            {children}
        </button>
    );
}
