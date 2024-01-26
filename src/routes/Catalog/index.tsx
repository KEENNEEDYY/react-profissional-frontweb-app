import './styles.css';
import HeaderClient from '../../components/HeaderClient';
import SearchBar from '../../components/SeachBar';
import CatalogCard from '../../components/CatalogCard';
import { ButtonNextPage } from '../../components/ButtonNextPage';
import { ProductDTO } from '../../models/products';

const product: ProductDTO = {
    id: 2,
    name: "Computador Gamer XT",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, sunt",
    imgUrl: "/src/assets/computer.png",
    price: 5000.00,
    categories:[
      {
        id: 2,
        name: "Eletrônicos"
      },
      {
        id: 3,
        name: "Computadores"
      }
    ]
  }

export default function Catalog() {
    return (
        <>
            <HeaderClient />
            <main>
                <section id="catalog-section" className="dsc-container">
                    <SearchBar />

                    <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                    </div>

                    <ButtonNextPage text='Carregar mais'/>
                </section>
            </main>
        </>
    )
}