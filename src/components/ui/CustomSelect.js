import React, { useState } from 'react';
import styled from 'styled-components';
import { LegacyParagraph } from '../index';

const StyledSelect = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: start;
  cursor: pointer;

  &:after {
    content: '';
    border: solid black;
    border-width: 0 3px 3px 0;
    padding: 4px;
    transform: rotate(45deg) translateY(-50%);
    position: absolute;
    top: 15px;
    right: 15px;
  }

  ${(props) => props.theme.toRawCss(props.styleProps)}
`;

const StyledOptionContainer = styled.div`
  background: #f0f2f5;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  width: 100%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  top: 100%;

  ${(props) => props.theme.toRawCss(props.styleProps)};
`;

const StyledOption = styled.span`
  color: #7b809a;
  padding: 5px;
  width: 100%;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(195deg, #42424a 0%, #191919 100%);
    color: #fff;
    border-radius: 8px;
  }

  ${(props) => props.theme.toRawCss(props.styleProps)}
`;

export default (props) => {
  const {
    selectStyleProps,
    placeholder,
    onClick,
    optionContainerStyleProps,
    optionsConfig,
    optionStyleProps,
    value,
  } = props;

  const [openSelect, setOpenSelect] = useState(false);
  const [selectedText, setSelectedText] = useState(value || placeholder);

  const handleOpenSelect = () => setOpenSelect((prevState) => !prevState);

  const handleAction = (value, label) => {
    onClick(value);
    setSelectedText(label);
  };

  return (
    <StyledSelect styleProps={selectStyleProps} onClick={handleOpenSelect}>
      <LegacyParagraph
        styleProps={{ ALL_DEVICES: { textTransform: 'capitalize' } }}
        text={selectedText}
      />
      {openSelect && (
        <StyledOptionContainer styleProps={optionContainerStyleProps}>
          {optionsConfig.map(({ label, value }, index) => (
            <StyledOption
              key={index}
              styleProps={optionStyleProps}
              onClick={() => handleAction(value, label)}
            >
              {label}
            </StyledOption>
          ))}
        </StyledOptionContainer>
      )}
    </StyledSelect>
  );
};
