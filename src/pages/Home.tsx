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
    <div className="p-4 space-y-4">
      {livros.map(livro => (
        <div
          key={livro.livro_id}
          className="card card-side bg-base-100 shadow-md"
        >
          <figure className="w-32 h-32 overflow-hidden">
            <img
              src={livro.url_imagem}
              alt={livro.title}
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title">{livro.title}</h2>
            <p className="text-sm text-gray-600">Autor: {livro.author}</p>
            <p className="text-sm line-clamp-2">{livro.descricao}</p>
            <p className="text-xs text-gray-400">
              Publicado em: {new Date(livro.data_publicacao).toLocaleDateString()}
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm btn-primary">Ver mais</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
