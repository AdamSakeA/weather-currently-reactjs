import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Container, Title } from "./cardCountrySkeleton.styles";
import "react-loading-skeleton/dist/skeleton.css";

export default function CardCountrySkeleton() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Container>
        <Title>
          <Skeleton containerClassName="skeleton" />
        </Title>
        <Skeleton containerClassName="skeleton" width={"15%"} />
      </Container>
    </SkeletonTheme>
  );
}
