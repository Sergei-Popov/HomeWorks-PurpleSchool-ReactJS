import './MenuList.css';

function MenuList() {

  const menuData = [ 
    'Поиск фильмов',
    'Мои фильмы',
    'Войти',
  ];

  return (
    <div className="navigation">
      <ul className="navigation__list">
        {menuData.map(( el, index ) => {
          return <li key={index} className="navigation__list-item">
            <a href="#" className="navigation__list-link">
              { el }
            </a>
          </li>;
        })}
      </ul>
    </div>
  );
}

export default MenuList;
