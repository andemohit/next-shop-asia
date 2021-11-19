import Slider from "react-slick";
import Image from "next/image";

const Carousel = () => {
  const dummyData = [
    {
      id: 1,
      name: "Contenetal",
      image: require("../../../assets/img//recommend/r3.jpg"),
    },
    {
      id: 2,
      name: "Asian",
      image: require("../../../assets/img//recommend/r4.jpg"),
    },
    {
      id: 3,
      name: "Brazil",
      image: require("../../../assets/img//recommend/r5.jpg"),
    },
    {
      id: 4,
      name: "Chinese",
      image: require("../../../assets/img//recommend/r6.jpg"),
    },
    {
      id: 5,
      name: "japanese",
      image: require("../../../assets/img//recommend/r3.jpg"),
    },
    {
      id: 6,
      name: "India",
      image: require("../../../assets/img//recommend/r3.jpg"),
    },
    {
      id: 7,
      name: "India",
      image: require("../../../assets/img//recommend/r3.jpg"),
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {dummyData?.map((item, i) => (
          <div key={item.id} className="round categ_itm round">
            <h3 className="cate_title ">{item.name}</h3>
            <Image
              src={item.image}
              width={400}
              height={200}
              className="round"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
