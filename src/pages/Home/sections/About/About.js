import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";


function About() {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.dark,
        transition: "transform 0.2s ease, background-color 0.3s ease",

        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            transform: "scale(1.05)"
        }

    }));

    const skillsSet = [
        "C#",
        ".NET",
        "ASP.NET CORE",
        "REST APIs",
        "JavaScript",
        "HTML",
        "CSS",
        "React",
        "Material UI",
        "Git",
        "GitHub",
        "Web APIs",
        "SQL Server",
        "CRUD Operations",
        "MVC Architecture",
        "Authentication Tokens",
        "Computer Networks",
        "TCP/IP",
        "API Integration"
      ];

    return (
        <>
            <Container maxWidth="lg">
                <Box id="Sobre" pt={5} mb={3}>
                    <Typography variant="h3" textAlign="center" >Sobre mim</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Experiencia</Typography>
                                <Typography textAlign="center">Outubro de 2025 até o Momento</Typography>
                                <Typography textAlign="center">Desenvolver Fullstack</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Experiencia</Typography>
                                <Typography textAlign="center">1 Ano</Typography>
                                <Typography textAlign="center">Auxiliar Técnico em Telecomunicações</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Educação</Typography>
                                <Typography textAlign="center">Cursando Bacharelado</Typography>
                                <Typography textAlign="center">Engenharia da Computação</Typography>
                            </StyledCard>
                        </AnimationComponent>

                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                        <p>
                            Sou estagiário de desenvolvimento de software Full Stack na ProClinic Software e estudante de Engenharia da Computação na Faculdade Engenheiro Salvador Arena, atualmente no quarto semestre, com previsão de formatura em 2028. Tenho 20 anos e busco constantemente evoluir tecnicamente aplicando na prática os conhecimentos adquiridos durante a graduação.
                        </p>

                        <p>
                            Possuo experiência no desenvolvimento de aplicações web utilizando C#, ASP.NET, JavaScript, HTML, CSS e React.js, atuando tanto no frontend quanto no backend. Também trabalho com construção de APIs REST, integração com banco de dados SQL Server e versionamento de código utilizando Git e GitHub.
                        </p>

                        <p id="Skills">
                            Durante minha formação venho consolidando uma base sólida em lógica de programação, algoritmos e Programação Orientada a Objetos, sempre com foco em boas práticas de desenvolvimento e organização de código.
                        </p>

                        <p>
                            Tenho inglês em nível avançado e grande interesse em desenvolvimento de software, aprendizado contínuo e na construção de soluções digitais eficientes.
                        </p>

                        <p>
                            Seja bem-vindo(a)!
                        </p>
                    </Typography>
                </Box>
                <hr />
                <Box pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid item key={index} xs={5} sm={4} md={2} lg={2} >
                                <StyledCard variant="outlined">
                                    {skill}
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>

                </Box>
                <hr />
            </Container>
        </>
    )
}

export default About;