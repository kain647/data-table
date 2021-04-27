import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";

export const DropdownButton = styled.div`
  display: flex;
  width: 75px;
  height: 30px;
  opacity: ${({ visible = true }) => (visible ? 1 : 0)};
  background-color: #ffffffe6;
  box-sizing: border-box;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  border: 1px solid #ced6e0;
  color: #1a3b5d;
  padding: 5px 10px;
  p {
    margin: 0;
  }
`;
export const DropdownContainer = styled.div`
  display: flex;
  position: relative;
  width: 75px;
  font-size: 14px;
  //height: 10px;
  align-items: center;
`;
export const DropdownPage = styled.div`
  display: block;
  box-sizing: border-box;
  width: 100%;
  top: 0;
  position: absolute;
  border-radius: 5px;
  border: 1px solid #ced6e0;
  color: #1a3b5d;
  cursor: pointer;
  overflow-y: auto;
  max-height: 200px;
  background-color: #fff;
`;
export const Option = styled.div`
  border-bottom: 1px solid #fff;
  padding: 5px;
  cursor: pointer;
  font-size: 14px;
  :last-child {
    border-bottom: 0;
  }
  :hover {
    background-color: #b1b1b1;
  }
`;

export const MainButton = (props) => {
  const { label, ...rest } = props;
  return (
    <DropdownButton {...rest}>
      <p>{label}</p>
      <FaAngleDown />
    </DropdownButton>
  );
};
