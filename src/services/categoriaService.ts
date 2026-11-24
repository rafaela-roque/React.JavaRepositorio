import type { categoria } from "../types/Categoria";
import { api } from "./api";

const categoriaService = {
    async listar() {
        const resposta = await api.get<categoria[]>('categorias');
        return resposta.data;
    }
}

export default categoriaService;