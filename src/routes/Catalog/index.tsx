import { useEffect, useState } from 'react';
import { ButtonNextPage } from '../../components/ButtonNextPage';
import CatalogCard from '../../components/CatalogCard';
import SearchBar from '../../components/SeachBar';
import { ProductDTO } from '../../models/products';

import * as productService from '../../services/product-service';
import './styles.css';

export default function Catalog() {

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [productName, setProductName] = useState("");

  useEffect( () => {
    productService.findPageRequest(0, productName)
      .then( response => {
        setProducts(response.data.content);
      })
  }, [productName]);

  function handleSearch(searchText: string){
    setProductName(searchText);
  }

    return (
            <main>
                <section id="catalog-section" className="dsc-container">
                    <SearchBar onSearch={handleSearch}/>

                    <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                      { products && 
                        products.map( product => (
                          <CatalogCard product={product} key={product.id}/>
                        ))
                      }
                    </div>
                    <ButtonNextPage text='Carregar mais'/>
                </section>
            </main>
    )
}