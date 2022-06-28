import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

const Home = () => {

    const [lots, setLots] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
  
      fetch('api/lots')
        .then(response => response.json())
        .then(data => {
          setLots(data);
          setLoading(false);
        })
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    const myFunction = () => {
      console.log(lots);
    }

    return (
        <div className="container-fluid mt-4">

            <div className="row align-items-center justify-content-center">
                <div className="col-4">
                    <h1 className="text-center">My Lots</h1>
                </div>
            </div>

            <div className="row justify-content-center mt-4">
            {lots.map(lot => 
            <div className="col-4">
                <div className="card" key={lot.id}>
                    <div className="card-body">
                        <h5 className="card-title text-center">{lot.name}</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Address: {lot.address}</li>
                            <li className="list-group-item">City: {lot.city}</li>
                            <li className="list-group-item">State: {lot.state}</li>
                            <li className="list-group-item">ZIP: {lot.postalCode}</li>
                        </ul>
                        <div className="d-flex justify-content-center align-items-center">
                            <Link className="btn btn-primary" as={Link} to={`/${lot.id}`} >View Lot</Link>
                            <Link className="btn btn-danger" as={Link} to={"/lot/" + lot.id}>Edit Lot</Link>
                        </div>
                    </div>
                </div>
            </div>
                    )}
          </div>
          <div>
          <button className="btn btn-primary" onClick={myFunction}>ButtonMan</button>
          </div>
      </div>
    )
};

export default Home;