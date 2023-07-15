import { useContext } from 'react';
import { SmileyContext } from '../../context/smiley.context';
import {ReactComponent as SmileIcon} from '../../img//1432299223.svg';
import './smiley-face-icon.styles.scss'; 
const SmileyIcon = () => {
  const { isSmileyOpen, setIsSmileyOpen } = useContext(SmileyContext);

  const toggleIsSmileyOpen = () => setIsSmileyOpen(!isSmileyOpen);

  return (
    <div className='smiley-icon-container' >
      <SmileIcon className='smiley-icon' />
    </div>
  );
};

export default SmileyIcon;