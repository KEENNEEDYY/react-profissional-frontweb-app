import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClientHome from './routes/ClientHome';
import ProductDetails from './routes/ProductDetails';
import Catalog from './routes/Catalog';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome />}>
          <Route index element={<Catalog />} />
          <Route path="product-catalog" element={<Catalog />} />
          <Route path="product-details" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}