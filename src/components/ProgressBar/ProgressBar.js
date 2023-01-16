/* eslint-disable no-unused-vars */
import React from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"
import VisuallyHidden from "../VisuallyHidden"

const SIZES = {
  small: {
    '--height': '8px',
    '--padding': 0,
    '--border-radius': '4px'
  },

  medium: {
    '--height': '12px',
    '--padding': 0,
    '--border-radius': '4px'
  },

  large: {
    '--height': '24px',
    '--padding': '4px',
    '--border-radius': '8px'
  }
}

const ProgressBar = ({ value, size }) => {

  const styles = {
    '--width': value + '%'
  }

  const wrapperStyles = SIZES[size];

  if (!wrapperStyles) {
    throw new Error(`Invalid Size provided: ${size}`);
  }

  return (
    <BarWrapper
      role="progressbar"
      aria-label={`Loading ${value}`}
      aria-valuenow={value}
      style={wrapperStyles}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarInnerWrapper>
        <Bar style={styles} />
      </BarInnerWrapper>
    </BarWrapper>
  )
}

const Bar = styled.div`
  width: var(--width);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
  height: 100%;
`;

const BarWrapper = styled.div`
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--border-radius);
  height: var(--height);
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  
`;

const BarInnerWrapper = styled.div`
  
  height: 100%;
  /* Added overlow to crip the bar that touches the end */
  overflow: hidden;
  border-radius: 4px;
`;

export default ProgressBar
