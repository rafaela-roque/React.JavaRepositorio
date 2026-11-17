import './ListaProdutos.css'

import produto2 from '../../assets/img/produtos/le_grand_chocolat.png'

import Card from '../../components/card/Card'
import { useEffect, useState } from 'react'
import type { Produto } from '../../types/Produto';
import produtoService from '../../services/produtoService';

function ListaProdutos() {
  const [produtos,setProdutos]=useState<Produto[]>([]);
  const [erro,setErro] = useState('');
  const [carregando, setCarregando] = useState(true)

  //Assim que a tela carregar assim que a pagina carregar ele vai puxar tudo oque tem nela

    useEffect(() => {
        //Promise.call
       produtoService.listar()
       .then(lista => {setProdutos(lista), console.log(lista)})
       .catch(() => setErro("Não foi possivel carregar os produtos!"))
       .finally(() => setCarregando(false))
  }, [])


  return (
    <>
      <main>
        <section className="prod_banner" />
        <section className="container prod_container">
          <div className="box_h2">
            <h1>Nossos Bolos</h1>
            <span>Nos Gâteaux</span>
            <hr />
          </div>
          {carregando && <p>Carregando produto...</p>}
          {!carregando && !erro && produtos.length === 0 &&
           <p>Nenhum produto encontrado.</p>}
          <div className="prod_cards">

       {produtos.map(produto => { return <Card
             id={produto.id}
             key={produto.id}
             imgProdutos={`http://localhost:3000${produto.imagem}`}
             nome={produto.nome}
             descricao={produto.descricaoCurta}
             valor={produto.precoPorkg}
             quantidadeAvaliacoes={10}
             nota={9.5}

            />})}
            
            {/*<article className="prod_card">
              <figure>
                <img
                  src={imgProdutos}
                  alt="foto do produto"
                />
              </figure>
              <h2>
                <Link to="/detProdutos">Le Grand Chocolat</Link>
              </h2>
              <p className="card_desc">
                Mousse de chocolate belga 70%, praliné de avelãs e biscuit de cacau.
              </p>
              <p className="card_rodape">
                <data value={185.0}>R$ 185,00 / kg</data>
                <span className="card_av">
                  <img src={UserProdutos} />
                  <data value={10}>10</data>
                  <img src={StarProdutos} />
                  <data value="9.5">9,5</data>
                </span>
              </p>
            </article>*/}


          </div>
        </section>
      </main>
    </>

  )
}

export default ListaProdutos;
