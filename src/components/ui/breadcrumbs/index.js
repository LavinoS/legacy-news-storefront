import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import { LegacyLink } from '../../index';
import breadcrumbsLinksStyleProps from './styles/breadcrumbsLinksStyleProps';
import mergeStyles from '../../../helpers/mergeStyles';

const StyledBreadcrumbsContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 16px 0;
  background: #15182c;

  ${(props) => props.theme.toRawCss(props.styleProps)}
`;
const StyledBreadcrumbs = styled.ol`
  list-style: none;
  width: 100%;
  max-width: 1100px;
  display: flex;

  ${(props) => props.theme.toRawCss(props.styleProps)}
`;
const StyledBreadcrumbsItem = styled.li`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => props.theme.toRawCss(props.styleProps)}
`;

export default (props) => {
  const {
    breadcrumbsContainerStyleProps,
    breadcrumbsStyleProps,
    breadcrumbsItemStyleProps,
    linksStyleProps = {},
  } = props;

  const [crumbs, setCrumbs] = useState([]);
  const { pathname } = useLocation();

  const pathSegments = pathname.split('/').filter((segment) => segment !== '');

  useEffect(() => {
    setCrumbs(
      pathSegments.reduce((prevSegment, currentSegment, currentIndex) => {
        return [
          ...prevSegment,
          {
            url: `/${pathSegments.slice(0, currentIndex + 1).join('/')}`,
            text: currentSegment.replace('-', ' '),
          },
        ];
      }, []),
    );
  }, []);

  const mergedLinksStyle = mergeStyles(
    breadcrumbsLinksStyleProps,
    linksStyleProps,
  );

  return (
    <StyledBreadcrumbsContainer
      aria-label="breadcrumb"
      styleProps={breadcrumbsContainerStyleProps}
    >
      <StyledBreadcrumbs styleProps={breadcrumbsStyleProps}>
        <StyledBreadcrumbsItem styleProps={breadcrumbsItemStyleProps}>
          <LegacyLink
            text="home"
            redirectPath="/"
            styleProps={mergedLinksStyle}
          />
        </StyledBreadcrumbsItem>
        {crumbs.map(({ url, text }, index) => {
          return (
            <StyledBreadcrumbsItem
              key={index}
              styleProps={breadcrumbsItemStyleProps}
            >
              <MdOutlineKeyboardArrowRight
                size="25px"
                style={{ color: '#FFF', margin: '0 5px' }}
              />
              <LegacyLink
                redirectPath={url}
                text={text}
                styleProps={mergedLinksStyle}
              />
            </StyledBreadcrumbsItem>
          );
        })}
      </StyledBreadcrumbs>
    </StyledBreadcrumbsContainer>
  );
};
