import {styled} from "@mui/material/styles";

function StyledButton({ children, onClick }) {
   
const CustomStyledButton = styled("button")(({ theme }) => ({
    backgroundColor: "transparent",
    color: theme.palette.primary.main,
    padding: "12px 24px",
    borderRadius: "25px",
    border: "2px solid",
    cursor: "pointer",
    fontSize: "1.1rem",
    fontWeight: "600",
    transition: "transform 0.2s ease, background-color 0.3s ease",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    fontFamily: theme.typography.fontFamily,

    "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
        transform: "scale(1.05)",
    },

    "&:active": {
        backgroundColor: theme.palette.secondary.light,
        transform: "scale(0.95)",
    },
}));

    return (
        <CustomStyledButton onClick={onClick}>
            {children}
        </CustomStyledButton>
    );// This is a styled button component using MUI's styled utility
}

      
export default StyledButton;