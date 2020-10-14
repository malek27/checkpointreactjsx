import React from 'react';
import './App.css';
import natureImage from './image.jpg';
import './style.css';

function App() {
  return (
    <div className="dive"  style={{textAlign:'center'}}>

 <h1 className="title red">Welcome</h1>
<p>Here is a slight taste of our island</p>
 <br></br>

 <img src={natureImage} alt ='image'/>

 <br></br>

 <img src="/imagee.jpg" alt='imagee' />
<br></br>
<p>And a global view from the top</p>
<video className= "video" width="320" height="240" controls>

 <source src="./Sunset.mp4" type="video/mp4" />

</video>

</div>
  );
}

export default App;
