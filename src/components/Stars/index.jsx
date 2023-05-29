import { Container, StarContainer } from "./styles";
import { BsStarHalf, BsStarFill, BsStar } from "react-icons/bs";

import PropTypes from 'prop-types';

export function Stars({ rating }) {
    let tag;

    switch (rating) {
        case .5:
            tag = (
                <StarContainer>
                  <BsStarHalf />
                  <BsStar />
                  <BsStar />
                  <BsStar />
                  <BsStar />
                </StarContainer>
            );
        break;
        
        case 1:
          tag = (
            <StarContainer>
              <BsStarFill />
              <BsStar />
              <BsStar />
              <BsStar />
              <BsStar />
            </StarContainer>
          );
        break;

        case 1.5:
        tag = (
            <StarContainer>
              <BsStarFill />
              <BsStarHalf />
              <BsStar />
              <BsStar />
              <BsStar />
            </StarContainer>
        );
        break;
        
        case 2:
            tag = (
                <StarContainer>
                  <BsStarFill />
                  <BsStarFill />
                  <BsStar />
                  <BsStar />
                  <BsStar />
                </StarContainer>
          );
          break;
          
          case 2.5:
              tag = (
                <StarContainer>
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                  <BsStar />
                  <BsStar />
                </StarContainer>
              );
          break;

        case 3:
          tag = (
            <StarContainer>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStar />
              <BsStar />
            </StarContainer>
          );
        break;

        case 3.5:
            tag = (
              <StarContainer>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
                <BsStar />
              </StarContainer>
            );
        break;

        case 4:
          tag = (
            <StarContainer>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStar />
            </StarContainer>
          );
        break;

        case 4.5:
            tag = (
              <StarContainer>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </StarContainer>
            );
        break;

        case 5:
          tag = (
            <StarContainer>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </StarContainer>
          );
        break;

        default:
          tag = null; 
        break;
      }
  

    
    return(
        <Container>
            {tag}
        </Container>
    );
}

Stars.propTypes = {
    rating: PropTypes.number.isRequired
  };