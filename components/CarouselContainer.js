import { useState } from 'react'
import Carousel from './Carousel'
import Image from 'next/image';
import LeftArrow from '../assets/LeftArrow.svg';
import RightArrow from '../assets/RightArrow.svg';
import Data from '../helper/CustomerData';

const CarouselContainer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideLength = Data.length;

    const changeNextSlide = () => {
        setCurrentIndex(currentIndex === slideLength - 1 ? 0 : currentIndex + 1);
    };
    
    const changePrevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? slideLength - 1 : currentIndex - 1);
    };
  return (
    <div>
        <Carousel 
            currentIndex={currentIndex} 
        />
        <div className="mt-10 rounded-xl p-5 w-[30%] md:w-[10%] mx-auto bg-[#EBF6FF]">
          <div className="flex justify-between">
            <button className="w-fit" onClick={changePrevSlide}>
              <Image src={LeftArrow} className="w-fit" alt="Left Arrow" />
            </button>
            <button className="w-fit" onClick={changeNextSlide}>
            <Image src={RightArrow} className="w-fit" alt="Right Arrow" />
            </button>
          </div>
        </div>
    </div>
  )
}

export default CarouselContainer