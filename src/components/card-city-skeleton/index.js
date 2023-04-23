import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CityContainer, CityList, City } from "./cardCitySkeleton.styles";

export default function CardCitySkeleton() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <CityContainer>
        <CityList>
          <City>
            <Skeleton height={"80px"} />
          </City>
          <City>
            <Skeleton height={"80px"} />
          </City>
          <City>
            <Skeleton height={"80px"} />
          </City>
          <City>
            <Skeleton height={"80px"} />
          </City>
        </CityList>
      </CityContainer>
    </SkeletonTheme>
  );
}
