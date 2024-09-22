"use client";

import Image from "next/image";
import Api, { Driver } from "./FetchingAPi/Api";
import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/table";
import { Spinner } from "@nextui-org/react";
export default function Home() {
  const [data, setData] = useState<Driver[]>([]);

  useEffect(() => {
    fetchApi();
  }, []);
  const fetchApi = async () => {
    const adiData = await Api();
    setData(adiData);
  };

  const columns = [
    {
      key: "position",
      label: "Position",
    },
    {
      key: "driveName",
      label: "Driver Name",
    },
    {
      key: "constructorName",
      label: "Constructor Name",
    },
    {
      key: "pointsTotal",
      label: "Points Total",
    },
  ];
  const rows = data.map((item, index) => {
    return {
      key: item.driver_uuid,
      position: index + 1,
      driveName: `${item.last_name}`,
      constructorName: item.season_team_name,
      pointsTotal: item.season_points,
    };
  });
  return (
    <div className="grid  items-center justify-items-center min-h-screen p-5 pb-20 gap-16 sm:p-10 ">
      <main
        className={`flex flex-col gap-8 row-start-2 items-center sm:items-start   text-foreground font`}
      >
        <div className="flex gap-4 items-center l  flex-col sm:flex-col xs:flex-row">
          <h1 className="text-5xl text-redbullYellow self-start py-5 font-bold">
            Driver Standings
          </h1>
          <Table
            isStriped
            aria-label="Example static collection table "
            className="dark w-[80vw] items-center"
          >
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn
                  key={column.key}
                  className="bg-opacity-70 bg-redbullRed text-white font-black text-lg pl-2"
                >
                  {column.label}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody
              items={rows}
              loadingContent={<Spinner />}
              loadingState={!data ? "loading" : "idle"}
              
            >
              {(item) => (
                <TableRow
                  key={item.key}
                  className=" text-redbullYellow hover:bg-redbullGrey transition-colors duration-200"
                >
                  {(columnKey) => (
                    <TableCell className="p-2 text-redbullYellow  ">
                      {getKeyValue(item, columnKey)}
                    </TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <h3>Developed by Shashank</h3>
      </footer>
    </div>
  );
}
