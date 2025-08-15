import './Button.css';

function Button({ buttonText, onClick }) {

  return (
    <button onClick={ onClick } className='button'>{ buttonText }</button>
  );
  
}

export default Button;