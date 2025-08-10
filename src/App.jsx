import HeaderText from './components/HeaderText/HeaderText';
import Button from './components/Button/Button';
import ParagraphMain from './components/ParagraphMain/ParagraphMain';
import './App.css';

function App() {

  const data = [
    {
      headerText: 'Поиск',
      paragraphMain: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.',
      buttonText: 'Искать',
    },
  ];


  return (
    <>
      <HeaderText
        headerText = { data[0].headerText }
      />
      <ParagraphMain
        paragraphMain = { data[0].paragraphMain }
      />
      <Button
        buttonText = { data[0].buttonText }
      />
    </>
  );
}

export default App;
