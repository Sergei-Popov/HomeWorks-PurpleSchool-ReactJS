import styles from './HeaderText.module.css';
import cn from 'classnames';

function HeaderText({ headerText }) {

  return (
    <h1 className={cn(styles.header__text)}>{ headerText }</h1>
  );
}

export default HeaderText;