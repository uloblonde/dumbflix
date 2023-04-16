
import { useParams } from "react-router-dom";
import React from "react";
import ReactPlayer from "react-player";

function Moviesdetail() {
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
      id:11,
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
  const datas = dataDetail.find((item) => item.id === parseInt(id));

  console.log(id);

  return (
    <div className="position-relative ">
      <div style={{ paddingLeft: "350px", backgroundColor:"rgb(30, 30, 30)" }}>
        <ReactPlayer className="z-2" url={datas.image} />
      </div>
      <div className="bg-black h-100 pt-5 pb-5">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="d-flex" style={{ height: "210px" }}>
              <img src={require(`../img/card/${datas.card}.png`)} />
              <div className="ms-5 w-50">
                <h2 className="text-light">{datas.title}</h2>
                <div className="d-flex pb-2 align-items-center">
                  <p className="pmain text-light pt-3">{datas.year}</p>
                  <button type="button" class=" pmain btn btn-outline-light ms-4">
                    {datas.btn}
                  </button>
                </div>
                <p style={{ textAlign: "justify", color: "white", fontSize: "11pt" }}>{datas.parap}</p>
              </div>
            </div>
            <div style={{ height: "210px" }}>
              <div id="carouselExampleControlsNoTouching" className="carousel slide w-100" data-bs-touch="false" data-bs-interval="false" style={{ height: "210px" }}>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <ReactPlayer url={datas.carrs} class="d-block" alt="..." width={370} height={250} />
                  </div>
                  458422456
                  <div class="carousel-item">
                    <ReactPlayer url={datas.carrs1} class="d-block" alt="..." width={370} height={250} />
                  </div>
                  <div class="carousel-item ">
                    <ReactPlayer url={datas.carrs} class="d-block" alt="..." width={370} height={250}  />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Moviesdetail;
