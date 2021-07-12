import logo from './logo.svg';
import Expenses from './components/Expenses';

function App() {
  const expenses= [
    {
      id:'e1',
      title:'Toyota Innova Crysta',
      amount:16.52,
      date:new Date(2021,6,11)
    },
    {
      id:'e2',
     title:'Maruti Wagon R',
     amount:4.80,
     date:new Date(2021,2,12)
    },
    {
      id:'e3',
     title:'Tata Tiago',
     amount:4.99,
     date:new Date(2021,4,5)
    },
    {
      id:'e4',
     title:'Hyundai Alcazar',
     amount:16.30,
     date:new Date(2021,1,21)
    }
  ];
  return (
    <div>
      <h2>Let's Get Started</h2>
        <Expenses items={expenses}/>
        </div>
  );
}

export default App;
