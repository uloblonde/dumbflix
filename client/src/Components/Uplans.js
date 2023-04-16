export default function Uplans() {
  return (
    <>
      <div style={{ height: "600px" }} className="bg-black text-center">
        <div style={{paddingTop:"80px"}}>
          <h2 className="text-light">Premium</h2>
          <div className="d-flex justify-content-center text-light align-items-center pt-5">
            <p  style={{margin:"0"}}>Bayar sekarang dan nikmati streaming film-film yang kekinian dari</p>
            <h6 className="fw-bold" style={{ color: "red" , margin:"0"}}>
              DUMBFLIX
            </h6>
          </div>
          <div style={{height:"25px"}} className="d-flex justify-content-center align-items-center pt-4 text-light pb-4">
            <h6  className="fw-bold" style={{ color: "red",margin:"0" }}>
              DUMBFLIX
            </h6>
            <p style={{margin:"0"}}>0981312323</p>
          </div>
          <input
                id='phone'
                className='border border-light bg-secondary border-3 text-light ms-2 w-25 rounded p-2'
                type="text"
                placeholder="Input your account number"
                autoFocus
              />
          <div className="d-flex flex-column align-items-center">
          <button type="submit" className="w-25 btn btn-light text-center ms-2 mt-2 fw-bold border-0 bg-white text-danger p-2 ">
            Attach proof of transfer
          </button>
          <button type="submit" className="w-25 btn text-center ms-2 fw-bold border-0  text-light p-2" style={{backgroundColor:"red" ,marginTop:"6Input your account number0px"}}>
            Kirim
          </button>
          </div>
        </div>
      </div>
    </>
  );
}
