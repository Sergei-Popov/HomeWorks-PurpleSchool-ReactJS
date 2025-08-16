import './CardItem.css';

function CardItem({ key, imagePath, title, buttonText, likes }) {

  return (
    <div key={ key } className='card'>
      <div className="likes">
        <img src="../../../../public/star.svg" alt="" />
        { likes }
      </div>
      <img className='card__image' src={ imagePath } alt="" />
      <div className="card__text">
        <p className='card__title'>{ title }</p>
        <button className='card_like'>
          <img src="../../../../public/like.svg" alt="" srcset="" />
          <span>{ buttonText }</span>
        </button>
      </div>
    </div>
  );
  
}

export default CardItem;