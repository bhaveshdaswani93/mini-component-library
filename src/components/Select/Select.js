import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const SelectInput = styled.select`
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
opacity: 0;
&:focus {
    
  }
`;

const SelectContainer = styled.div`
  position: relative;
  width: max-content;
  
`;

const PresentationalSelect = styled.div`
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  font-size: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 24px;
  color: ${COLORS.gray500};
  ${SelectInput}:hover + & {
    color: ${COLORS.black};
  }
  ${SelectInput}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;



const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectContainer>
     
      <SelectInput value={value} onChange={onChange}>
        {children}
      </SelectInput>
      <PresentationalSelect>
        <span>{displayedValue}</span>
        <Icon size='24px' id='chevron-down' />
      </PresentationalSelect>
    </SelectContainer>
    
  );
};

export default Select;
