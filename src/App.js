import React, { useState } from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState(null);

  const image1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVaLxWvad1-366yfhCuQfF9H0OvfmDj58VPQ&s';
  const image2 = 'https://cdn.britannica.com/57/183257-050-0BA11B4B/Roger-Federer-2012.jpg';

  return (
    <div className="App">
      <button onClick={() => setImage(image1)}>Show Image 1</button><br />
      <button onClick={() => setImage(image2)}>Show Image 2</button>

      <div className="imgg">
        {image && <img src={image} alt="Displayed" />}
      </div>
    </div>
  );
}

export default App;
