import './App.css';
import Products from './component/Products/Products';
import Ques from './component/Ques/Ques';


function App() {
  return (
    <div className="App">
      <h3 className='bg-primary text-white rounded px-4 mx-4'>My Programming Routine</h3>
      <h4 className='bg-primary text-white rounded px-2 mx-4'>Select The Shedule</h4>
      <Products></Products>
      <Ques></Ques>

    </div>
  );
}

export default App;
