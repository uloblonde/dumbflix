import { Link } from "react-router-dom";
import { API } from "../config/Api";
import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

const Datafilm = (props) => {

  const [cat, setCat] = useState([]);

  const getCategories = async () => {
    try {
      const response = await API.get('/CariFilm')
      setCat(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getCategories()
  }, [])


  return (
    <>
      
      <div className="wrap bg-black">
        
        
        <h2 className="fs-4 text-light ms-4">TV Series</h2>
        <div className="global d-flex justify-content-evenly rounded">
          {cat.slice(0, 6).map((tv) => (
            <Link className="text-decoration-none" to={`/Detail/${tv.id}`}>
              <div className="card bg-black">
                <img src={tv.thumbnailFilm} className="" />
                <h4 className="text-light pt-2">{tv.title}</h4>
                <p className="text-light pt-2">{tv.year}</p>
              </div>
            </Link>
          ))}
        </div>

        <h2 className="fs-4 text-light ms-4">Movies</h2>
        <div className="global d-flex justify-content-evenly rounded">
          {cat.slice(7, 14).map((movie) => (
            <Link className="text-decoration-none" to={`/Detail/${movie.id}`}>
              <div className="card bg-black">
                <img src={movie.thumbnailFilm} className="" />
                <h4 className="text-light pt-2">{movie.title}</h4>
                <p className="text-light pt-2">{movie.year}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

// return(
//     <div className='wrap bg-black'>

//         <h1 className='fs-4 text-light ms-4'>TV Movies</h1>

//         <div className="global d-flex justify-content-evenly rounded">
//             <div className="card bg-black">
//                 <img src={card} className=''/>
//                 <h4 className='text-light pt-2'>The Withcer</h4>
//                 <p className='text-light pt-2'>2019</p>
//             </div>
//             <div className="card bg-black">
//                 <img src={card} className=''/>
//                 <h4 className='text-light pt-2'>The Withcer</h4>
//                 <p className='text-light pt-2'>2019</p>
//             </div>
//             <div className="card bg-black">
//                 <img src={card} className=''/>
//                 <h4 className='text-light pt-2'>The Withcer</h4>
//                 <p className='text-light pt-2'>2019</p>
//             </div>
//             <div className="card bg-black">
//                 <img src={card} className=''/>
//                 <h4 className='text-light pt-2'>The Withcer</h4>
//                 <p className='text-light pt-2'>2019</p>
//             </div>
//             <div className="card bg-black">
//                 <img src={card} className=''/>
//                 <h4 className='text-light pt-2'>The Withcer</h4>
//                 <p className='text-light pt-2'>2019</p>
//             </div>
//             <div className="card bg-black">
//                 <img src={card} className=''/>
//                 <h4 className='text-light pt-2'>The Withcer</h4>
//                 <p className='text-light pt-2'>2019</p>
//             </div>
//         </div>
//         <h1 className='fs-4 text-light ms-4'>Movies</h1>

//         <div className="global d-flex justify-content-evenly rounded">
//             <div className="card bg-black">
//                 <img src={card} className=''/>
//                 <h4 className='text-light pt-2'>The Withcer</h4>
//                 <p className='text-light pt-2'>2019</p>
//             </div>
//             <div className="card bg-black">
//                 <img src={card} className=''/>
//                 <h4 className='text-light pt-2'>The Withcer</h4>
//                 <p className='text-light pt-2'>2019</p>
//             </div>
//             <div className="card bg-black">
//                 <img src={card} className=''/>
//                 <h4 className='text-light pt-2'>The Withcer</h4>
//                 <p className='text-light pt-2'>2019</p>
//             </div>
//             <div className="card bg-black">
//                 <img src={card} className=''/>
//                 <h4 className='text-light pt-2'>The Withcer</h4>
//                 <p className='text-light pt-2'>2019</p>
//             </div>
//             <div className="card bg-black">
//                 <img src={card} className=''/>
//                 <h4 className='text-light pt-2'>The Withcer</h4>
//                 <p className='text-light pt-2'>2019</p>
//             </div>
//             <div className="card bg-black">
//                 <img src={card} className=''/>
//                 <h4 className='text-light pt-2'>The Withcer</h4>
//                 <p className='text-light pt-2'>2019</p>
//             </div>
//         </div>
//     </div>

// )

export default Datafilm;
