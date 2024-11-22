import React from 'react'
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import {Box, Container, Grid, Typography,  Link, IconButton} from '@mui/material'

function Footer() {
        const FooterData = [
          {
            tittle: "Home",
            links: ["Become Affiliate", "Go Unlimited", "Services"]
          },
          {
            tittle: "Products",
            links: [
              "Design Systems",
              "Themes & Templates",
              "Mockups",
              "Presentations",
              "Wireframes Kits",
              "UI Kits",
            ]
          },
          {
            tittle: "Legals",
            links: ["License", "Refund Policy", "About Us", "Contacts"]
          },
          {
            tittle: "Blog",
            links: ['Business Stories','Digital Store','Learning','Social Media']
          },
        ];

        const SocialIcons = [
                
                        {icon : <Facebook/>, href:'#'},
                        {icon : <Twitter/>, href:'#'},
                        {icon : <Instagram/>, href:'#'},
                
        ]
  return (
    <Box sx={{ bgcolor: "#000", color: "#fff", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography>
              <img src="/wlogo.png" alt="" />
            </Typography>
          </Grid>
          {FooterData.map((section, index) => (
            <Grid item xs={6} md={2} key={index}>
              <Typography>{section.tittle}</Typography>
              {section.links.map((link, linkIndex) => (
                <Box key={linkIndex}>
                  <Link
                    href="#"
                    underline="none"
                    color="inherit"
                    display="block"
                    sx={{ my: 1 }}
                  >
                    {link}
                  </Link>
                </Box>
              ))}
            </Grid>
          ))}
        </Grid>
        <hr className="!mt-10 !mb-2 !text-[#C4C4C4]" />

        <Box display="flex" justifyContent="center">
          {SocialIcons.map((SocialIcons, index) => (
            <IconButton key={index} color="inherit">
              {SocialIcons.icon}
            </IconButton>
          ))}
        </Box>
        <Box mt={4} textAlign="center">
          <Typography>
            © {new Date().getFullYear} Degic. All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer