import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const LotEdit = () => {

    const initialFormState = {
        name: '',
        address: '',
        city: '',
        state: '',
        postalCode: ''
    };

    const [lot, setLot] = useState(initialFormState);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id !== 'new') {
          fetch(`/api/lot/${id}`)
            .then(response => response.json())
            .then(data => setLot(data));
        }
      }, [id, setLot]);

      const title = <h2>{lot.id ? 'Edit Lot' : 'Add Group'}</h2>;

    const handleChange = (event) => {
        const { name, value } = event.target

        setLot({ ...lot, [name]: value })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        await fetch('/api/lot' + (lot.id ? '/' + lot.id : ''), {
            method: (lot.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(lot)
        });
        setLot(initialFormState);
        navigate('/')
    }

    const myFunction = () => {
        console.log(lot)
    }

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-6 border">
                <form className="p-4">
                    <div>
                        <h3 className="text-center">{title}</h3>
                    </div>
                    
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input type="text" id="name" className="form-control" name="name" value={lot.name || ""} onChange={(event) => handleChange(event)} autoComplete="address-level1"/>
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="address">Address</label>
                        <input type="text" id="address" className="form-control" name="address" value={lot.address || ""} onChange={(event) => handleChange(event)}/>
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="city">City</label>
                        <input type="text" id="city" className="form-control" value={lot.city || ""} name="city" onChange={(event) => handleChange(event)}/>
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="state">State</label>
                        <input type="text" id="state" className="form-control" value={lot.state || ""} name="state" onChange={(event) => handleChange(event)}/>
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="postalCode">ZIP</label>
                        <input type="text" id="zip" className="form-control" value={lot.postalCode || ""} name="postalCode" onChange={(event) => handleChange(event)}/>
                    </div>

                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Save</button>
                    </div>

                </form>
                </div>
            </div>
            <button className="btn btn-success" onClick={myFunction}>ButtonMan</button>
        </div>
    );

};

export default LotEdit;