export default function Card({ children, className = '' }) {
    return (
        <div className={`bg-white rounded-xl shadow-lg p-4 md:p-6 ${className}`}>
            {children}
        </div>
    );
}
