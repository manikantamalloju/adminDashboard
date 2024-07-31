import React, { useState } from "react";
import { Button, Menu, MenuItem, Divider } from "@mui/material";

const DropDownButton = ({ buttonText, menuItems }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{ color: "white", marginRight: 2 }}
      >
        {buttonText}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {menuItems.map((item, index) =>
          item.divider ? (
            <Divider key={index} />
          ) : (
            <MenuItem
              key={index}
              onClick={() => {
                item.action();
                handleClose();
              }}
            >
              {item.icon}
              {item.text}
            </MenuItem>
          )
        )}
      </Menu>
    </>
  );
};

export default DropDownButton;
