import { Link } from "react-router-dom"
import { API } from "../config/Api";
import React, {  useState,useEffect } from 'react';

 const Datafilm = (props)=> {

    const [film,setFilm] = useState([])
    const obj = Object.values(props.gettv)
    const object = Object.values(props.gettv)
    console.log(obj)

const getFilm = async () =>{
    try{
        const response = await API("/CariFilm")
        setFilm(response.data)
        console.log(response)

    }catch(error){
        console.log(error)
    }
}
useEffect(() => {
    getFilm()
  }, [])

    const Tvlur =()=>{
        return film.slice(0,5).map((movie)=>{
            return (
                <Link className="text-decoration-none" to={`/Detail/${movie.id}`}>
                <div className="card bg-black">
                    <img src={movie.thumbnailFilm} className=''/>
                    <h4 className='text-light pt-2'>{movie.title}</h4>
                    <p className='text-light pt-2'>{movie.year}</p>
                </div>
                </Link>
            )
        })
    }
    const Movieslur = ()=>{
        return film.slice(6,12).map((tv)=>{
            return (
                <Link className="text-decoration-none" to={`/Detail/${tv.id +6}`}>
                <div className="card bg-black">
                    <img src={tv.thumbnailFilm} className=''/>
                    <h4 className='text-light pt-2'>{tv.title}</h4>
                    <p className='text-light pt-2'>{tv.year}</p>
                </div>
               </Link>
            )
        })
    }
    return(
        <div className='wrap bg-black'>
            <h1 className='fs-4 text-light ms-4'>TV Series</h1>  
                <div className="global d-flex justify-content-evenly rounded">
                    <Tvlur/>
                </div>
                <div className="global d-flex justify-content-evenly rounded">
                    <Movieslur/>
                </div>
        </div>
                    
    )
 }

 
 

    
    
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


export default Datafilm