import CarouselStyles from "../../styles/modules/customcarousel.module.scss";


const CustomCarousel = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className={CarouselStyles.container}>
            {
                arr.map((slide, i) => {
                    return (
                        <div key={i} className={CarouselStyles.slides}>slide no {slide}</div>
                    )
                })
            }
        </div>
    );
};

export default CustomCarousel;