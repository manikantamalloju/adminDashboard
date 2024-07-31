import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ProfileIcon from "../../assets/topBar/Ellipse 1.png";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
    >
      {/* ICONS */}
      <Box display="flex" alignItems="center">
        <IconButton onClick={colorMode.toggleColorMode} sx={{ mx: 1 }}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon style={{ height: 32, width: 32 }} />
          ) : (
            <LightModeOutlinedIcon style={{ height: 32, width: 32 }} />
          )}
        </IconButton>
        <IconButton sx={{ mx: 1 }}>
          <NotificationsOutlinedIcon style={{ height: 32, width: 32 }} />
        </IconButton>
        <IconButton sx={{ mx: 1 }}>
          <SettingsOutlinedIcon style={{ height: 32, width: 32 }} />
        </IconButton>
        <IconButton sx={{ mx: 1 }}>
          <img
            src={ProfileIcon}
            alt="Profile Icon"
            style={{ width: 46, height: 46, borderRadius: "50%" }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
