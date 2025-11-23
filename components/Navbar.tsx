"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "./navLinks";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isScrolled
            ? "rgba(17, 24, 39, 0.95)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          boxShadow: isScrolled ? "0 2px 10px rgba(0,0,0,0.5)" : "none",
          transition: "all 0.3s ease",
          display: { xs: "block", lg: "none" },
        }}
      >
        <Toolbar className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-grow"
          >
            <a
              href="#"
              className="text-2xl font-bold text-white"
            >
              SA
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  href={link.href}
                  sx={{
                    color: "white",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  {link.name}
                </Button>
              </motion.div>
            ))}
            <Button
              variant="contained"
              href="/resume.pdf"
              download
              sx={{
                background:
                  "linear-gradient(135deg, #0891b2 0%, #0e7490 50%, #0369a1 100%)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #0e7490 0%, #0369a1 50%, #075985 100%)",
                },
              }}
            >
              Resume
            </Button>
            <Button
              variant="outlined"
              href="/cover-letter.pdf"
              download
              sx={{
                borderColor: "white",
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Cover Letter
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              color: "white",
              display: { xs: "block", md: "none" },
            }}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { 
            width: 250,
            backgroundColor: "#1f2937",
            color: "#ffffff"
          },
        }}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-2xl font-bold gradient-text">Menu</span>
            <IconButton onClick={handleDrawerToggle} sx={{ color: "#ffffff" }}>
              <FaTimes />
            </IconButton>
          </div>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.name} disablePadding>
                <ListItemButton 
                  href={link.href} 
                  onClick={handleDrawerToggle}
                  sx={{ color: "#ffffff" }}
                >
                  <ListItemText primary={link.name} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton
                href="/resume.pdf"
                download
                onClick={handleDrawerToggle}
                sx={{ color: "#0891b2", fontWeight: "bold" }}
              >
                <ListItemText primary="Download Resume" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                href="/cover-letter.pdf"
                download
                onClick={handleDrawerToggle}
                sx={{ color: "#0891b2", fontWeight: "bold" }}
              >
                <ListItemText primary="Download Cover Letter" />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
}
