import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookById } from '../api/book';
import type { Livro } from '../api/types';
import { ArrowLeft } from 'lucide-react';

function DetalhesLivro() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [livro, setLivro] = useState<Livro | null>(null);

  useEffect(() => {
    if (id) {
      getBookById(Number(id))
        .then(response => setLivro(response.data))
        .catch(error => console.error('Erro ao carregar livro:', error));
    }
  }, [id]);

  if (!livro) return <p className="text-center text-gray-600">Carregando livro...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 shadow rounded-md space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
      >
        <ArrowLeft size={18} /> Voltar
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={livro.url_imagem}
          alt={livro.title}
          className="w-full md:w-64 h-64 object-cover rounded-md shadow"
        />
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">{livro.title}</h1>
          <p className="text-gray-600 dark:text-gray-300">Autor: {livro.author}</p>
          <p className="text-sm text-gray-500">
            Publicado em: {new Date(livro.data_publicacao).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Descrição Completa</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{livro.descricao}</p>
      </div>
    </div>
  );
}

export default DetalhesLivro;
