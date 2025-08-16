import styles from './MenuList.module.css';
import cn from 'classnames';

function MenuList() {

  const menuData = [ 
    'Поиск фильмов',
    'Мои фильмы',
    'Войти',
  ];

  return (
    <div className={cn(styles.navigation)}>
      <ul className={cn(styles.navigation__list)}>
        {menuData.map(( el, index ) => {
          return <li key={index} className={cn(styles.navigation__list_item)}>
            <a href="#" className={cn(styles.navigation__list_link)}>
              { el }
            </a>
          </li>;
        })}
      </ul>
    </div>
  );
}

export default MenuList;
