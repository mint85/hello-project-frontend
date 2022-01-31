import { Link } from 'react-router-dom';
import '../styles.css';

function Header (props) {
    
    return (
        <nav>
            <img src = "https://i.ibb.co/nMZcHHZ/ee48d5829b2040aea1ff9af1e69d703a.png" alt='logo' style={{height:"130px", width: "auto", marginTop:"-43px", marginLeft:"0px"}} className='logo'/>
            <Link to="/" style={{textDecoration:"none", color:"black",}}>HOME
            </Link>
            <Link to="/ideas" style={{textDecoration:"none", color:"black"}}>IDEAS
            </Link>
            <Link to="/newform"style={{textDecoration:"none", color:"black"}}>ADD AN IDEA
            </Link>
            </nav>
    );
}
export default Header;