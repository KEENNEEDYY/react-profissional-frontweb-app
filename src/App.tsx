import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ClientHome from './routes/ClientHome';
import ProductDetails from './routes/ProductDetails';
import Catalog from './routes/Catalog';
import Cart from './routes/ClientHome/Cart';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome />}>
          <Route index element={<Catalog />} />
          <Route path="product-catalog" element={<Catalog />} />
          <Route path="product-details/:productId" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}