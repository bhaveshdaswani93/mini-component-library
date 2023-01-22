import React from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"
import Icon from "../Icon"
import { getDisplayedValue } from "./Select.helpers"

const SelectWrapper = styled.label`
  position: relative;
  /* width: min-content;
  background: #80808026;
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 12px;

  display: flex;
  gap: 24px; */
`

const IconComposition = styled(Icon)`
 position: absolute;
 top: 0;
 right: 12px;
 pointer-events: none;
  color: #656565;

`

const CustomSelect = styled.select`
  appearance: none;
  border: none;
  background-color: #80808026;
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  width: fit-content ;
  color: #656565;

  &:focus {
    outline: 1px solid #4374CB;
  }

  &:hover {
    color: #000;
  }

  &:hover + ${IconComposition} {
    color: #000;
  }
`





const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)

  return (
    <SelectWrapper htmlFor='custom-select'>
      <CustomSelect id='custom-select' value={value} onChange={onChange}>
        {children}
      </CustomSelect>
      <IconComposition id='chevron-down' />
    </SelectWrapper>
  )
}

export default Select
