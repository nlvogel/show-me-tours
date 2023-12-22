'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import classes from './index.module.scss'
import {Individual, Multiple} from "../Schema/Container";
import {addImage} from "../Schema";


export default function RenderCarousel({images, includeHeader = true, mainImages = true}) {


    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 4
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 2
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    }
    return (
        <section className={`reviews max-width`}>
          {includeHeader && <div className={`header-section`}>
            <h2>RECENT PHOTOS</h2>
          </div>}
            <Carousel
                responsive={responsive}
                ssr={true}
                infinite={true}
                containerClass={`carousel-container`}
                itemClass={`px-1 carousel-image`}
                sliderClass={`align-center`}
                slidesToSlide={1}
            >
              {mainImages ? images.filter(image => image !== '.DS_Store').map((image, i) => (
                <div key={i}>
                  <Individual schema={addImage({image: `/assets/images/carouselImages/${image}`})} />
                  <img src={`/assets/images/carouselImages/${image}`} alt={`A photo of a Show Me Tours tour`}/>
                </div>
              )) : images.map((image, i) => <div key={i}>
                <Individual schema={addImage({image: image.src})} />
                <Image className={classes.otherImages} src={image.src}
                                                      alt={image.altDescription} height={image.height}
                                                      width={image.width}/>
              </div>) }
            </Carousel>
        </section>
    )
}
