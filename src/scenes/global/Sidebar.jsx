import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  const menuItems = [
    {
      title: "Inventory",
      to: "/",
      icon: <img src="/assets/InventoryLogo.png" alt="Inventory Icon" />,
    },
    {
      title: "Purchase Order",
      to: "/team",
      icon: (
        <img src="/assets/PurchaseOrderLogo.png" alt="Purchase Order Icon" />
      ),
    },
    {
      title: "GRN",
      to: "/contacts",
      icon: <img src="/assets/GrnLogo.png" alt="GRN Icon" />,
    },
    {
      title: "Vendor Management",
      to: "/invoices",
      icon: (
        <img
          src="/assets/VendorManagementLogo.png"
          alt="Vendor Management Icon"
        />
      ),
    },
    {
      title: "Material Management",
      to: "/form",
      icon: (
        <img
          src="/assets/MaterialManagementLogo.png"
          alt="Material Management Icon"
        />
      ),
    },
    {
      title: "Warehouse Management",
      to: "/wareHouses",
      icon: (
        <img
          src="/assets/WarehouseManagementLogo.png"
          alt="Warehouse Management Icon"
        />
      ),
    },
  ];

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
          // Add this line to set height to 100%
          height: "100vh !important",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box display="flex" alignItems="center">
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>

                <img
                  alt="profile-user"
                  width="48px"
                  height="48px"
                  src="/assets/logo 1.png"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {menuItems.map((item) => (
              <Item
                key={item.title}
                title={item.title}
                to={item.to}
                icon={item.icon}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
