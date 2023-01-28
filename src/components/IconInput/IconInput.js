import React from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"

import Icon from "../Icon"
import VisuallyHidden from "../VisuallyHidden"

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <InputContainer width={width} size={size}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Icon size={size === 'large' ? 24 : 16 } id={icon} />
      <Input placeholder={placeholder}  />
    </InputContainer>
  )
}

const Input = styled.input`
  color: inherit;
  border: none;
  width: 100%;
  font-size: inherit;
  &::placeholder {
    font-weight: 300;
    color: ${COLORS.gray300};
  }

  &:focus {
    outline: none;
  }
`;

const InputContainer = styled.div`
  width: ${props => props.width}px;
  border-bottom: ${props => props.size === 'large' ? '2px': '1px'} solid ${COLORS.black};
  padding: ${props => props.size === 'large' ? '7px': '4px'};
  color: ${COLORS.gray500};
  display: flex;
  gap: ${props => props.size === 'large' ? '18px' : '12px'};
  font-size:  ${props => props.size === 'large' ? '18px': '14px'};
  &:hover {
    color: ${COLORS.black};
  }
  &:has(${Input}:focus) {
   
  }

  &:focus-within {
    outline: 1px solid ${COLORS.black};
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }
`;



export default IconInput
