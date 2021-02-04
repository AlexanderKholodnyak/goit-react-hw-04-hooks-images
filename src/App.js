// import { Component } from 'react';
import { useState } from 'react';
import Container from './components/Container';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

// class App extends Component {
//   state = {
//     query: '',
//   };
function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  // const page = 1;
  // const newImages = [];

  const handleSubmit = name => {
    setQuery(name);
    setPage(1);
    setImages([]);
  };

  // const { query } = this.state;
  return (
    <Container>
      <Searchbar onHandleSubmit={handleSubmit} />

      <ImageGallery
        query={query}
        page={page}
        images={images}
        setPage={setPage}
        setImages={setImages}
      />
    </Container>
  );
}

export default App;
