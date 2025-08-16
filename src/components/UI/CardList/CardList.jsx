import CardItem from '../CardItem/CardItem';
import './CardList.css';

function CardList() {

  const initialCard = [
    {
      id: 1,
      imagePath: '../../../../public/Black Widow.png',
      title: 'Black Widow',
      buttonText: 'В избранное',
      likes: 324,
    },
    {
      id: 1,
      imagePath: '../../../../public/Black Widow.png',
      title: 'Black Widow',
      buttonText: 'В избранное',
      likes: 324,
    },
    {
      id: 1,
      imagePath: '../../../../public/Black Widow.png',
      title: 'Black Widow',
      buttonText: 'В избранное',
      likes: 324,
    },
    {
      id: 1,
      imagePath: '../../../../public/Black Widow.png',
      title: 'Black Widow',
      buttonText: 'В избранное',
      likes: 324,
    },
  ];

  return (
    <div className="cards">
      {initialCard.map(el => 
        <CardItem key={el.id} imagePath={el.imagePath} title={el.title} buttonText={el.buttonText} likes={el.likes}/>,
      )}
    </div>
  );
  
}

export default CardList;