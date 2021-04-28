import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  span {
    margin-right: 10px;
    font-size: 14px;
    color: #333333ff;
  }
`;
export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  span {
    margin-right: 10px;
    font-size: 14px;
    color: #333333ff;
  }
  input {
    box-sizing: border-box;
    height: 30px;
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px;
    border: 1px solid #ccc;
    outline: none;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    :focus {
      border-color: #66afe9;
      box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%),
        0 0 8px rgb(102 175 233 / 60%);
    }
  }
`;
export const TableRow = styled.tr`
  background-color: #fff;
  border: 1px solid #ddd;
  :nth-of-type(odd) {
    background-color: #f9f9f9;
`;
export const TableHead = styled.th`
  background: #337ab7;
  color: white;
  user-select: none;
  border: 1px solid #ddd;
  &.Sorting {
    width: 45px;
    padding: 5px;
    cursor: pointer;
    svg {
      opacity: 50%;
      width: var(--size);
      height: var(--size);
      --size: 14px;
      margin-left: 20px;
    }
  }
  &.Name {
    width: 140px;
    padding: 5px;
    cursor: pointer;
    svg {
      opacity: 50%;
      width: var(--size);
      height: var(--size);
      --size: 14px;
      margin-left: 80px;
    }
  }
  &.Position {
    width: 195px;
    padding: 5px;
    cursor: pointer;
    svg {
      opacity: 50%;
      width: var(--size);
      height: var(--size);
      --size: 14px;
      margin-left: 120px;
    }
  }
  &.Office {
    width: 120px;
    padding: 5px;
    cursor: pointer;
    svg {
      opacity: 50%;
      width: var(--size);
      height: var(--size);
      --size: 14px;
      margin-left: 60px;
    }
  }
  &.Age {
    width: 85px;
    padding: 5px;
    cursor: pointer;
    svg {
      opacity: 50%;
      width: var(--size);
      height: var(--size);
      --size: 14px;
      margin-left: 40px;
    }
  }
  &.Amount {
    width: 116px;
    padding: 5px;
    cursor: pointer;
    svg {
      opacity: 50%;
      width: var(--size);
      height: var(--size);
      --size: 14px;
      margin-left: 40px;
    }
  }
  &.Date {
    width: 117px;
    padding: 5px;
    cursor: pointer;
    svg {
      opacity: 50%;
      width: var(--size);
      height: var(--size);
      --size: 14px;
      margin-left: 25px;
    }
  }
`;
export const TableCell = styled.td`
  padding: 5px;
  font-size: 14px;
  border-right: 1px solid #ddd;
`;
export const Pagination = styled.div`
  display: flex;
  width: 168px;
  margin-left: auto;
  margin-top: 10px;
`;
export const Page = styled.button`
  display: flex;
  border: 1px solid #ddd;
  background-color: #fff;
  color: #337ab7;
  cursor: pointer;
  margin-left: -1px;
  padding: 6px 12px;
  :hover {
    color: #23527c;
    background-color: #eee;
    border-color: #ddd;
  }
`;
