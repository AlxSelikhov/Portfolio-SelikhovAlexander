import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const handleClick = () => {
    window.scrollTo(0, 0);
};

const CustomNavLink = ({ to, exact, children }) => {
    return (
        <StyledNavLink exact={exact} to={to} onClick={handleClick}>
            {children}
        </StyledNavLink>
    );
};

export default CustomNavLink;


const StyledNavLink = styled(NavLink)`
    font-size: 18px;
    line-height: 150%;
    font-weight: 500;
    font-family: var(--font-manrope);
    color: var(--grey-20);
    text-align: left;
    text-decoration: none;

&.active {
    border-radius: 8px;
    background-color: var(--peach-95);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 14px 24px;
    box-sizing: border-box;
    text-align: left;
    font-size: 18px;
    color: var(--grey-20);
    font-family: var(--font-manrope);
    text-decoration: none;
}
`; 