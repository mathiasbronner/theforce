"use client"; // Just used for this demo as there is issues between nextjs and swiperjs - https://github.com/vercel/next.js/discussions/43755

import styled from "@emotion/styled";
import { Carousel } from "@/components/Carousel";
import { data } from "../data";

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 100vw;
`;

const CarouselContainer = styled.div<{ bg: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bg }) => bg};
`;

const IntroText = styled.h1`
  position: absolute;
  left: 1.4%;
  right: 0;
  top: 80px;
  margin-inline: auto;
  width: fit-content;
  font-family: "Star Wars", sans-serif;
  font-size: 5vw;
  color: #ffe81f; // banana yellow
`;

const people = Object.entries(data).filter(([key]) => key.includes("people"));
const peopleReversed = [...people].reverse();

export type Data = typeof data;
export type People = typeof people;
export type Person = People[number][1];

export default function Home() {
  return (
    <Container>
      <IntroText>Choose your side</IntroText>
      <CarouselContainer bg="black">
        <Carousel data={peopleReversed} />
      </CarouselContainer>
      <CarouselContainer bg="white">
        <Carousel data={people} />
      </CarouselContainer>
    </Container>
  );
}
