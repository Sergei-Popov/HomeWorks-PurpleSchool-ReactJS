import './Input.css';

function Input() {

  return (
    <form className='search_form'>
      <img src="../../../../public/searchIcon.svg" alt="" />
      <input type="text" name="search" id="inputSearch" className='input' placeholder='Введите название' />
    </form>
  );
  
}

export default Input;