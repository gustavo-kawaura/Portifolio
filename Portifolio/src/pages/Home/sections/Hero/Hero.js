import React from 'react';
import { Container, styled } from '@mui/system';
import avatar from '../../../../assets/images/profile.jpeg';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import Curriculo from '../../../../assets/documents/Curriculo.pdf';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StyledButton from '../../../../components/StyledButton/StyledButton';
import '../../../../App.css';

function Hero() {

    const StyledHero = styled("div")({
        background: `linear-gradient(-45deg,
     #181B21,
    #232B35,
    #2F3A48,
    #3A4959,
    #465769)`,
        backgroundSize: "300% 300%",
        animation: "organicWave 10s ease-in-out infinite",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    });

    const StyledAvatar = styled("img")(({ theme }) => ({
        width: "70%",
        borderRadius: "50%",
        border: `2px solid ${theme.palette.primary.main}`,
        justifyContent: "center",
        display: "flex",
    }));

    function handleDownload() {
        const link = document.createElement('a');
        link.href = Curriculo; // Correct file path for the PDF
        link.download = 'Curriculo_Gustavo_Kawaura.pdf'; // Set the download attribute
        document.body.appendChild(link); // Append the link to the document
        link.click(); // Trigger the download
        document.body.removeChild(link); // Remove the link after download
    }

    return (
        <StyledHero>

            <Container maxWidth="lg">

                <Grid container spacing={2} alignItems="center">
                    <Grid size={{ xs: 12, md: 5 }}
                        display="flex"
                        justifyContent="center" // Center horizontally
                        alignItems="center">
                        <StyledAvatar src={avatar} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }} >
                        <Typography color="primary" variant="h1" gutterBottom>
                            Gustavo Kawaura
                        </Typography>
                        <Typography color="primary" variant="h2" gutterBottom>
                            Estudante de Engenharia da Computação
                        </Typography>
                        <Grid container spacing={2} display="flex" justifyContent="center" pt={2}>
                            <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                <StyledButton onClick={handleDownload} color="primary" startIcon={<DownloadIcon />}>
                                    <DownloadIcon /> Currículo
                                </StyledButton>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                <a
                                    href="https://www.linkedin.com/in/gustavo-kawaura-montemor/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}
                                >
                                    <StyledButton color="primary" startIcon={<LinkedInIcon />}>
                                        <LinkedInIcon /> Contato
                                    </StyledButton>
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>

    );
}

export default Hero;