'use client';

import styled from "styled-components";

interface ButtonProps {
    type : 'button' | 'submit' | 'reset';
    children : React.ReactNode;
    className? : string;
    onClick? : (event : React.MouseEvent<HTMLButtonElement>) => void;
};

const StyledButton = styled.button `
    font-family: var(--font-principal);
    background-color: transparent;
    border: none;
    letter-spacing: 0.05rem;
    cursor: pointer;

    &:active {
        transform: scale(0.95);
    }
`;

const Button : React.FC<ButtonProps> = ({ type = 'button', children, className, onClick }) => {
    return (
        <StyledButton type={type} className={className} onClick={onClick}>{children}</StyledButton>
    );
};

export default Button;