

const API_URL = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'

function App() {
  return (
    <div className="container"> 
      <div className='bg-white text-gray-600 p-10 rounded-lg shadow-md'>
        <h2 className='text-2xl'>
          The question
        </h2>
        
      </div>
      <div className='flex flex-wrap mt-4 justify-around'>
        <button className='bg-white text w-2/5 p-4 text-gray-600 font-semibold rounded shadow mb-4'>Answer 1</button>
        <button className='bg-white text w-2/5 p-4 text-gray-600 font-semibold rounded shadow mb-4'>Answer 2</button>
        <button className='bg-white text w-2/5 p-4 text-gray-600 font-semibold rounded shadow'>Answer 3</button>
        <button className='bg-white text w-2/5 p-4 text-gray-600 font-semibold rounded shadow'>Answer 4</button>
      </div>
    </div>
  );
}

export default App;
