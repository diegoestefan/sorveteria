import { useContext } from 'react';
import ThemeContext from '../ThemeContext';

const ThemedCard = ({ title, description }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`card ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
        </div>
    );
};

export default ThemedCard;
