import { ReactComponent as FacebookLogoLink } from '../../../img/svg/facebook.svg';
import { ReactComponent as InstagramSvg } from '../../../img/svg/instagram.svg';
import { ReactComponent as YoutubeSvg } from '../../../img/svg/youtube.svg';

import { FollowUsContainer, LinkContainer } from './SocialsLinks.styled';

export const SocialsLinks = () => {
  return (
    <FollowUsContainer>
      <LinkContainer
        href="https://www.facebook.com/goITclub/"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="link to Facebook"
        title="Facebook"
      >
        <FacebookLogoLink fill="currentColor" />
      </LinkContainer>
      <LinkContainer
        href="https://www.instagram.com/goitclub/"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="link to Instagram"
        title='Instagram'
      >
        <InstagramSvg fill="currentColor" />
      </LinkContainer>
      <LinkContainer
        href="https://www.youtube.com/c/GoIT"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="link to Youtube"
        title='Youtube'
      >
        <YoutubeSvg fill="currentColor" />
      </LinkContainer>
    </FollowUsContainer>
  );
};
