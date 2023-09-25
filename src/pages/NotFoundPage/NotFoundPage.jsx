import { Container, ErrorContainer, Title } from "./NotFoundPage.styled";

const NotFoundPage = () => {
  return (
    <Container>
      <ErrorContainer>
        <Title>4</Title>
          <picture>
            <img
              src="src/img/drink-master/hero/hero-drink-master.png"
              srcSet="src/img/drink-master/hero/hero-drink-master@2x.png"
              alt="cocktail"
              loading="lazy"/>
          </picture>
         <Title>4</Title>
        </ErrorContainer>
    </Container>


  );
};


export default NotFoundPage;
