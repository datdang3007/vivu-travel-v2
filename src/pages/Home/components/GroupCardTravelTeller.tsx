import { Grid } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Role } from "src/constants/role";
import { useCallAPIFind } from "src/hooks";
import { CardTravelTeller } from "src/ui";

export const GroupCardTravelTeller = () => {
  const [dataTeller, setDataTeller] = useState<any[]>([]);
  const { requestFindUserByRoles } = useCallAPIFind();

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
    return dataTeller.map((val) => {
      const { id, username, avatar, country } = val;
      return (
        <Grid key={id} item xs={12} padding={"10px"}>
          <CardTravelTeller
            id={id}
            name={username}
            avatar={avatar}
            from={country}
          />
        </Grid>
      );
    });
  }, [dataTeller]);

  useEffect(() => {
    const roles = [Role.Teller];
    requestFindUserByRoles(roles.join(",")).then((res) => {
      setDataTeller(res);
    });
  }, [requestFindUserByRoles]);

  return (
    <Grid item xs={12}>
      <Slider {...sliderSettings}>{renderListReviewer()}</Slider>
    </Grid>
  );
};
