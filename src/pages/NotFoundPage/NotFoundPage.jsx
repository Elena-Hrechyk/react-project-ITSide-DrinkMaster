import { Container } from '../../components/GlobalStyled/container.styled';
import MainGlass from '../../img/drink-master/hero/hero-drink-master.png';
import MainGlassBig from '../../img/drink-master/hero/hero-drink-master@2x.png';

import {
  Section,
  ErrorContainer,
  NotFoundImage,
  TitleLeft,
  TitleRigth,
} from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <Section>
      <Container>
        <ErrorContainer>
          <TitleLeft>4</TitleLeft>
          <picture>
            <NotFoundImage
              src={MainGlass}
              srcSet={MainGlassBig}
              alt="cocktail"
              loading="lazy"
            />
          </picture>
          <TitleRigth>4</TitleRigth>
        </ErrorContainer>
      </Container>
    </Section>
  );
};

export default NotFoundPage;
