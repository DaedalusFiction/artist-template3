import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import lightTheme from "../../styles/themes/lightTheme";
import { pages, siteName, heroContent } from "../../siteInfo";
import SocialMediaIcons from "../general/SocialMediaIcons";

const Hero = () => {
    return (
        <Box
            sx={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)),
  url(${heroContent.image.url})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 5%",
                padding: "1rem 0",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <Container maxWidth="xl">
                {/* <Header light /> */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "end",
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            marginBottom: ".25em",
                            color: lightTheme.palette.custom.light,
                            textAlign: "center",
                        }}
                    >
                        {siteName}
                    </Typography>
                </Box>
            </Container>
            {/* <Typography
                        variant="h5"
                        sx={{
                            color: lightTheme.palette.custom.lightMuted,
                            textAlign: { xs: "center", md: "left" },
                        }}
                    >
                        {heroContent.secondaryText}
                    </Typography> */}
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: "flex",
                        gap: ".5em",
                        justifyContent: "end",
                    }}
                >
                    {/* <Link href={heroContent.buttonOne.href}>
                            <Button
                                size="large"
                                variant={heroContent.buttonOne.variant}
                            >
                                {heroContent.buttonOne.text}
                            </Button>
                        </Link> */}
                    <SocialMediaIcons color="primary" fontSize="30px" />
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
