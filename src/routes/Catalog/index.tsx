import { ButtonNextPage } from '../../components/ButtonNextPage';
import CatalogCard from '../../components/CatalogCard';
import SearchBar from '../../components/SeachBar';
import * as productService from '../../services/product-service';

import './styles.css';

export default function Catalog() {
    return (
            <main>
                <section id="catalog-section" className="dsc-container">
                    <SearchBar />

                    <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                      {
                        productService.findAll().map(product => (
                          <CatalogCard product={product} key={product.id}/>
                        ) )
                      }
                    </div>
                    <ButtonNextPage text='Carregar mais'/>
                </section>
            </main>
    )
}