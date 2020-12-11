import './App.css';
import UserForm from './UserForm';
import UserFormRefs from './UserFormRefs';
import UserFormValid from './UserFormValid';
import WriterList from './WritersList';

function App() {
  let writers = [{name: 'Name1', surname: 'surname1'},{name: 'Name2', surname: 'surname2'},{name: 'Name3', surname: 'surname3'}]
  return (
    <div className="App">
      <WriterList data={writers} ></WriterList>
      {/* <UserForm></UserForm> */}
      <UserFormRefs></UserFormRefs>
      <hr></hr>
      <UserFormValid></UserFormValid>
    </div>
    
  );
}

export default App;
