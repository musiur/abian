import carouselStyles from "../../styles/modules/carousel.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination"
import "swiper/css/navigation"

// import Swiper core and required modules
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';
import Image from "next/image";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Carousel = () => {
    let slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <Swiper
            // navigation={true}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
                dynamicBullets: true,
                clickable: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 5,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1536: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                2048: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                3840: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                7680: {
                    slidesPerView: 7,
                    spaceBetween: 20,
                },
            }}
            className={carouselStyles.carouselStage}
        >
            {
                slides.map((slideData, i) => {
                    return (
                        <SwiperSlide
                            key={i}
                            className={carouselStyles.carouselSlides}
                        >
                            <div className={carouselStyles.imgs}>.</div>
                            <div className={carouselStyles.textDiv}>
                                <li>Give Food to Homeless Children</li>
                                <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</span>
                            </div>
                            <div className={carouselStyles.footerDiv}>
                                <div className={carouselStyles.progressBar}>
                                    <div></div>
                                    <li>70%</li>
                                </div>
                                <div className={carouselStyles.donationFooter}>
                                    <p>Raised $544</p>
                                    <p>Goal $877</p>
                                </div>
                            </div>

                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
};


export default Carousel;