'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function RenderCarousel({images}) {


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
            <div className={`header-section`}>
                <h2>RECENT PHOTOS</h2>
            </div>
            <Carousel
                responsive={responsive}
                ssr={true}
                infinite={true}
                containerClass={`carousel-container`}
                itemClass={`px-1 carousel-image`}
                sliderClass={`align-center`}
                centerMode={true}
            >
              {images.filter(image => image !== '.DS_Store').map((image, i) => (
                <img src={`/assets/images/carouselImages/${image}`} alt={`A photo of a Show Me Tours tour`} key={i} />
              ))}
            </Carousel>
        </section>
    )
}
