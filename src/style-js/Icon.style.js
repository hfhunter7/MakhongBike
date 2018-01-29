import React from 'react';
import styled from 'styled-components';

const MaterialIcon = (props) => (
	<i className={`material-icons ${props.className}`}>{props.name}</i>
);

const MaterialIconSpan = (props) => (
	<span className={`material-icons ${props.className}`} onClick={props.onClick}>{props.name}</span>
);


// WORKS 🎉
export const Icon = styled(MaterialIcon)`

`;

export const IconSpan = styled(MaterialIconSpan)`

`;