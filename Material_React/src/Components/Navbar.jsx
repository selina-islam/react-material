import React, { useState } from 'react';
import { AppBar, Typography, IconButton, Button, Drawer, List, ListItem, ListItemText, useMediaQuery, Toolbar } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
function Navbar() {
        const [open, setOpen] = useState(false);
        const Theme = useTheme();
        const IsMobile = useMediaQuery(Theme.breakpoints.down("sm"));
        const menuItems = ["About", "Services", "Projects", "Contacts"];
  return (
    <>
      <AppBar
        elevation={0}
        className="Navbar"
        position="static"
        sx={{ backgroundColor: "white", color: "black", border:'1px solid #fafafa' }}
      >
        <Toolbar>
          {IsMobile ? (
            <div>
              <IconButton color="inherit" onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            </div>
          ) : (
            <>
              <Typography sx={{ flexGrow: 1 }}>
                <img src="/logo.png" />
              </Typography>
              {menuItems.map((item) => (
                <Button color="inherit" key={item}>
                  {item}
                </Button>
              ))}

              <Button
                variant="outlined"
                sx={{
                  color: "#2AB691",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "#2ab666",
                    color: "white",
                  },
                }}
              >
                Sign Up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item} onClick={() => setOpen(false)}>
              <ListItemText> {item}</ListItemText>
            </ListItem>
          ))}
          <ListItem button>
            <ListItemText primary="Sign Up" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Navbar