import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams } from "react-router-dom";

const IndividualLot = () => {

    let params = useParams();

    const [lot, setLot] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
  
      fetch(`api/lot/${params.id}`)
        .then(response => response.json())
        .then(data => {
          setLot(data);
          setLoading(false);
        })
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    const myFunction = () => {
      console.log(lot);
    }

    return (
        <div className="container">
            <div className="row justify-content-center mt-4">
                <div className="col-4">
                    <h1 className="text-center">Viewing {lot.name}</h1>
                </div>
            </div>

            <div className="row justify-content-center mt-4">
                <div className="col-4">
                    <h2 className="text-center">Cars on the lot</h2>
                </div>
            </div>

            <div className="row justify-content-center mt-4">
                {lot.cars?.map(car => 
                    <div className="col-4">
                        <div className="card" key={car.id}>
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    {car.make} {car.model}
                                </h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">ID: {car.id}</li>
                                    <li className="list-group-item">Year: {car.year}</li>
                                    <li className="list-group-item">Mileage: {car.mileage}</li>
                                </ul>
                                <img src={car.image} className="card-img-bottom" />
                            </div>
                        </div>
                    </div>
                    )}

            </div>
            
            <div className="row justify-content-center mt-5">
                <div className="col-6 border">
                <form className="p-4">
                    <div>
                        <h3 className="text-center">Enter a new vehicle</h3>
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" for="make">Make</label>
                        <input type="text" id="make" className="form-control" />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" for="model">Model</label>
                        <input type="text" id="model" className="form-control" />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" for="year">Year</label>
                        <input type="text" id="year" className="form-control" />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" for="mileage">Mileage</label>
                        <input type="text" id="mileage" className="form-control" />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" for="image">Image URL</label>
                        <input type="text" id="image" className="form-control" />
                    </div>

                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary">Submit Vehicle</button>
                    </div>

                </form>
                </div>
            </div>

            <div className="row justify-content-center mt-4">
                <button className="btn btn-primary" onClick={myFunction}>ButtonMan</button>
            </div>
        </div>
    )
};

export default IndividualLot;