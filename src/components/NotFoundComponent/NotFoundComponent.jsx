import { Image, ErrorMessage, Wrap } from './NotFoundComponent.styled';
import Thumb from '../../img/drink-master/hero/hero-drink-master.png';

const NotFoundComponent = ({error, message}) => {
  return (
    <Wrap>
      <Image src={Thumb}></Image>
      {error ? <ErrorMessage>{error}</ErrorMessage> : <ErrorMessage>{message}</ErrorMessage>}
    </Wrap>
  );
};

export default NotFoundComponent;
