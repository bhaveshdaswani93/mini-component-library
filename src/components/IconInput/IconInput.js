import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const InputWrapper = styled.label`
  display: block;
  width: ${props => props.width};
`;

const Input = styled.input`

`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <InputWrapper width={width}>
      <Icon id={icon} />
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input type='text' placeholder={placeholder} />
    </InputWrapper>
  );
};

export default IconInput;
