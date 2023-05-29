import { Container, UserInfo } from "./styles";
import { Stars } from "../Stars";
import { Tag } from "../Tag";

import { AiOutlineClockCircle } from 'react-icons/ai';

export function Movie({data, onClick, ...rest}) {

    function removingHTMLTags(description) {
        const textDescription = new DOMParser().parseFromString(data.description, 'text/html');
        return textDescription.body.textContent;
    }

    return(
        <Container onClick={onClick}>
            <header>
                <h1>{data.title}</h1>

                <Stars rating={Number(data.rating)}/>
            </header>

           {
            data.user && data.update_time &&
            
            <UserInfo>
                <p>Por {data.user}</p>
                
                <AiOutlineClockCircle/>
                
                <p>{data.update_time}</p>
            </UserInfo>
            
           }

            <p>
                {removingHTMLTags(data.description)}
            </p>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
                    }
                </footer>
            }

        </Container>
    );
}