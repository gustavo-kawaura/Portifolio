import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

function Creditos() {

    const StyledToolbar = styled(Toolbar)(({ theme }) => ({
        backgroundColor: theme.palette.secondary.dark,
        justifyContent: 'center',
        color: theme?.palette?.primary?.main,
        flexDirection: 'column',
        textAlign: 'center',
        padding: theme.spacing(2) || '16px',
        linkcolor: theme.palette.primary.main,
    }));


    return (
        <StyledToolbar>
          Desenvolvido por: Gustavo Montemor<br />
                © {new Date().getFullYear()} - Todos os direitos reservados
        </StyledToolbar>
    );
}

export default Creditos;