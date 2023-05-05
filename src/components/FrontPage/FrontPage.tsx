import React from 'react';
import { Carousel } from 'react-bootstrap';
import FillerImage from '../../assets/Everything_Everywhere_All_at_Once.jpg';
import FillerImage2 from '../../assets/The Whale.jpg';

export const FrontPage: React.FC = () => {
  return (
    <div className="h-100 w-100 d-inline-block bg-secondary">
      <Carousel className="featured-movies">
        <Carousel.Item>
          <img 
            className="d-block w-75 p-3 m-auto"
            src={FillerImage}
            alt="Everything Everywhere All At Once"
          />
          <Carousel.Caption>
            <h3>Everything, Everywhere, All At Once</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-75 p-3 m-auto"
            src={FillerImage2}
            alt="The Whale"
          />
          <Carousel.Caption>
            <h3>The Whale</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Carousel className="saved-movies">
        <Carousel.Item>
          <img 
            className="d-block w-75 p-3 m-auto"
            src={FillerImage}
            alt="Everything Everywhere All At Once"
          />
          <Carousel.Caption>
            <h3>Everything, Everywhere, All At Once</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-75 p-3 m-auto"
            src={FillerImage2}
            alt="The Whale"
          />
          <Carousel.Caption>
            <h3>The Whale</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Carousel className="reviewed-movies">
        <Carousel.Item>
          <img 
            className="d-block w-75 p-3 m-auto"
            src={FillerImage}
            alt="Everything Everywhere All At Once"
          />
          <Carousel.Caption>
            <h3>Everything, Everywhere, All At Once</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-75 p-3 m-auto"
            src={FillerImage2}
            alt="The Whale"
          />
          <Carousel.Caption>
            <h3>The Whale</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> 
    </div>
  );
}