import React from 'react';
import { LegacyDiv, LegacyParagraph } from '../../components';
import styled from 'styled-components';
import { logoUrl } from '../header/assets';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaGooglePlusG, FaPinterest } from 'react-icons/fa';

const StyledFooter = styled.footer`
  ${(props) => props.theme.toRawCss(props.styleProps || {})};
`;

export default () => {
  return (
    <StyledFooter
      styleProps={{
        ALL_DEVICES: {
          backgroundImage:
            'url(https://legacy-news.s3.eu-north-1.amazonaws.com/footer.png)',
          width: '100%',
          height: 'fit-content',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundPosition: 'bottom',
        },
      }}
    >
      <LegacyDiv
        styleProps={{
          ALL_DEVICES: {
            maxWidth: '1100px',
            flexDirection: 'column',
            padding: '32px 0',
          },
        }}
      >
        <img
          src={logoUrl}
          alt="logo"
          style={{
            objectFit: 'contain',
            height: '120px',
            marginBottom: '16px',
          }}
        />
        <LegacyParagraph
          styleProps={{
            ALL_DEVICES: {
              fontSize: '16px',
              maxWidth: '60%',
              marginBottom: '16px',
            },
          }}
          text="Legacy News is a website that offers a collection of blog posts and news articles. It provides valuable and up-to-date information on various topics of interest. Users can explore a wide range of content, stay informed, and engage with the latest trends and discussions."
        />
        <LegacyDiv
          styleProps={{
            ALL_DEVICES: {
              '& > svg': {
                width: '25px',
                height: '25px',
                margin: '0 16px',
                cursor: 'pointer',
              },
            },
          }}
        >
          <BsFacebook />
          <BsTwitter />
          <BsInstagram />
          <FaGooglePlusG />
          <FaPinterest />
        </LegacyDiv>
      </LegacyDiv>
    </StyledFooter>
  );
};
