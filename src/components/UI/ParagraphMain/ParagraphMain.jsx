import styles from './ParagraphMain.module.css';
import cn from 'classnames';

function ParagraphMain({ paragraphMain }) {

  return (
    <p className={cn(styles['main__paragraph'])}>{ paragraphMain }</p>
  );
}

export default ParagraphMain;