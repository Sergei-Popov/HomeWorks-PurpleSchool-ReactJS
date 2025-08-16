import HeaderText from '../../UI/HeaderText/HeaderText';
import ParagraphMain from '../../UI/ParagraphMain/ParagraphMain';
import Button from '../../UI/Button/Button';
import './Content.css';
import Input from '../../UI/Input/Input';
import CardList from '../../UI/CardList/CardList';

function Content() {

  const data = [
    {
      headerText: 'Поиск',
      paragraphMain: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.',
      buttonText: 'Искать',
    },
  ];

  return (
    <div className="main">
      <div className="search_block">
        <div className="search_block-text">
          <HeaderText headerText={ data[0].headerText }/>
          <ParagraphMain paragraphMain={data[0].paragraphMain}/>
        </div>
        <div className="search">
          <Input/>
          <Button onClick={ () => { console.log('search'); } } buttonText={data[0].buttonText}/>
        </div>
      </div>
      <CardList/>
    </div>
  );
  
}

export default Content;