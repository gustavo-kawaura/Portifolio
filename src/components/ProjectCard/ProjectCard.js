import { Grid, Typography, styled } from "@mui/material";
import StyledButton from "../StyledButton/StyledButton";

const ProjectCard = ({
    title,
    subtitle,
    srcImg,
    description,
    technologies,
    websiteURL,
    codeURL
}) => {

    const StyledImg = styled("img")(({ theme }) => ({
        width: "100%",
        objectFit: "contain",
        height: "80vw",
        padding: "10px 0",
        zoom: "1.2",
        [theme.breakpoints.up('md')]: {
            height: "45vh",
        },
    }));

    const StyledCard = styled("div")(({ theme }) => ({
        borderRadius: "3px",
        border: `0.5px solid  ${theme.palette.secondary.contrastText}`,
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        transition: "transform 0.2s ease, background-color 0.3s ease",
        padding: "20px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
            transform: "scale(1.05)",

        }
        
    }));

    return (
        <StyledCard>
            <Typography variant="h5">
                {title}
            </Typography>
            <Typography>
                {subtitle}
            </Typography>
            <StyledImg src={srcImg} />
            <Typography>
                {description}
            </Typography>
            <Typography fontWeight={600} pt={2}>
                {technologies}
            </Typography>
            <Grid container spacing={1} pt={2}>
                <Grid item xs={6}>
                    <StyledButton onClick={() => window.open(websiteURL)}>Ver Projeto</StyledButton>
                </Grid>
                <Grid item xs={6}>
                    <StyledButton onClick={() => window.open(codeURL)}>Ver Código</StyledButton>
                </Grid>
            </Grid>
        </StyledCard>
    );
};

export default ProjectCard;