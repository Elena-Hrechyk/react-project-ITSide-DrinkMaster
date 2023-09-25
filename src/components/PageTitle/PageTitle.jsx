
import { Title } from "./PageTitle.styled";

const PageTitle = ({ title }) => {
  return (
    <>
      <Title>{title}</Title>
    </>
  );
};

export default PageTitle;

// Title.propTypes = {
//   title: PropTypes.string.isRequired,
// };
