import { keyframes } from "@emotion/react";
import { styled } from "@mui/system";
import { useEffect, useRef, useState } from "react";

const moveFromLeftToRight = keyframes`
0% {
    transform: translateX(-20vw);
  }
  100% {
    transform: translateX(0);
  }
`;

const moveFromRightToLeft = keyframes`
0% {
    transform: translateX(20vw);
  }
  100% {
    transform: translateX(0);
  }
`;

function AnimationComponent({ children, moveDirection }) {
    const componentRef = useRef(null);
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setStartAnimation(true);
                    observer.disconnect();
                }
            });
        });
        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const StyledAnimationComponent = styled("div")(({ theme }) => ({
        animation: startAnimation
            ? `${moveDirection === "right" ? moveFromLeftToRight : moveFromRightToLeft} 1s linear`
            : "none",
    }));

    return (
        <StyledAnimationComponent ref={componentRef}>
            {children}
        </StyledAnimationComponent>
    );
}

export default AnimationComponent;