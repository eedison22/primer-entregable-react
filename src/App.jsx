import { useState } from 'react';
import data from './assets/data.json';
import Card from './components/Card/Card';
import './App.css';

function App() {
  
  const background = [
    'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/08/15/13/10/galaxy-3608029_960_720.jpg',
    'https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/07/19/04/40/moon-1527501_960_720.jpg',
    'https://cdn.pixabay.com/photo/2011/12/14/12/17/galaxy-11098_960_720.jpg',
    'https://cdn.pixabay.com/photo/2011/12/15/11/37/galaxy-11188_960_720.jpg',
    'https://cdn.pixabay.com/photo/2012/11/28/08/54/milky-way-67504_960_720.jpg',
  ];
  const [imageVisible, setImageVisible] = useState(
    Math.floor(Math.random() * (background.length - 1)),
  );

  const changeImage = () => {
    const newImageVisible = imageVisible + Math.floor(Math.random() * 5)

    if (newImageVisible > background.length -1)
      setImageVisible(Math.floor(Math.random() * (background.length -1)));
    else if (newImageVisible === imageVisible)
      setImageVisible(Math.floor(Math.random() * (background.length - 1)));
    else setImageVisible(newImageVisible);
  };

  const [dataVisible, setDataVisible] = useState(
    Math.floor(Math.random() * (data.length - 1)),
  );

  const changeData = () => {
    const newDataVisible = dataVisible + Math.floor(Math.random() * 5);

    if (newDataVisible > data.length -1)
      setDataVisible(Math.floor(Math.random() * (data.length -1)));
    else if (newDataVisible === dataVisible)
      setDataVisible(Math.floor(Math.random() * (data.length - 1)));
    else setDataVisible(newDataVisible);
  };

  const both = () => {
    changeData();
    changeImage();
  };

  return (
    <>
      <style>
        {`
      body{
        background-image: url(${background[imageVisible]});
        background-repeat: no-repeat;
        background-size: cover;
      `}
      </style>
      <div className="App">
        <h1>CURIOSIDADES DEL ESPACIO</h1>
        <Card framework={data[dataVisible]} changeFramework={both} />
      </div>
    </>
  );
}

export default App;
