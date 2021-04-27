import React, { useState } from "react";
import { FaSortAmountUpAlt, FaSortAmountDown } from "react-icons/fa";
import DropdownPage from "../drop-down";
import {
  Container,
  TableRow,
  TableHead,
  TableCell,
  Header,
  SearchBox,
  Pagination,
  Page,
} from "./styled";

const Datatable = () => {
  const dataset = [
    {
      number: 1,
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: "5421",
      amount: 320.8,
      date: "2020/04/25",
    },
    {
      number: 2,
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      age: "1562",
      amount: 86.0,
      date: "2021/01/12",
    },
    {
      number: 3,
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: "8422",
      amount: 170.75,
      date: "2019/07/25",
    },
    {
      number: 4,
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      age: "6224",
      amount: 433.06,
      date: "2021/03/15",
    },
    {
      number: 5,
      name: "Airi Satou",
      position: "Accountant",
      office: "Tokyo",
      age: "5407",
      amount: 162.7,
      date: "2020/11/28",
    },
    {
      number: 6,
      name: "Brielle Williamson",
      position: "Integration Specialist",
      office: "New York",
      age: "4804",
      amount: 372.0,
      date: "2020/12/02",
    },
    {
      number: 7,
      name: "Herrod Chandler",
      position: "Sales Assistant",
      office: "San Francisco",
      age: "9608",
      amount: 137.5,
      date: "2020/08/06",
    },
    {
      number: 8,
      name: "Rhona Davidson",
      position: "Integration Specialist",
      office: "Tokyo",
      age: "6200",
      amount: 327.9,
      date: "2020/10/14",
    },
    {
      number: 9,
      name: "Colleen Hurst",
      position: "Javascript Developer",
      office: "San Francisco",
      age: "2360",
      amount: 205.5,
      date: "2020/09/15",
    },
    {
      number: 10,
      name: "Sonya Frost",
      position: "Software Engineer",
      office: "Edinburgh",
      age: "1667",
      amount: 103.6,
      date: "2020/12/13",
    },
    {
      number: 11,
      name: "Jena Gaines",
      position: "Office Manager",
      office: "London",
      age: "3814",
      amount: 215.2,
      date: "2020/12/19",
    },
    {
      number: 12,
      name: "Quinn Flynn",
      position: "Support Lead",
      office: "Edinburgh",
      age: "9497",
      amount: 425.2,
      date: "2020/03/03",
    },
    {
      number: 13,
      name: "Charde Marshall",
      position: "Regional Director",
      office: "San Francisco",
      age: "6741",
      amount: 225.2,
      date: "2020/10/16",
    },
    {
      number: 14,
      name: "Haley Kennedy",
      position: "Senior Marketing Designer",
      office: "London",
      age: "3597",
      amount: 309.2,
      date: "2020/12/18",
    },
    {
      number: 15,
      name: "Tatyana Fitzpatrick",
      position: "Regional Director",
      office: "London",
      age: "1965",
      amount: 200.0,
      date: "2020/03/17",
    },
    {
      number: 16,
      name: "Michael Silva",
      position: "Marketing Designer",
      office: "London",
      age: "1581",
      amount: 350.8,
      date: "2020/11/27",
    },
    {
      number: 17,
      name: "Paul Byrd",
      position: "Chief Financial Officer (CFO)",
      office: "New York",
      age: "3059",
      amount: 410.8,
      date: "2020/06/09",
    },
    {
      number: 18,
      name: "Gloria Little",
      position: "Systems Administrator",
      office: "New York",
      age: "1721",
      amount: 318.8,
      date: "2020/04/10",
    },
    {
      number: 19,
      name: "Bradley Greer",
      position: "Software Engineer",
      office: "London",
      age: "2558",
      amount: 231.4,
      date: "2020/10/13",
    },
    {
      number: 20,
      name: "Dai Rios",
      position: "Personnel Lead",
      office: "Edinburgh",
      age: "2290",
      amount: 467.3,
      date: "2020/09/26",
    },
  ];

  const [sort, setSort] = useState("number");
  const [sorted, setSorted] = useState(dataset);
  const [search, setSearch] = useState("");
  return (
    <Container>
      <Header>
        <span>Show entries:</span>
        <DropdownPage
          options={[
            {
              label: "10",
              value: `10`,
            },
            {
              label: "25",
              value: `25`,
            },
            {
              label: "50",
              value: `50`,
            },
            {
              label: "100",
              value: `100`,
            },
            {
              label: "All",
              value: `All`,
            },
          ]}
        />
        <SearchBox>
          <span>Search:</span>
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </SearchBox>
      </Header>
      <table
        style={{
          width: "100%",
          boxSizing: "border-box",
          textAlign: "left",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <TableRow>
            <TableHead
              className={"Sorting"}
              onClick={() => {
                const m = sort === "number" ? -1 : 1;
                const t = dataset.slice().sort((a, b) => {
                  //console.log(a, b);
                  if (a.number > b.number) {
                    return 1 * m;
                  }
                  if (a.number === b.number) {
                    return 0;
                  }
                  return -1 * m;
                });
                //console.log(t);
                setSorted(t);
                const newSort = sort === "number" ? "numberInvert" : "number";
                setSort(newSort);
              }}
            >
              #{sort === "number" && <FaSortAmountUpAlt />}
              {sort === "numberInvert" && <FaSortAmountDown />}
            </TableHead>
            <TableHead
              className={"Name"}
              onClick={() => {
                const m = sort === "name" ? -1 : 1;
                const t = dataset.slice().sort((a, b) => {
                  //console.log(a, b);
                  if (a.name > b.name) {
                    return 1 * m;
                  }
                  if (a.name === b.name) {
                    return 0;
                  }
                  return -1 * m;
                });
                //console.log(t);
                setSorted(t);
                const newSort = sort === "name" ? "nameInvert" : "name";
                setSort(newSort);
              }}
            >
              Name
              {sort === "name" && <FaSortAmountUpAlt />}
              {sort === "nameInvert" && <FaSortAmountDown />}
            </TableHead>
            <TableHead
              className={"Position"}
              onClick={() => {
                const m = sort === "position" ? -1 : 1;
                const t = dataset.slice().sort((a, b) => {
                  //console.log(a, b);
                  if (a.position > b.position) {
                    return 1 * m;
                  }
                  if (a.position === b.position) {
                    return 0;
                  }
                  return -1 * m;
                });
                //console.log(t);
                setSorted(t);
                const newSort =
                  sort === "position" ? "positionInvert" : "position";
                setSort(newSort);
              }}
            >
              Position
              {sort === "position" && <FaSortAmountUpAlt />}
              {sort === "positionInvert" && <FaSortAmountDown />}
            </TableHead>
            <TableHead
              className={"Office"}
              onClick={() => {
                const m = sort === "office" ? -1 : 1;
                const t = dataset.slice().sort((a, b) => {
                  //console.log(a, b);
                  if (a.office > b.office) {
                    return 1 * m;
                  }
                  if (a.office === b.office) {
                    return 0;
                  }
                  return -1 * m;
                });
                //console.log(t);
                setSorted(t);
                const newSort = sort === "office" ? "officeInvert" : "office";
                setSort(newSort);
              }}
            >
              Office
              {sort === "office" && <FaSortAmountUpAlt />}
              {sort === "officeInvert" && <FaSortAmountDown />}
            </TableHead>
            <TableHead
              className={"Age"}
              onClick={() => {
                const m = sort === "age" ? -1 : 1;
                const t = dataset.slice().sort((a, b) => {
                  //console.log(a, b);
                  if (a.age > b.age) {
                    return 1 * m;
                  }
                  if (a.age === b.age) {
                    return 0;
                  }
                  return -1 * m;
                });
                //console.log(t);
                setSorted(t);
                const newSort = sort === "age" ? "ageInvert" : "age";
                setSort(newSort);
              }}
            >
              Age
              {sort === "age" && <FaSortAmountUpAlt />}
              {sort === "ageInvert" && <FaSortAmountDown />}
            </TableHead>
            <TableHead
              className={"Amount"}
              onClick={() => {
                const m = sort === "amount" ? -1 : 1;
                const t = dataset.slice().sort((a, b) => {
                  //console.log(a, b);
                  if (a.amount > b.amount) {
                    return 1 * m;
                  }
                  if (a.amount === b.amount) {
                    return 0;
                  }
                  return -1 * m;
                });
                //console.log(t);
                setSorted(t);
                const newSort = sort === "amount" ? "amountInvert" : "amount";
                setSort(newSort);
              }}
            >
              Amount
              {sort === "amount" && <FaSortAmountUpAlt />}
              {sort === "amountInvert" && <FaSortAmountDown />}
            </TableHead>
            <TableHead
              className={"Date"}
              onClick={() => {
                const m = sort === "date" ? -1 : 1;
                const t = dataset.slice().sort((a, b) => {
                  //console.log(a, b);
                  if (a.date > b.date) {
                    return 1 * m;
                  }
                  if (a.date === b.date) {
                    return 0;
                  }
                  return -1 * m;
                });
                //console.log(t);
                setSorted(t);
                const newSort = sort === "date" ? "dateInvert" : "date";
                setSort(newSort);
              }}
            >
              Start Date
              {sort === "date" && <FaSortAmountUpAlt />}
              {sort === "dateInvert" && <FaSortAmountDown />}
            </TableHead>
          </TableRow>
        </thead>
        <tbody>
          {sorted
            .filter((data) => {
              return (
                search === "" ||
                data.name
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase()) ||
                data.position
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase()) ||
                data.office
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
              );
            })
            .map((data) => {
              return <Data {...data} />;
            })}
        </tbody>
      </table>
      <Pagination>
        <Page>10</Page>
        <Page>25</Page>
        <Page>50</Page>
        <Page>100</Page>
      </Pagination>
    </Container>
  );
};

const Data = (props) => {
  const { number, name, position, office, age, amount, date } = props;
  return (
    <TableRow>
      <TableCell>{number}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{position}</TableCell>
      <TableCell>{office}</TableCell>
      <TableCell>{age}</TableCell>
      <TableCell>${amount}</TableCell>
      <TableCell>{date}</TableCell>
    </TableRow>
  );
};

export default Datatable;
