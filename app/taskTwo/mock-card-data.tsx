import { FaPlay } from "react-icons/fa";
import { GiPieChart } from "react-icons/gi";

export interface CardResults {
  image: string;
  heading: string;
  cardLinkText: string;
  buttonText: string;
  readText: string;
  icon: JSX.Element;
}

export const mockCardData: CardResults[] = [
  {
    image: "../assets/card-image-1.png",
    heading: "Oracle Virtual Lap in Monza",
    cardLinkText:
      "https://www.redbull.com/gb-en/videos/premier-padel-2024-rotterdam-p1-highlights",
    buttonText: "Virtual Lap",
    readText: "6 min read",
    icon: <FaPlay className="text-white text-[15px]" />,
  },
  {
    image: "../assets/card-image-2.png",
    heading: "Oracle Strategy Guide",
    cardLinkText:
      "https://www.redbull.com/gb-en/videos/red-bull-rampage-2023-top-3-runs",
    buttonText: "Oracle Strategy Guide",
    readText: "4 min read",

    icon: <FaPlay className="text-white text-[15px]" />,
  },
  {
    image: "../assets/card-image-3.png",
    heading: "Oracle Cloud Telementry Data Checo",
    cardLinkText:
      "https://www.redbull.com/gb-en/trailer-videos/yamnuska-the-ragged-edge",
    buttonText: "Data",
    readText: "3 min read",

    icon: <GiPieChart className="text-white text-[15px]" />,
  },
];
