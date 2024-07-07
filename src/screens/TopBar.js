import React from 'react';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import { IconButton } from '@mui/material';
import InputBase from "@mui/material/InputBase";
import {colors} from '../global/themes'
const TopBar = () => {
  return (
    <Box className="flex justify-between  w-full ">
      <Box
        sx={{
          
          borderRadius: 1,
          px:3
        }}
        backgroundColor={colors.primary[700]}
      >
        <InputBase placeholder='Search' sx={{textAlign:"center",flex:1}}/>
        <IconButton sx={{px:0}}>

        <SearchIcon />
        </IconButton>
      </Box>

      <Box className="flex space-x-2">
        <IconButton>
        <DarkModeOutlinedIcon />
        </IconButton>
        <IconButton>
        <NotificationsIcon />
        </IconButton>
        <IconButton>
        <SettingsIcon />
        </IconButton>
        <IconButton>

        <PersonIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default TopBar;
