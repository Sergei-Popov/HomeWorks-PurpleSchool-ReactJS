import MenuList from '../../UI/MenuList/MenuList';
import styles from './Header.module.css';
import cn from 'classnames';

function Header() {

  return (
    <header className={cn(styles.header)}>
      <img src="../../../../public/logo.svg" alt=""/>
      <MenuList/>
    </header>
  );
  
}

export default Header;