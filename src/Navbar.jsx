import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import image1 from "./assets/Header-icons.png";
import NavbarContent from "./content/Navbar_content.jsx";
import "./Style/Navbar.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import "./drag.js";
//image import
import edit_icon from "./assets/hero-arrow-square-up@2x.png";
import attach_icon from "./assets/hero-attack-icon.png";
import add_icon from "./assets/hero-add-square.png";
import profile_icon from "./assets/hero-grp-img.png";
import button_i from "./assets/hero-folder/first-button.png";
import button_ii from "./assets/hero-folder/second-button.png";
import button_iii from "./assets/hero-folder/share-button.png";
import button_iv from "./assets/hero-folder/equal-sign.png";
import button_v from "./assets/hero-folder/menu.png";

//cards import
import card1 from "./assets/cards/Group632.png";
import card2 from "./assets/cards/Group633.png";
import card3 from "./assets/cards/Group635.png";
import card4 from "./assets/cards/Group636.png";
import card5 from "./assets/cards/Group637.png";
import card6 from "./assets/cards/Group652.png";


const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function Navbar(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;



    

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
           </IconButton> 
          <Header />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div>
          <List>
            {NavbarContent.Content.map((item, index) => (
              <ListItem
                key={index}
                disablePadding
                className="navbar-content-i-row"
              >
                <div className="navbar-content-icons">
                  <img src={item.i} alt="my_image" />
                </div>
                <ListItemText primary={item.heading} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <div className="navbar-myproject">
            <p className="navbar-project-head">My Projects</p>
            <div className="navbar-content-img-parent">
              <img
                src={NavbarContent.image1}
                alt="my_image"
                className="navbar-content-img"
              />
            </div>
          </div>
          <List>
            {NavbarContent.Content02.map((item, index) => (
              <div
                key={index}
                disablePadding
                className="Navbar-content-ii-parent"
              >
                {console.log(index)}
                {index === 0 ? (
                  <div className="navbar-content-ii-row-active">
                    <img
                      src={item.i}
                      alt="my_image"
                      className="navbar-content-ii-img"
                    />
                    <ListItemText
                      className="navbar-contents-para-active"
                      primary={item.heading}
                    />
                  </div>
                ) : (
                  <div className="navbar-content-ii-row">
                    <img
                      src={item.i}
                      alt="my_image"
                      className="navbar-content-ii-img"
                    />
                    <ListItemText
                      primary={item.heading}
                      className="navbar-contents-para"
                    />
                  </div>
                )}
              </div>
            ))}
          </List>
          <div className="lamp">
            <div className="lamp-image">
              <img src={NavbarContent.image2} alt="my_image" />
            </div>
            <div className="inner-lamp">Thoughts time</div>
            <p className="lamp-para">
              We don’t have any notice for you, till then you can share your
              thoughts with your peers.
            </p>
            <button className="lamp-input">Write a Message</button>
          </div>
        </div>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <div className="hero">
          <div className="hero-row-i">
            <div className="hero-heading">Mobile Application</div>
            <div className="hero-row-i-icons">
              <img src={edit_icon} alt="my_Image" className="hero-edit-icon" />
              <img
                src={attach_icon}
                alt="my_image"
                className="hero-edit-icon"
              />
            </div>

            <div className="hero-row-i-right-icons">
              <div className="hero-left-wrapper">
                <img src={add_icon} alt="my_Image" className="hero-add-icon" />
                <div className="hero-invite">Invite</div>
              </div>
              <img
                src={profile_icon}
                alt="my_image"
                className="hero-profile-icon"
              />
            </div>
          </div>
          <div className="hero-row-ii">
            <div className="hero-row-ii-first-icon">
              <img
                src={button_i}
                alt="my-image"
                className="hero-row-ii-buttons"
              />
              <img
                src={button_ii}
                alt="my-image"
                className="hero-row-ii-buttons"
              />
            </div>
            <div className="hero-row-ii-last-icons">
              <img
                src={button_iii}
                alt="my-image"
                className="hero-row-ii-buttons"
              />
              <div className="hero-vertical-bar"></div>
              <img src={button_iv} alt="my-image" />

              <img
                src={button_v}
                alt="my-image"
                className="hero-ii-last-icon"
              />
            </div>
          </div>
        </div>

        <div className="main-div">
          <div className="droppable">
            <div className="main-col-1-header">
              <div className="main-col-1-header-button"></div>
              <div className="main-col-1-header-title">To do</div>
              <img
                src={add_icon}
                alt="my-image"
                className="main-col-1-header-icon"
              />
            </div>
            <div className="main-col-1-hz-ln"></div>
            <p className="draggable" draggable="true">
              <img src={card1} alt="my_image" /> 
              <img src={card5} alt="my_image" />
            </p>
          </div>

          <div className="droppable">
            <div className="main-col-1-header">
              <div className="main-col-2-header-button"></div>
              <div className="main-col-1-header-title">On Progress</div>
              {/* <img
                src={add_icon}
                alt="my-image"
                className="main-col-1-header-icon"
              /> */}
            </div>
            <div className="main-col-2-hz-ln"></div>
            <p className="draggable" draggable="true">
              <img src={card3} alt="my_image" /> 
              <img src={card4} alt="my_image" />
            </p>
          </div>

          <div className="droppable">
            <div className="main-col-1-header">
              <div className="main-col-3-header-button"></div>
              <div className="main-col-1-header-title">Done</div>
              {/* <img
                src={add_icon}
                alt="my-image"
                className="main-col-1-header-icon"
              /> */}
            </div>
            <div className="main-col-3-hz-ln"></div>
            <p className="draggable" draggable="true">
              <img src={card2} alt="my_image" /> 
            </p>
          </div>
        </div>
      </Main>
    </Box>
  );
}

// Navbar.propTypes = {
//   window: PropTypes.func,
// };

export default Navbar;
