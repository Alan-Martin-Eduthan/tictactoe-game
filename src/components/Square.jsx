const Square = ({ value }) => {
  // here we are destructuring the props that is being passed to the value
  return (
    <button>
      {value}
      {/* <h3>{children}</h3> */}
      {/* <h5>children will be rendered belllow</h5> */}
    </button>
  );
};
export default Square;
