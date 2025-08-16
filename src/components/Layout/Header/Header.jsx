import MenuList from '../../UI/MenuList/MenuList';
import './Header.css';

function Header() {

  return (
    <header className='header'>
      <img src="../../../../public/logo.svg" alt=""/>
      <MenuList/>
    </header>
  );
  
}

export default Header;