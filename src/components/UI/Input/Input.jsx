import styles from './Input.module.css';
import cn from 'classnames';

function Input() {

  return (
    <form className={cn(styles.search_form)}>
      <img src="../../../../public/searchIcon.svg" alt="" />
      <input 
        type="text" 
        name="search" 
        id="inputSearch" 
        className={cn(styles.input)} 
        placeholder='Введите название' 
      />
    </form>
  );
  
}

export default Input;