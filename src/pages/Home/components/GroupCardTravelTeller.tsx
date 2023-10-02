import { Grid } from "@mui/material";
import { useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { CardTravelTeller } from "src/ui";

const dataListTravelTellers = [
  {
    id: 1,
    name: "Travel Teller 01",
    from: "Ho Chi Minh, Viet Nam",
    avatar:
      "https://assets.website-files.com/5ed4430d97a20a41629058ab/5ed47e09c6c9789e41e50f94_brooke-cagle-Nm70URdtf3c-unsplash.jpg",
  },
  {
    id: 2,
    name: "Travel Teller 02",
    from: "Ho Chi Minh, Viet Nam",
    avatar:
      "https://assets.website-files.com/5ed4430d97a20a41629058ab/5ed47e09c6c9789e41e50f94_brooke-cagle-Nm70URdtf3c-unsplash.jpg",
  },
  {
    id: 3,
    name: "Travel Teller 03",
    from: "Ho Chi Minh, Viet Nam",
    avatar:
      "https://assets.website-files.com/5ed4430d97a20a41629058ab/5ed47e09c6c9789e41e50f94_brooke-cagle-Nm70URdtf3c-unsplash.jpg",
  },
  {
    id: 4,
    name: "Travel Teller 04",
    from: "Ho Chi Minh, Viet Nam",
    avatar:
      "https://assets.website-files.com/5ed4430d97a20a41629058ab/5ed47e09c6c9789e41e50f94_brooke-cagle-Nm70URdtf3c-unsplash.jpg",
  },
];

export const GroupCardTravelTeller = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderListReviewer = useCallback(() => {
    return dataListTravelTellers.map((val) => (
      <Grid key={val.id} item xs={12} padding={"10px"}>
        <CardTravelTeller name={val.name} avatar={val.avatar} from={val.from} />
      </Grid>
    ));
  }, []);

  return (
    <Grid item xs={12}>
      <Slider {...sliderSettings}>{renderListReviewer()}</Slider>
    </Grid>
  );
};
