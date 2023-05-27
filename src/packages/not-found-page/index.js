import React from 'react';

import {
  LegacyButton,
  LegacyDiv,
  LegacyHeading,
  LegacyParagraph,
} from '../../components';
import { headingVariants } from '../../types/headingVariants';
import { useNavigate } from 'react-router';

export default () => {
  const navigator = useNavigate();

  return (
    <LegacyDiv
      styleProps={{
        ALL_DEVICES: {
          width: '100%',
        },
      }}
    >
      <LegacyDiv
        styleProps={{
          ALL_DEVICES: {
            padding: '64px 0',
            width: '100%',
            maxWidth: '1100px',
            flexDirection: 'column',
          },
        }}
      >
        <LegacyHeading
          text="404"
          variant={headingVariants.H1}
          styleProps={{
            ALL_DEVICES: {
              fontSize: '140px',
              fontWeight: '900',
              marginBottom: '28px',
            },
          }}
        />
        <LegacyHeading
          text="Oh no! Page Not Found"
          variant={headingVariants.H2}
          styleProps={{
            ALL_DEVICES: {
              fontSize: '40px',
              fontWeight: '900',
              marginBottom: '16px',
            },
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
          text="The page you are looking for no longer exists. Perhaps you can return back to the site's homepage and see if you can find what you are looking for. Or, you can try finding it with the information below."
        />
        <LegacyButton
          text="Back to Home"
          styleProps={{
            ALL_DEVICES: {
              border: 'none',
              fontSize: '16px',
              fontWeight: '700',
              padding: '14px 32px',
              width: 'fit-content',
            },
          }}
          onClick={() => navigator('/')}
        />
      </LegacyDiv>
    </LegacyDiv>
  );
};
