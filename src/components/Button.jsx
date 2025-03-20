import { useContext } from 'react';
import ThemeContext from '../ThemeContext';

const ThemedButton = ({ children, onClick }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <button
            className={`button ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-yellow-400 text-black'}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default ThemedButton;
