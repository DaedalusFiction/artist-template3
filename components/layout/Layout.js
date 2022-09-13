import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Sidebar from "../Sidebar";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <Box sx={{ position: "relative" }}>
            <Navbar />
            <Grid container spacing={0}>
                <Grid item xs={0} lg={0.5}>
                    <Sidebar side="left" />
                </Grid>
                <Grid item xs={12} lg={11.5}>
                    {children}
                    <Footer />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Layout;
