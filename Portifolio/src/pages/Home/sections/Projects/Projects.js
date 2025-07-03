import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import imagem1 from "../../../../assets/images/calc.jpg";

function Projects() {
    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
    }));

    const projects = [
        {
            title: "Calculadora de Aposentadoria",
            subtitle: "Mai 2025 - Em desenvolvimento",
            srcImg: imagem1,
            description: "Projeto idealizado em conjunto com outros colegas, com o objetivo de ajudar pessoas a entenderem em quanto tempo poderão viver de renda. Fui responsável por todo o desenvolvimento da aplicação. A plataforma permite que o usuário simule, de forma simples e intuitiva, quanto tempo levará para alcançar a independência financeira com base em dados como aportes mensais, retorno esperado e patrimônio alvo.",
            technologies: "Tecnologias: JavaScript, HTML, CSS, React",
            websiteURL: "https://calculadora-de-aposentadoria-ijjhhdh24.vercel.app/",
            codeURL: "https://github.com/gustavo-kawaura",
        },
    ];

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="Projetos" pt={5} pb={4}>
                    <Typography variant="h3" textAlign="center" color="secondary.contrastText">Projetos</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project, index) => (
                        <Grid item md={6} key={index}>
                           
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                           
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    );
}

export default Projects;