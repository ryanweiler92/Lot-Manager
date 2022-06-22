import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

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


  return (
    <div className="App">
      {lots.map(lot => 
        <div key={lot.id}>
          {lot.name}
          </div>
          )}

    </div>
  );
}

export default App;
