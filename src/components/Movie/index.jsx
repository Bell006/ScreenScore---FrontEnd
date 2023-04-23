import { Container, UserInfo } from "./styles";
import { Stars } from "../Stars";
import { Tag } from "../Tag";

import { AiOutlineClockCircle } from 'react-icons/ai';

export function Movie({data, ...rest}) {
    return(
        <Container>
            <header>
                <h1>{data.title}</h1>

                <Stars rating={data.rating}/>
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
                {data.description}
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