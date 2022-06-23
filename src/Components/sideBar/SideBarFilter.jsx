import React, { useContext, useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { productContext } from "../Context/ProductContext";
import { useSearchParams } from "react-router-dom";

const SideBarFilter = () => {
  const [type, setType] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const { fetchByParams } = useContext(productContext);

  useEffect(() => {
    let currentParams = Object.fromEntries([]);

    if (true) {
      fetchByParams(type);
    }
  }, [type]);
  return (
    <div>
      <FormControl id="filter">
        <FormLabel id="demo-radio-buttons-group-label">Filter</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="all"
          name="radio-buttons-group"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <FormControlLabel
            value="wardrobes"
            control={<Radio />}
            label="ШКАФ"
          />
          <FormControlLabel
            value="bedroom-sets"
            control={<Radio />}
            label="СПАЛЬНИ"
          />
          <FormControlLabel
            value="kitchens"
            control={<Radio />}
            label="КУХНИ"
          />
          <FormControlLabel
            value="tv-stand"
            control={<Radio />}
            label="TV ТУМБЫ"
          />
          <FormControlLabel
            value="dressers"
            control={<Radio />}
            label="КОМОДЫ"
          />
          <FormControlLabel
            value="living-room-sets"
            control={<Radio />}
            label="ГОСТИНЫЕ"
          />
          <FormControlLabel
            value="children-sets"
            control={<Radio />}
            label="ДЕТСКИЙ НАБОР"
          />
          <FormControlLabel
            value="cushioned-furniture"
            control={<Radio />}
            label="МЯГКАЯ МЕБЕЛЬ"
          />

          <FormControlLabel
            value="all"
            control={<Radio />}
            label="Все товары"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default SideBarFilter;
