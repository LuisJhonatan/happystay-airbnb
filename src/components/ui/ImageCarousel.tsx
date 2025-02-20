import React from "react";
import Slider from "react-slick";
import { X } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialSlide?: number;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: "slick-dots slick-dots-custom",
    appendDots: (dots: React.ReactNode) => (
      <div style={{ position: "absolute", bottom: "64px", width: "100%" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="h-screen fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative w-full h-full max-w-7xl mx-auto p-4 flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>
        <div className="w-full">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="outline-none ">
                <div className="flex items-center justify-center h-[80vh] relative ">
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    layout="fill"
                    objectFit="contain"
                    style={{ objectPosition: "center" }}
                    priority
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
