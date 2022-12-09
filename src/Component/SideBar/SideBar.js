import React, { useState } from "react";
// import "./styles.css";
import "./side.css";
import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  CssBaseline,
  Drawer,
  Typography,
} from "@material-ui/core";
import {
  Apps,
  Menu,
  ContactMail,
  AssignmentInd,
  Home,
} from "@material-ui/icons";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CallToActionIcon from "@mui/icons-material/CallToAction";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
// import PersonIcon from '@mui/icons-material/Person';

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    backgroundColor: "black",
    height: "100%",
  },
  avatar: {
    margin: "0.5rem auto",
    padding: "1rem",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
  iconColor: {
    color: "tan",

    // padding:"10px"
    margin: "10px",
  },
  closeMain: {
    display: "flex",
    justifyContent: "right",
    color: "tan",
    marginRight: "10px",
    paddingTop: "10px",
    alignItems: "center",
  },
}));

const listItems = [
  {
    listIcon: <Home />,
    listText: "Home",
  },
  {
    listIcon: <SchoolIcon />,
    listText: "Staf",
  },
  {
    listIcon: <PersonIcon />,
    listText: "Spelerslijst",
  },
  {
    listIcon: <VideoLabelIcon />,
    listText: "Tactiek",
  },
  {
    listIcon: <EmojiEventsIcon />,
    listText: "Competitie",
  },
  {
    listIcon: <CalendarTodayIcon />,
    listText: "Kalender",
  },
  {
    listIcon: <SettingsApplicationsIcon />,
    listText: "Taining",
  },
  {
    listIcon: <AccessTimeFilledIcon />,
    listText: "Scorebord",
  },
  {
    listIcon: <CallToActionIcon />,
    listText: "Notities",
  },
  {
    listIcon: <SettingsIcon />,
    listText: "Instellingen",
  },
  // {
  //   listIcon: <PersonIcon />,
  //   listText: "Contacts"
  // }
];

export default function SideApp() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleSlider = () => {
    setOpen(!open);
  };

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <div className={classes.closeMain}>
        Close <CloseIcon className={classes.iconColor} onClick={toggleSlider} />
      </div>
      <Divider />
      <List>
        {listItems.map((listItem, index) => (
          <ListItem className={classes.listItem} button key={index}>
            <ListItemIcon className={classes.listItem}>
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText primary={listItem.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <CssBaseline />

      <Box component="nav">
        <AppBar position="static">
          <Toolbar>
            <Typography>Menu</Typography>

            <IconButton
              onClick={toggleSlider}
              fill="white"
              style={{ color: "white" }}
            >
              <Menu fill="white" style={{ color: "white" }} />
            </IconButton>
            <Drawer open={open} anchor="left" onClose={toggleSlider}>
              {sideList()}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
