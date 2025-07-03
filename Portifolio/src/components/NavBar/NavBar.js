import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

function NavBar() {

    const StyledToolbar = styled(Toolbar)(({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        justifyContent: 'space-evenly',
        color: theme.palette.primary.main,
    }));

    function handleMenuItemClick(event) {
        const targetId = event.currentTarget.getAttribute('data-target');
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target section
            }
        }
    }

    return (
        <div>
            <AppBar position="relative" sx={{ position: { xs: "relative", md: "absolute" } }}>
                <StyledToolbar>
                    <MenuItem data-target="Sobre" onClick={handleMenuItemClick}>
                        Sobre
                    </MenuItem>
                    <MenuItem data-target="Skills" onClick={handleMenuItemClick}>
                        Skills
                    </MenuItem>
                    <MenuItem data-target="Projetos" onClick={handleMenuItemClick}>
                        Projetos
                    </MenuItem>
                </StyledToolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;