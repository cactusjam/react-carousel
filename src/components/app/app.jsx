import React, { Fragment, useState } from "react";
import propTypes from 'prop-types';
import SnapperButton from "../snapper-button/snapper-button";
import CarouselNav from "../carousel-nav/carousel-nav";
import Gallery from '../gallery/gallery';

const App = ({ images }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const imagesIndexLength = images.length === 0 ? 0 : images.length - 1;

  const handleBtnClick = (newSlideIndex) => setActiveSlideIndex(newSlideIndex);

  return (
    <Fragment>
      <SnapperButton
        isPrev={true}
        activeSlideIndex={activeSlideIndex}
        imagesIndexLength={imagesIndexLength}
        handleBtnClick={handleBtnClick} />

      <Gallery images={images} activeSlideIndex={activeSlideIndex} setActiveSlideIndex={setActiveSlideIndex} />

      <SnapperButton
        isPrev={false}
        activeSlideIndex={activeSlideIndex}
        imagesIndexLength={imagesIndexLength}
        handleBtnClick={handleBtnClick} />

      <CarouselNav
        images={images}
        activeSlideIndex={activeSlideIndex}
        handleBtnClick={handleBtnClick} />
    </Fragment>
  );
};

App.defaultProps = {
  images: [],
};

App.propTypes = {
  images: propTypes.array.isRequired,
};

export default App;