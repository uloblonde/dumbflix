import { Link } from "react-router-dom";

const Movieser = (props)=>{
    const objmv = Object.values(props.mvs);
    const objmv2 = Object.values(props.mvss);

    const Mv1 = ()=>{
        return objmv.map((movie)=>{
            return(
                <Link className="text-decoration-none" to={`/Detail/${movie.id}`}>
                <div className="card bg-black">
                    <img src={require(`../img/card/${movie.image}.png`)} className=''/>
                    <h4 className='text-light pt-2'>{movie.nama}</h4>
                    <p className='text-light pt-2'>{movie.tahun}</p>
                </div>
                </Link>
            )
        })
    }
    const Mv2 =()=>{
        return objmv2.map((movie2)=>{
            return(
                <Link className="text-decoration-none" to={`/Detail/${movie2.id}`}>
                <div className="card bg-black">
                    <img src={require(`../img/card/${movie2.image}.png`)} className=''/>
                    <h4 className='text-light pt-2'>{movie2.nama}</h4>
                    <p className='text-light pt-2'>{movie2.tahun}</p>
                </div>
                </Link>
            )
        })
    }

    return(
        <div className='wrap bg-black'>
            <h1 className='fs-4 text-light ms-4'>Movies</h1>  
                <div className="global d-flex justify-content-evenly rounded">
                    <Mv1/>
                </div> 
                <div className="global d-flex justify-content-evenly rounded">
                    <Mv2/>
                </div>
        </div>
    )
}
export default Movieser