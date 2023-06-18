import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router';

import { LegacyLink } from '../../index';
import breadcrumbsLinksStyleProps from './styles/breadcrumbsLinksStyleProps';
import mergeStyles from '../../../helpers/mergeStyles';

const StyledBreadcrumbsContainer = styled.nav`
  width: fit-content;
  display: flex;
  justify-content: center;

  ${(props) => props.theme.toRawCss(props.styleProps)}
`;
const StyledBreadcrumbs = styled.ol`
  list-style: none;
  width: 100%;
  display: flex;

  ${(props) => props.theme.toRawCss(props.styleProps)}
`;
const StyledBreadcrumbsItem = styled.li`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;

  &:not(:first-child):before {
    display: inline-block;
    margin: 0 5px;
    color: #635c72;
    content: '/';
  }

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
  const navigator = useNavigate();

  const pathSegments = pathname.split('/').filter((segment) => segment !== '');

  useEffect(() => {
    setCrumbs(
      pathSegments.reduce((prevSegment, currentSegment, currentIndex) => {
        return [
          ...prevSegment,
          {
            url: `/${pathSegments.slice(0, currentIndex + 1).join('/')}`,
            text: currentSegment.replaceAll('-', ' '),
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
            onClick={() => navigator('/')}
            styleProps={mergedLinksStyle}
          />
        </StyledBreadcrumbsItem>
        {crumbs.map(({ url, text }, index) => {
          return (
            <StyledBreadcrumbsItem
              key={index}
              styleProps={breadcrumbsItemStyleProps}
            >
              <LegacyLink
                onClick={() => navigator(url)}
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
