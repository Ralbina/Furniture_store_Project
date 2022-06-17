import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import modern1 from "../../assets/image/modern1.jpeg";
import modern2 from "../../assets/image/modern2.jpeg";
import modern3 from "../../assets/image/modern3.jpeg";
import modern4 from "../../assets/image/modern4.jpeg";
import modern5 from "../../assets/image/modern5.jpeg";
import modern6 from "../../assets/image/modern6.jpeg";
import modern7 from "../../assets/image/modern7.jpeg";
import modern8 from "../../assets/image/modern8.jpeg";
import modern9 from "../../assets/image/modern9.jpeg";
import modern10 from "../../assets/image/modern10.jpeg";
import modern11 from "../../assets/image/modern11.jpeg";
import modern12 from "../../assets/image/modern12.jpeg";
import modern13 from "../../assets/image/modern13.jpeg";
import modern14 from "../../assets/image/modern14.jpeg";
import modern15 from "../../assets/image/modern15.jpeg";
import modern16 from "../../assets/image/modern16.jpeg";
import modern17 from "../../assets/image/modern17.jpeg";
import modern18 from "../../assets/image/modern18.jpeg";
import modern19 from "../../assets/image/modern19.jpeg";
import modern20 from "../../assets/image/modern20.jpeg";
import modern21 from "../../assets/image/modern21.jpeg";
import modern22 from "../../assets/image/modern22.jpeg";
import modern23 from "../../assets/image/modern23.jpeg";
import modern24 from "../../assets/image/modern19.jpeg";
import modern25 from "../../assets/image/modern25.jpeg";
import modern26 from "../../assets/image/modern26.jpeg";
import modern27 from "../../assets/image/modern27.jpeg";
import "./LightFurniture.css";

export default function MasonryImageList() {
  return (
    <div className="modern">
      <div className="textDiv">
        <p className="bigTextModern">MODERN LIGHTING</p>
        <p className="textModern">
          Contemporary Crystal Chandeliers, Modern Ceiling Lighting, Sconces,
          Table Lamps, Wall Lights, Outdoor and Technical Lighting for any
          budget.
        </p>
      </div>
      <div>
        <ImageList
          sx={{ width: "100%", height: "100%" }}
          variant="masonry"
          cols={5}
          gap={4}
        >
          {itemData.map((item) => (
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

const itemData = [
  {
    img: `${modern1}`,
    title: "Fern",
  },
  {
    img: `${modern2}`,
    title: "Snacks",
  },
  {
    img: `${modern3}`,
    title: "Mushrooms",
  },
  {
    img: `${modern4}`,
    title: "Tower",
  },
  {
    img: `${modern5}`,
    title: "Sea star",
  },
  {
    img: `${modern6}`,
    title: "Honey",
  },
  {
    img: `${modern7}`,
    title: "Basketball",
  },
  {
    img: `${modern8}`,
    title: "Breakfast",
  },
  {
    img: `${modern9}`,
    title: "Tree",
  },
  {
    img: `${modern10}`,
    title: "Burger",
  },
  {
    img: `${modern11}`,
    title: "Camera",
  },
  {
    img: `${modern12}`,
    title: "Coffee",
  },
  {
    img: `${modern13}`,
    title: "Camping Car",
  },
  {
    img: `${modern14}`,
    title: "Hats",
  },
  {
    img: `${modern15}`,
    title: "Tomato basil",
  },
  {
    img: `${modern16}`,
    title: "Mountain",
  },
  {
    img: `${modern17}`,
    title: "Bike",
  },
  {
    img: `${modern18}`,
    title: "Bike",
  },
  {
    img: `${modern19}`,
    title: "Bike",
  },
  {
    img: `${modern20}`,
    title: "Mountain",
  },
  {
    img: `${modern21}`,
    title: "Bike",
  },
  {
    img: `${modern22}`,
    title: "Bike",
  },
  {
    img: `${modern23}`,
    title: "Bike",
  },
  {
    img: `${modern24}`,
    title: "Mountain",
  },
  {
    img: `${modern25}`,
    title: "Bike",
  },
  {
    img: `${modern26}`,
    title: "Bike",
  },
  {
    img: `${modern27}`,
    title: "Bike",
  },
];
