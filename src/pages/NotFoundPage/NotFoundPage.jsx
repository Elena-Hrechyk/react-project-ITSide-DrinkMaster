import { Container, ErrorContainer,  NotFoundImage,  Picture,  PictureContainer,  TitleLeft, TitleRigth } from "./NotFoundPage.styled";

const NotFoundPage = () => {
  return (
    <Container>
      <ErrorContainer>
        <TitleLeft>4</TitleLeft>
          <picture>
            <NotFoundImage
              src="./src/img/drink-master/hero/hero-drink-master.png"
              srcSet="./src/img/drink-master/hero/hero-drink-master@2x.png"
              alt="cocktail"
              loading="lazy"/>
          </picture>
          <TitleRigth>4</TitleRigth>
        
        </ErrorContainer>
    </Container>


  );
};


export default NotFoundPage;
