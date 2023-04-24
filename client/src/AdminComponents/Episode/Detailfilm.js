import { useParams } from "react-router-dom";
import React,{useState,useEffect} from "react";
import ReactPlayer from "react-player";
import { useQuery } from "react-query";
import { API } from "../../config/Api";

function Detafilm() {
  const dataDetail = [
    {
      id: 1,
      image: "https://www.youtube.com/watch?v=r7-M90PNk5E",
      card: "card1",
      title: "Persona 3",
      btn: "TV Series",
      year: "2019",
      parap:
        "It is based on the book series of the same name by Polish writer Andrzej Sapkowski. The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts.",
      carrs: "https://www.youtube.com/watch?v=IrU0QzkhcNk",
      carrs1: "https://www.youtube.com/watch?v=r7-M90PNk5E",
    },
    {
      id: 2,
      image: "https://www.youtube.com/watch?v=KPLWWIOCOOQ",
      card: "card2",
      title: "Game Of Thrones",
      btn: "TV Series",
      year: "2019",
      parap:
        "It is based on the book series of the same name by Polish writer Andrzej Sapkowski. The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts.",
      carrs: "https://www.youtube.com/watch?v=IrU0QzkhcNk",
      carrs1: "https://www.youtube.com/watch?v=r7-M90PNk5E",
    },
    {
      id: 3,
      image: "https://www.youtube.com/watch?v=ndl1W4ltcmg",
      card: "card3",
      title: "The Witcher",
      btn: "TV Series",
      year: "2019",
      parap:
        "It is based on the book series of the same name by Polish writer Andrzej Sapkowski. The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts.",
      carrs: "https://www.youtube.com/watch?v=IrU0QzkhcNk",
      carrs1: "https://www.youtube.com/watch?v=r7-M90PNk5E",
    },
    {
      id: 4,
      image: "https://www.youtube.com/watch?v=_InqQJRqGW4",
      card: "card4",
      title: "Money Heist",
      btn: "TV Series",
      year: "2019",
      parap:
        "It is based on the book series of the same name by Polish writer Andrzej Sapkowski. The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts.",
      carrs: "https://www.youtube.com/watch?v=IrU0QzkhcNk",
      carrs1: "https://www.youtube.com/watch?v=r7-M90PNk5E",
    },
    {
      id: 5,
      image: "https://www.youtube.com/watch?v=OMfApd_JN70",
      card: "card5",
      title: "Touch",
      btn: "TV Series",
      year: "2019",
      parap:
        "It is based on the book series of the same name by Polish writer Andrzej Sapkowski. The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts.",
      carrs: "https://www.youtube.com/watch?v=IrU0QzkhcNk",
      carrs1: "https://www.youtube.com/watch?v=r7-M90PNk5E",
    },
    {
      id: 6,
      image: "https://www.youtube.com/watch?v=_a3dNB2riKE",
      card: "card6",
      title: "Arrow",
      btn: "TV Series",
      year: "2019",
      parap:
        "It is based on the book series of the same name by Polish writer Andrzej Sapkowski. The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts.",
      carrs: "https://www.youtube.com/watch?v=IrU0QzkhcNk",
      carrs1: "https://www.youtube.com/watch?v=r7-M90PNk5E",
    },
    {
      id: 7,
      image: "https://www.youtube.com/watch?v=UaVTIH8mujA",
      card: "card7",
      title: "The God Father",
      btn: "Movies",
      year: "2019",
      parap:
        "It is based on the book series of the same name by Polish writer Andrzej Sapkowski. The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts.",
      carrs: "https://www.youtube.com/watch?v=8Pf8BkFLBRw",
      carrs1: "https://www.youtube.com/watch?v=r7-M90PNk5E",
    },
    {
      id: 8,
      image: "https://www.youtube.com/watch?v=NLOp_6uPccQ",
      card: "card8",
      title: "Batman",
      btn: "Movies",
      year: "2019",
      parap:
        "It is based on the book series of the same name by Polish writer Andrzej Sapkowski. The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts.",
      carrs: "https://www.youtube.com/watch?v=-FW9Sqxb-4o",
      carrs1: "https://www.youtube.com/watch?v=r7-M90PNk5E",
    },
    {
      id: 9,
      image: "https://www.youtube.com/watch?v=oBqqI6NMeaM",
      card: "card9",
      title: "Avanger",
      btn: "Movies",
      year: "2019",
      parap:
        "It is based on the book series of the same name by Polish writer Andrzej Sapkowski. The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts.",
      carrs: "https://www.youtube.com/watch?v=udKE1ksKWDE",
      carrs1: "https://www.youtube.com/watch?v=r7-M90PNk5E",
    },
    {
      id: 10,
      image: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
      card: "card10",
      title: "Joker",
      btn: "Movies",
      year: "2019",
      parap:
        "It is based on the book series of the same name by Polish writer Andrzej Sapkowski. The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts.",
      carrs: "https://www.youtube.com/watch?v=t433PEQGErc",
      carrs1: "https://www.youtube.com/watch?v=r7-M90PNk5E",
    },
    {
      id: 11,
      image: "https://www.youtube.com/watch?v=5xH0HfJHsaY",
      card: "card11",
      title: "Parasite",
      btn: "Movies",
      year: "2019",
      parap:
        "It is based on the book series of the same name by Polish writer Andrzej Sapkowski. The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts.",
      carrs: "https://www.youtube.com/watch?v=SEUXfv87Wpk",
      carrs1: "https://www.youtube.com/watch?v=r7-M90PNk5E",
    },
    {
      id: 12,
      image: "https://www.youtube.com/watch?v=s9APLXM9Ei8",
      card: "card12",
      title: "Chernobyl",
      btn: "Movies",
      year: "2019",
      parap:
        "It is based on the book series of the same name by Polish writer Andrzej Sapkowski. The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts.",
      carrs: "https://www.youtube.com/watch?v=Fy-QAIwV-D0",
      carrs1: "https://www.youtube.com/watch?v=r7-M90PNk5E",
    },
  ];
  const { id } = useParams();
  const [epis,setEpis] = useState([])

  let { data: film } = useQuery("filmDetailChache", async () => {
    const response = await API.get(`/film/${id}`);
    console.log("response :", response.data.data);
    return response.data.data;
  });
  let { data: epi } = useQuery("epiChache", async () => {
    const response = await API.get(`/film/${id}/episode`);
    console.log("console episode: ", response);
    setEpis(response.data.data)
    return response.data.data;
  });

  

  const data = dataDetail.find((item) => item.id === parseInt(id));

  console.log(id);
  

  return (
    <div className="position-relative ">
      <div style={{ paddingLeft: "350px", backgroundColor: "rgb(30, 30, 30)" }}>
      {epi && (
        <ReactPlayer className="z-2" url={epi[0].linkFilm}  />
      )}
      </div>
      <div className="bg-black h-100 pt-5 pb-5">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="d-flex" style={{ height: "210px" }}>
              <img src={film?.thumbnailFilm} />
              <div className="ms-5 w-50">
                <h2 className="text-light">{film?.title}</h2>
                <div className="d-flex pb-2 align-items-center">
                  <p className="pmain text-light pt-3">{film?.year}</p>
                  <button type="button" class=" pmain btn btn-outline-light ms-4">
                    {film?.category.name}
                  </button>
                </div>
                <p style={{ textAlign: "justify", color: "white", fontSize: "11pt" }}>{film?.description}</p>
              </div>
            </div>
            <div style={{ height: "210px" }} className="mb-5">
              <div class="dropdown">
                <a class="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Episode
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  {epis&&epis.map((item,index)=>( 
                    <li>
                    <a key={index} value={item.filmId} class="dropdown-item" href={item.linkFilm}>
                      {item.title}
                    </a>
                  </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detafilm;
