// 내가 한거....
import './App.css';
import BookHead from './components/BookHead';
import BookList from './components/BookList';
import BookTemplate from './components/BookTemplate';

function App() {
  return (
      <BookTemplate>
        <BookHead>
          <BookList/>
        </BookHead>
      </BookTemplate>
  );
}

export default App;
