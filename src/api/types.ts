export interface Livro {
  livro_id: number;
  title: string;
  author: string;
  url_imagem: string;
  descricao: string;
  data_publicacao: string;
  fk_categoria: number;
}
