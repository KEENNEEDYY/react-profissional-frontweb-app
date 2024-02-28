import './styles.css';
import ButtonInverse from '../../components/ButtonInverse';
import ButtonPrimary from '../../components/ButtonPrimary';

import HeaderClient from '../../components/HeaderClient';
import ProductDetailsCard from '../../components/ProductDetailsCard';
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

export default function ProductDetails() {
  return (
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard product={product}/>
          <div className="dsc-btn-page-container">
            <ButtonPrimary text='Comprar'/>
            <ButtonInverse text='Início'/>
          </div>
        </section>
      </main>
  );
}
