import { FaPlay } from "react-icons/fa";
import { GiPieChart } from "react-icons/gi";

export const mockCardData = [
    {
      image: "../assets/card-image-1.png",
      heading: "Oracle Virtual Lap in Monza",
      cardLinkText:
        "https://www.redbull.com/en-us/news/2022/06/13/oracle-virtual-lap-in-monza",
      buttonText: "Virtual Lap",
      readText: "6 min read",
      icon: <FaPlay className="text-white text-[15px]" />,
    },
    {
      image: "../assets/card-image-2.png",
      heading: "Oracle Strategy Guide",
      cardLinkText:
        "https://www.redbull.com/en-us/news/2022/06/13/oracle-virtual-lap-in-monza",
      buttonText: "Oracle Strategy Guide",
      readText: "4 min read",

      icon: <FaPlay className="text-white text-[15px]" />,
    },
    {
      image: "../assets/card-image-3.png",
      heading: "Oracle Cloud Telementry Data Checo",
      cardLinkText:
        "https://www.redbull.com/en-us/news/2022/06/13/oracle-virtual-lap-in-monza",
      buttonText: "Data",
      readText: "3 min read",

      icon: <GiPieChart className="text-white text-[15px]" />,
    },
  ];