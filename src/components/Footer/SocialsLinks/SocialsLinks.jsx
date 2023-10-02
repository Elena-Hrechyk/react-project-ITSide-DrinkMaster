import { ReactComponent as FacebookLogoLink } from '../../../img/svg/facebook.svg';
import { ReactComponent as InstagramSvg } from '../../../img/svg/instagram.svg';
import { ReactComponent as YoutubeSvg } from '../../../img/svg/youtube.svg';

import { FollowUsContainer, SvgContainer } from './SocialsLinks.styled';

export const SocialsLinks = () => {
  return (
    <FollowUsContainer>
      <a
        href="https://www.facebook.com/goITclub/"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="link to Facebook"
      >
        <SvgContainer>
          <FacebookLogoLink />
        </SvgContainer>
      </a>
      <a
        href="https://www.instagram.com/goitclub/"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="link to Instagram"
      >
        <SvgContainer>
          <InstagramSvg />
        </SvgContainer>
      </a>
      <a
        href="https://www.youtube.com/c/GoIT"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="link to Youtube"
      >
        <SvgContainer>
          <YoutubeSvg />
        </SvgContainer>
      </a>
    </FollowUsContainer>
  );
};
