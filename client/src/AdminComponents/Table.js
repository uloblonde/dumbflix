export default function Table() {
  return (
    <div className="bg-black" style={{height:"600px"}}>
      <div className="container">
        <h3 className="text-light pt-5" >Incoming Transaction</h3>
        <div className="pt-4">
      <table class="table table-dark table-hover">
        <thead>
          <tr className="text-danger">
            <th scope="col">No</th>
            <th scope="col">Users</th>
            <th scope="col">Bukti Transfer</th>
            <th scope="col">Remaining Active</th>
            <th scope="col">Status User</th>
            <th scope="col">Status Payment</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-active">
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Active</td>
            <td>Pending</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Active</td>
            <td>Pending</td>
            <td>@fat</td>
          </tr>
          <tr className="table-active">
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>Not Active</td>
            <td>Aprove</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Yakin</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>Active</td>
            <td>Aprove</td>
            <td>@twitter</td>
          </tr>
          <tr className="table-active">
            <th scope="row">5</th>
            <td>Sutikno</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>Active</td>
            <td>Aprove</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Drajat</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>Active</td>
            <td>Aprove</td>
            <td>@twitter</td>
          </tr>
          
        </tbody>
      </table>
      </div>
      </div>
    </div>
  );
}
