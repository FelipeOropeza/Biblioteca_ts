import { useEffect, useState } from 'react';
import { getAllBook } from '../api/book.ts';
import type { Livro } from '../api/types';

function Home() {
  const [livros, setLivros] = useState<Livro[]>([]);

  useEffect(() => {
    getAllBook()
      .then(response => {
        setLivros(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar livros:', error);
      });
  }, []);
  

  return (
    <div>
      <ul>
        {livros.map(livro => (
          <li key={livro.livro_id}>{livro.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
