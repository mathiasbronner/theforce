import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { People, Person } from "@/app/page";
import { Profile } from "./Profile";
import styled from "@emotion/styled";

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SwiperContainer = styled(Swiper)`
  width: 200px;
`;

type CarouselProps = {
  data: People;
};

export const Carousel = ({ data }: CarouselProps) => (
  <CarouselContainer>
    <SwiperContainer
      navigation
      pagination={{ type: "fraction" }}
      modules={[Navigation, Pagination]}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map(([key, value]: [key: string, value: Person]) => {
        return (
          <SwiperSlide key={key}>
            <Profile info={value} id={key} />
          </SwiperSlide>
        );
      })}
    </SwiperContainer>
  </CarouselContainer>
);
