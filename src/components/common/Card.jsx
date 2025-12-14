export default function Card({ children, className = '', hover = true }) {
    return (
        <div
            className={`
        glass rounded-2xl shadow-medium border border-white/30
        ${hover ? 'hover:shadow-strong hover:-translate-y-1 transition-all duration-300' : ''}
        ${className}
      `}
        >
            <div className="p-4 md:p-6">
                {children}
            </div>
        </div>
    );
}
