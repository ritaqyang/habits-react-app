import { useContext } from 'react';
import { SmileyContext } from '../../context/smiley.context';
import { ReactComponent as SmileIcon} from '../../img//1432299223.svg';
import { IconContainer } from './smiley-face-icon.styles'; 
const SmileyIcon = () => {
  const { isSmileyOpen, setIsSmileyOpen } = useContext(SmileyContext);

  const toggleIsSmileyOpen = () => setIsSmileyOpen(!isSmileyOpen);

  return (
    <IconContainer >
      <SmileIcon className='smiley-icon' />
    </IconContainer>
  );
};

export default SmileyIcon;