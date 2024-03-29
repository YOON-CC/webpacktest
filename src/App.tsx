import * as React from "react";
import myImage1 from './assets/num1.png'; 
import myImage2 from './assets/num2.png'; 
import anotherOne from './image/another_one.png'; 
import defaultnum from './defaultnum.png'

function App() {
  const [myImage3, setMyImage3] = React.useState(null);

  const handleImageLoad = () => {
    import('./assets/num3.png').then(imageModule => {
      setMyImage3(imageModule.default);
    });
  };

  return (
    <>
      <div>TEST</div>
      <img src={defaultnum} alt="My Image" />
      <img src={anotherOne} alt="My Image" />
      <img src={myImage1} alt="My Image" />
      <img src={myImage2} alt="My Image" />
      {myImage3 && <img src={myImage3} alt="My Image" />}
      <button onClick={handleImageLoad}>Load Image 3</button>
    </>
  );
}

export default App;