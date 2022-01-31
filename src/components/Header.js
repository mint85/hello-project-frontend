import { Link } from 'react-router-dom';
import '../styles.css';

function Header (props) {
    
    return (
        <nav>
            <Link to="/" style={{textDecoration:"none", color:"black"}}>HOME
            </Link>
            <Link to="/ideas" style={{textDecoration:"none", color:"black"}}>IDEAS
            </Link>
            <Link to="/newform"style={{textDecoration:"none", color:"black"}}>ADD AN IDEA
            </Link>
            </nav>
    );
}
export default Header;