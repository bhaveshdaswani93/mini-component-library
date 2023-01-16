/* eslint-disable no-unused-vars */
import React from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"
import VisuallyHidden from "../VisuallyHidden"

const Progress = styled.progress`
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  accent-color: ${COLORS.primary};

`

const SIZES = {
  small: {
    '--padding': '4px 0'
  },

  medium: {
    '--padding': '8px 0'
  },

  large: {
    '--padding': '12px 0'
  }
}

const ProgressBar = ({ value, size }) => {
  let overRideValue = value;

  if (overRideValue < 0) {
    overRideValue = 0;
  }

  if (overRideValue > 100) {
    overRideValue = 100;
  }



  const styles = SIZES[size];
  return (
    <>
      <Progress
        aria-valuenow={overRideValue}
        value={overRideValue}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        min={0}
        max={100}
        style={styles}
      >{overRideValue}</Progress>
      <VisuallyHidden>Progress Bar</VisuallyHidden>
    </>
  )
}

export default ProgressBar
