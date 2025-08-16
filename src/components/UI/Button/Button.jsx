import styles from './Button.module.css';
import cn from 'classnames';

function Button({ buttonText, onClick }) {

  return (
    <button onClick={onClick} className={cn(styles.button)}>
      {buttonText}
    </button>
  );
  
}

export default Button;