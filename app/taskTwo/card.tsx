import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";
import React from "react";
import { CardResults } from "./mock-card-data";


export default function Cards({ results }: { results: CardResults }) {
  return (
    <Link href={results.cardLinkText} target="_blank" className="cursor-pointer">
      <Card
        className="col-span-12 sm:col-span-4 h-[400px] w-[300px]"
        shadow="lg"
        isBlurred
        radius="lg"
      >
        <CardHeader className="absolute z-10 top-5 right-1 flex-col items-end">
          {results.icon}
        </CardHeader>
        <Image
          isBlurred
          removeWrapper
          isZoomed
          alt="Card background"
          className="z-0 w-full h-full object-cover scale-105"
          src={results.image}
        />
        <CardFooter className="absolute bg-gradient-to-t from-[#00162b]/100 to-[#00162b]/0 bottom-0 z-10 p-[25px]">
          <div className="flex flex-grow flex-col gap-4 items-stretch flex-1">
            <div className="flex items-center  ">
              <h1 className="text-medium font-bold text-white font-['Arial']  ">
                {results.heading}
              </h1>
            </div>
            <div className=" flex items-center justify-between gap-2">
              <Button
                className=" text-white bg-slate-500/40 text-[10px]  h-[20px]   "
                variant="flat"
                color="default"
                radius="sm"
                size="sm"
              >
                {results.buttonText}
              </Button>
              <p className="text-tiny text-white/60 ">{results.readText}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
