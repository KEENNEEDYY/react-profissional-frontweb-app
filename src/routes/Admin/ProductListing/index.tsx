import './styles.css';

import deleteIcon from '../../../assets/delete.svg';
import editIcon from '../../../assets/edit.svg';

import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/products';
import * as productService from '../../../services/product-service';
import SearchBar from '../../../components/SeachBar';
import DialogInfo from '../../../components/DialogInfo';
import DialogConfirmation from '../../../components/DialogConfirmation';

type QueryParams = {
  page: number;
  name: string;
}

export default function ProductListing() {

  const [dialogConfirmationData, setDialogConfirmationData] = useState({
    visible: false,
    message: "Tem certeza!"
  });

  const [dialogInfoData, setDialogInfoData] = useState({
    visible: false,
    message: "Operação com sucesso!"
  });

  const [isLastPage, setIsLastPage] = useState(false);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: ""
  });

  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
    productService.findPageRequest(queryParams.page, queryParams.name)
      .then(response => {
        const nextPage = response.data.content;
        setProducts(products.concat(nextPage));
        setIsLastPage(response.data.last);
      })
  }, [queryParams]);

  function handleNextPageClick() {
    setQueryParams({ ...queryParams, page: queryParams.page + 1 })
  }

  function handleSearch(searchText: string) {
    setProducts([]);
    setQueryParams({ ...queryParams, name: searchText, page: 0 });
  }

  function handleDialogConfirmationAnswer(answer: boolean){
    console.log("Resposta", answer)
    setDialogConfirmationData({...dialogConfirmationData, visible:false});
  }

  function handleDialogInfoClose(){
    setDialogInfoData({...dialogInfoData, visible:false});
  }

  function handleDeleteClick(){
    setDialogConfirmationData({...dialogConfirmationData, visible:true});
  }

  return (
    <main>
      <section id="product-listing-section" className="dsc-container">
        <h2 className="dsc-section-title dsc-mb20">Cadastro de produtos</h2>

        <div className="dsc-btn-page-container dsc-mb20">
          <div className="dsc-btn dsc-btn-white">Novo</div>
        </div>

        <SearchBar onSearch={handleSearch} />

        <table className="dsc-table dsc-mb20 dsc-mt20">
          <thead>
            <tr>
              <th className="dsc-tb576">ID</th>
              <th></th>
              <th className="dsc-tb768">Preço</th>
              <th className="dsc-txt-left">Nome</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {
              products.map( product => (
                <tr key={product.id}>
                  <td className="dsc-tb576">{product.id}</td>
                  <td><img className="dsc-product-listing-image" src={product.imgUrl} alt={product.name} /></td>
                  <td className="dsc-tb768">R$ {product.price.toFixed(2)}</td>
                  <td className="dsc-txt-left">{product.name}</td>
                  <td><img className="dsc-product-listing-btn" src={editIcon} alt="Editar" /></td>
                  <td><img onClick={handleDeleteClick} className="dsc-product-listing-btn" src={deleteIcon} alt="Deletar" /></td>
                </tr>
              ))
            }

          </tbody>
        </table>

        {
          !isLastPage &&
          <div className="dsc-btn-next-page" onClick={handleNextPageClick}>Carregar mais</div>
        }
      </section>
      {dialogInfoData.visible && 
        <DialogInfo message={dialogInfoData.message} onDialogClose={handleDialogInfoClose} />
      }
      {dialogConfirmationData.visible && 
        <DialogConfirmation message={dialogConfirmationData.message} onDialogAnswer={handleDialogConfirmationAnswer} />
      }
    </main>
  )
}