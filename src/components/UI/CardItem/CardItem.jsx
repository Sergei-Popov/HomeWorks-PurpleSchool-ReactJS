import styles from './CardItem.module.css';
import cn from 'classnames';

function CardItem({ key, imagePath, title, buttonText, likes }) {

  return (
    <div key={key} className={cn(styles.card)}>
      <div className={cn(styles.likes)}>
        <img src="../../../../public/star.svg" alt="" />
        {likes}
      </div>
      <img className={cn(styles.card__image)} src={imagePath} alt="" />
      <div className={cn(styles.card__text)}>
        <p className={cn(styles.card__title)}>{title}</p>
        <button className={cn(styles.card__like)}>
          <img src="../../../../public/like.svg" alt="" />
          <span>{buttonText}</span>
        </button>
      </div>
    </div>
  );
  
}

export default CardItem;