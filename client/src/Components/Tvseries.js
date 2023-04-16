import { Link } from "react-router-dom"

const Tvseries = (props)=>{
    const objtv = Object.values(props.coba);
    const objtv2 = Object.values(props.cobaa);

    const Tv1 = ()=>{
        return objtv.map((tv)=>{
            return(
                <Link className="text-decoration-none" to={`/Detail/${tv.id}`}>
                <div className="card bg-black">
                    <img src={require(`../img/card/${tv.image}.png`)} className=''/>
                    <h4 className='text-light pt-2'>{tv.nama}</h4>
                    <p className='text-light pt-2'>{tv.tahun}</p>
                </div>
                </Link>
               
            )
        })
    }
    const Tv2 =()=>{
        return objtv2.map((tv2)=>{
            return(
                <Link className="text-decoration-none" to={`/Detail/${tv2.id}`}>
                <div className="card bg-black">
                    <img src={require(`../img/card/${tv2.image}.png`)} className=''/>
                    <h4 className='text-light pt-2'>{tv2.nama}</h4>
                    <p className='text-light pt-2'>{tv2.tahun}</p>
                </div>
                </Link>
            )
        })
    }

    return(
        <div className='wrap bg-black'>
            <h1 className='fs-4 text-light ms-4'>TV Series</h1>  
                <div className="global d-flex justify-content-evenly rounded">
                    <Tv1/>
                </div> 
                <div className="global d-flex justify-content-evenly rounded">
                    <Tv2/>
                </div>
        </div>
    )
}
export default Tvseries