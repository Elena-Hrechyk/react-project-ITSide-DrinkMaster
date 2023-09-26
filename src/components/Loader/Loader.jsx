import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#F3F3F3"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        marginTop: '20px',
        marginBottom: '20px',
        justifyContent: 'center',
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};
