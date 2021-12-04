import "./protofolio.scss";
import PortofolioList from "../Protofolio list/PortofolioList";
import { useState, useEffect } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../data";

export default function Protofolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "WebApp",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },

    {
      id: "design",
      title: "Design",
    },

    {
      id: "content",
      title: "Content",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="protofolio" id="protofolio">
      <h1>Portofolio</h1>
      <ul>
        {list.map((item) => (
          <PortofolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="Banking App"></img>
            <h1>{d.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
