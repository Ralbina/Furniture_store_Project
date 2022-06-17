import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import fur1 from "../../assets/image/fur1.jpeg";
import fur2 from "../../assets/image/fur2.jpeg";
import fur3 from "../../assets/image/fur3.jpeg";
import fur4 from "../../assets/image/fur4.jpeg";
import fur5 from "../../assets/image/fur5.jpeg";
import fur6 from "../../assets/image/fur6.jpeg";
import fur7 from "../../assets/image/fur7.jpeg";
import fur8 from "../../assets/image/fur8.jpeg";
import fur9 from "../../assets/image/fur9.jpeg";
import fur10 from "../../assets/image/fur10.jpeg";
import fur11 from "../../assets/image/fur11.jpeg";
import fur12 from "../../assets/image/fur12.jpeg";
import fur13 from "../../assets/image/fur13.jpeg";
import fur14 from "../../assets/image/fur14.jpeg";
import fur15 from "../../assets/image/fur15.jpeg";
import fur16 from "../../assets/image/fur16.jpeg";
import fur17 from "../../assets/image/fur17.jpeg";
import fur18 from "../../assets/image/fur18.jpeg";
import fur19 from "../../assets/image/fur19.jpeg";
import fur20 from "../../assets/image/fur20.jpeg";
import fur21 from "../../assets/image/fur21.jpeg";
import fur22 from "../../assets/image/fur22.jpeg";
import fur23 from "../../assets/image/fur23.jpeg";
import fur24 from "../../assets/image/fur19.jpeg";
import fur25 from "../../assets/image/fur25.jpeg";
import fur26 from "../../assets/image/fur26.jpeg";
import fur27 from "../../assets/image/fur27.jpeg";
import fur28 from "../../assets/image/fur28.jpeg";
import fur29 from "../../assets/image/fur29.jpeg";
import fur30 from "../../assets/image/fur30.jpeg";
import fur31 from "../../assets/image/fur31.jpeg";
import fur32 from "../../assets/image/fur32.jpeg";
import fur33 from "../../assets/image/fur33.jpeg";
import fur34 from "../../assets/image/fur34.jpeg";
import fur36 from "../../assets/image/fur36.jpeg";
import fur37 from "../../assets/image/fur37.jpeg";

export default function Furniture() {
  return (
    <div>
      <div className="textDiv">
        <p className="bigTextModern">MODERN FURNITURE </p>
        <h3 className="textFur">
          Bedrooms, Dining rooms, Living rooms, Bathroom furniture, Kitchens,
          Offices, Furniture for Kids, Auxiliary and Outdoor furniture for any
          budget.
        </h3>
      </div>
      <div>
        <ImageList
          sx={{ width: "100%", height: "100%" }}
          variant="masonry"
          cols={5}
          gap={4}
        >
          {itemDataFur.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}

const itemDataFur = [
  {
    img: `${fur1}`,
    title: "Fern",
  },
  {
    img: `${fur2}`,
    title: "Snacks",
  },
  {
    img: `${fur3}`,
    title: "Mushrooms",
  },
  {
    img: `${fur4}`,
    title: "Tower",
  },
  {
    img: `${fur5}`,
    title: "Sea star",
  },
  {
    img: `${fur6}`,
    title: "Honey",
  },
  {
    img: `${fur7}`,
    title: "Basketball",
  },
  {
    img: `${fur8}`,
    title: "Breakfast",
  },
  {
    img: `${fur9}`,
    title: "Tree",
  },
  {
    img: `${fur10}`,
    title: "Burger",
  },
  {
    img: `${fur11}`,
    title: "Camera",
  },
  {
    img: `${fur12}`,
    title: "Coffee",
  },
  {
    img: `${fur13}`,
    title: "Camping Car",
  },
  {
    img: `${fur14}`,
    title: "Hats",
  },
  {
    img: `${fur15}`,
    title: "Tomato basil",
  },
  {
    img: `${fur16}`,
    title: "Mountain",
  },
  {
    img: `${fur17}`,
    title: "Bike",
  },
  {
    img: `${fur18}`,
    title: "Bike",
  },
  {
    img: `${fur19}`,
    title: "Bike",
  },
  {
    img: `${fur20}`,
    title: "Mountain",
  },
  {
    img: `${fur21}`,
    title: "Bike",
  },
  {
    img: `${fur22}`,
    title: "Bike",
  },
  {
    img: `${fur23}`,
    title: "Bike",
  },
  {
    img: `${fur24}`,
    title: "Mountain",
  },
  {
    img: `${fur25}`,
    title: "Bike",
  },
  {
    img: `${fur26}`,
    title: "Bike",
  },
  {
    img: `${fur27}`,
    title: "Bike",
  },
  {
    img: `${fur28}`,
    title: "Bike",
  },
  {
    img: `${fur29}`,
    title: "Mountain",
  },
  {
    img: `${fur30}`,
    title: "Bike",
  },
  {
    img: `${fur31}`,
    title: "Bike",
  },
  {
    img: `${fur32}`,
    title: "Bike",
  },
  {
    img: `${fur33}`,
    title: "Bike",
  },
  {
    img: `${fur34}`,
    title: "Mountain",
  },
  {
    img: `${fur36}`,
    title: "Bike",
  },
  {
    img: `${fur37}`,
    title: "Bike",
  },
];
