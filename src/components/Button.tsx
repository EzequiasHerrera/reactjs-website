import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    icon?: React.ReactNode; // Optional icon to display on the left
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    href,
    onClick,
    className = '',
    variant = 'primary',
    icon,
    fullWidth = false
}) => {

    // Base classes applied to all buttons
    const baseClasses = `
    inline-flex items-center justify-center gap-3 
    px-8 py-4 
    font-bold rounded-lg uppercase tracking-widest 
    transition-all duration-300 transform 
    group cursor-pointer
    ${fullWidth ? 'w-full' : ''}
  `;

    // Variant specific classes
    const variantClasses = {
        primary: 'bg-accent-600 text-white hover:bg-accent-700 hover:-translate-y-1 shadow-lg hover:shadow-accent-500/30',
        secondary: 'bg-brand-900 text-white hover:bg-brand-800 hover:-translate-y-1 shadow-lg',
        outline: 'bg-transparent border-2 border-accent-600 text-accent-600 hover:bg-accent-600 hover:text-white',
        ghost: 'bg-transparent text-accent-600 hover:text-accent-700 hover:bg-accent-50',
    };

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

    // If href is provided, render as a link
    if (href) {
        // If it's an anchor link (starts with #) use standard a tag for smooth scrolling behavior usually handled by scripts or css
        if (href.startsWith('#')) {
            return (
                <a href={href} className={combinedClasses} onClick={onClick}>
                    {icon && <span className="group-hover:scale-110 transition-transform duration-300">{icon}</span>}
                    <span>{children}</span>
                </a>
            );
        }
        // External link
        if (href.startsWith('http')) {
            return (
                <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses} onClick={onClick}>
                    {icon && <span className="group-hover:scale-110 transition-transform duration-300">{icon}</span>}
                    <span>{children}</span>
                </a>
            );
        }
        // Internal router link
        return (
            <Link to={href} className={combinedClasses} onClick={onClick}>
                {icon && <span className="group-hover:scale-110 transition-transform duration-300">{icon}</span>}
                <span>{children}</span>
            </Link>
        );
    }

    // Otherwise render as a button
    return (
        <button onClick={onClick} className={combinedClasses}>
            {icon && <span className="group-hover:scale-110 transition-transform duration-300">{icon}</span>}
            <span>{children}</span>
        </button>
    );
};

export default Button;
