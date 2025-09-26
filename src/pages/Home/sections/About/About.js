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
        "Javascript", "HTML", "React", "Git", "CSS", "Material UI", "C#", "SQL Server", "Redes Computacionais"
    ]

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
                            Sou estudante de Engenharia da Computação na Faculdade Engenheiro Salvador Arena, atualmente no quarto semestre, com 19 anos e previsão de formatura em 2028. Estou em busca de uma oportunidade de estágio para aplicar meus conhecimentos na prática e crescer profissionalmente. Possuo inglês em nível avançado, o que me permite aprender com materiais técnicos internacionais e colaborar com equipes diversas.
                        </p>

                        <p>
                            Tenho grande interesse nas áreas de desenvolvimento web com React, programação em geral, banco de dados e qualidade de software (QA). Busco sempre evoluir em cada uma delas, com foco em boas práticas, organização de código e entrega de soluções funcionais.
                        </p>

                        <p id="Skills">
                            Desde o início da graduação, venho desenvolvendo uma base sólida em lógica de programação, além de conhecimentos complementares em redes de computadores, o que me proporciona uma visão mais completa sobre a estrutura dos sistemas que construo.
                        </p>

                        <p>
                            Sou movido pela curiosidade, pela vontade de aprender constantemente e pelo desafio de transformar ideias em soluções digitais reais. Neste portfólio, compartilho projetos, experiências e aprendizados que refletem meu desenvolvimento contínuo como futuro engenheiro e desenvolvedor.
                        </p>

                        <p >
                            Seja bem-vindo(a)!
                        </p>
                    </Typography>
                </Box>
                <hr  />
                <Box  pt={1} mb={3}>
                    <Typography  variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
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
                 <hr/>
            </Container>
        </>
    )
}

export default About;