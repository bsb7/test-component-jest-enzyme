import React from 'react';
import './App.css';
import Header from './component/header/index';
import Headline from './component/headline/index';
import './app.scss';

const tempArr =[{
  fName: 'Joe',
  lNam: 'Blogs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true, 
}]



function App() {
  return (
    <div className="App">
      <Header />
      <section className='main'>
        <Headline header='Post' desc="Click the button to render" tempArr={tempArr} />
      </section>
    </div>
  );
}

export default App;
