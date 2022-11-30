import React, { useMemo } from "react";
import { useTable } from 'react-table';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Columns } from "../Data/Columns";
import "./Table.css";

const Data = [
  {
    CollegeId: "171432",
    CollegeName: "IIT Madras",
    OnBoardedDate: "11.2.2020",
    City: "Chennai",
    Region: "South",
    Ranking: "1",
    Affilation: "UGC",
    Streams: "B.Tech",
    Specialization: "IT,CSE",
    NoOfStudents: "1200",
    Empanelled: "Y",
    Contact: "9988776655",
  },
  {
    CollegeId: "171432",
    CollegeName: "IIT Madras",
    OnBoardedDate: "20.1.2021",
    City: "KOVAI",
    Region: "South",
    Ranking: "1",
    Affilation: "UGC",
    Streams: "B.E",
    Specialization: "ECE,EEE",
    NoOfStudents: "1122",
    Empanelled: "N",
    Contact: "9988776655",
  },
  {
    CollegeId: "171432",
    CollegeName: "IIT Madras",
    OnBoardedDate: "12.2.2022",
    City: "Bengluru",
    Region: "South",
    Ranking: "1",
    Affilation: "UGC",
    Streams: "B.Tech",
    Specialization: "CS,GENERAL",
    NoOfStudents: "1543",
    Empanelled: "Y",
    Contact: "9988776655",
  },
  {
    CollegeId: "171432",
    CollegeName: "IIT Madras",
    OnBoardedDate: "20.11.2020",
    City: "Mumbai",
    Region: "NORTH",
    Ranking: "1",
    Affilation: "UGC",
    Streams: "M.COM",
    Specialization: "CS",
    NoOfStudents: "1764",
    Empanelled: "Y",
    Contact: "9988776655",
  },
  {
    CollegeId: "171432",
    CollegeName: "IIT Madras",
    OnBoardedDate: "15.12.2020",
    City: "Kochi",
    Region: "South",
    Ranking: "1",
    Affilation: "UGC",
    Streams: "B.PHARM",
    Specialization: "",
    NoOfStudents: "1233",
    Empanelled: "Y",
    Contact: "9988776655",
  },
];

const Reports = () => {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => Data, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Reports;
