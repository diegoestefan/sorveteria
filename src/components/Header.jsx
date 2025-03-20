import { useContext } from 'react';
import ThemeContext from '../ThemeContext';

const Header = ({ title }) => {
    const { theme } = useContext(ThemeContext);

    return <h1 className={`header ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{title}</h1>;
};

export default Header;
