import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import MyJumbotron from './components/MyJumbotron';
import SingleBook from './components/SingleBook';
import BookList from './components/BookList';
import horror from './data/horror.json';
import CommentArea from '.components/CommentArea';



function App() {
  return ( <>
    
      
    <MyNav/>

    <MyFooter/>
    <MyJumbotron/>
    <SingleBook book = {horror[0]}/>
    <BookList books={horror} />


  
  </> );
}

export default App;
