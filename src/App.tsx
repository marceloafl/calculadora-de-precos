import Input from 'components/Input';

function App() {
  return (
    <>
      <Input
        type='text'
        name='Name'
        id='Name'
        placeholder='Digite aqui'
        disabled={false}
      />
    </>
  );
}

export default App;
