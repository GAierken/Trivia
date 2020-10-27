import Problems from './Apprentice_TandemFor400_Data.json'


function App() {
  console.log(Problems)
  return (
    <div >
      {
        Problems.map((pro) => {
        return <div>{pro.question}</div>
        })
      }
    </div>
  );
}

export default App;
