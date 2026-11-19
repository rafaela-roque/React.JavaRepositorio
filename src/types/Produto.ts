export type Produto = {
    id: number;
    nome: string;
    descricaoCurta: string;
    descricaoLonga: string;
    precoPorKg: number;
    ativo: string;
    imagem: string;
    categoriaIds: number[]
}