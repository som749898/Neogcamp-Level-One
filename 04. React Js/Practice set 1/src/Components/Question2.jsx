const StyledButton = ({ backgroundColor, color, borderRadius, padding }) => {
  const buttonStyles = {
    backgroundColor: backgroundColor,
    color: color,
    borderRadius: borderRadius,
    padding: padding,
    cursor: 'pointer',
    borderColor: "yellow"
  };

  return (
    <button style={buttonStyles} className="hover:opacity-80">
      Start
    </button>
  );
};

export default StyledButton;
