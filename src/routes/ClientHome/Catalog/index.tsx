import { useEffect, useState } from 'react';
import { ButtonNextPage } from '../../../components/ButtonNextPage';
import CatalogCard from '../../../components/CatalogCard';
import SearchBar from '../../../components/SeachBar';
import { ProductDTO } from '../../../models/products';

import * as productService from '../../../services/product-service';
import './styles.css';

type QueryParams = {
  page: number;
  name: string;
}

export default function Catalog() {

  const [isLastPage, setIsLastPage] = useState(false);

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: ""
  });

  useEffect(() => {
    productService.findPageRequest(queryParams.page, queryParams.name)
      .then( response => {
        const nextPage = response.data.content;
        setProducts(products.concat(nextPage));
        setIsLastPage(response.data.last);
      })
  }, [queryParams]);

  function handleSearch(searchText: string) {
    setProducts([]);
    setQueryParams({ ...queryParams, name: searchText, page: 0 });
  }

  function handleNextPageClick() {
    setQueryParams({ ...queryParams, page: queryParams.page + 1 })
  }

  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar onSearch={handleSearch} />

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {products &&
            products.map(product => (
              <CatalogCard product={product} key={product.id} />
            ))
          }
        </div>

        {
          !isLastPage && 
          <div onClick={handleNextPageClick}>
            <ButtonNextPage text='Carregar mais' />
          </div>
        }
      </section>
    </main>
  )
}