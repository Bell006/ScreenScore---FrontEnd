import { MdOutlineClose } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';

import { Container } from './styles';

export function TagItem({isNew, value, onClick, ...rest}) {
    return (
        <Container isNew={isNew}>
            <input
                type='text'
                readOnly={!isNew}
                value={value}
                {...rest}
            />
            <button
                type='button'
                onClick={onClick}
                className={isNew ? 'button-add' : 'button-delete'}
            >
                {isNew ? <AiOutlinePlus/> : <MdOutlineClose/>}
            </button>
            
        </Container>
      );
}