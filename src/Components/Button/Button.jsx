import "./index.css";

const Button = ({ btnTextContent, onClick, disabled }) => {
  return (
    <button className="Button" onClick={onClick} disabled={disabled}>
      {btnTextContent}
    </button>
  );
};

export default Button;
