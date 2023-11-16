import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const handleClick = () => {
    window.scrollTo(0, 0);
};

const CustomLink = (props) => {
    return (
        <LinkStyle
            to={props.to}
            fontSize={props.fontSize}
            lineHeight={props.lineHeight}
            textAlign={props.textAlign}
            onClick={handleClick}
        >
            {props.children}
        </LinkStyle>
    );
};

export default CustomLink;

const LinkStyle = styled(Link)`
    font-size: ${({ fontSize }) => fontSize};
    line-height: ${({ lineHeight }) => lineHeight};
    font-family: var(--font-lexend);
    color: var(--a);
    text-align: ${({ textAlign }) => textAlign};
    text-decoration: none;
`;