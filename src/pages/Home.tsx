import { useEffect } from 'react';
import { getAllBook } from '../api/book.ts';

function Home() {
  useEffect(() => {
    getAllBook()
      .then(response => {
        const livros = response.data;
        console.log('Livros:', livros);
      })
      .catch(error => {
        console.error('Erro ao buscar livros:', error);
      });
  }, []);
  

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
