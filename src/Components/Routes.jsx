import { Navbar } from "./Navbar";
import { Routes as R, Route } from "react-router-dom"
import { HomePage } from "./HomePage";
import { ProductsPage } from "./ProductsPage";
import { ProductsDetailsPage } from "./ProductsDetailsPage"
import { NotFoundPage } from "./NotFoundPage"

export const Routes = () => {
  return (
    <>
      <Navbar />
      <R>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductsDetailsPage />} />
        <Route exact={false} path="/notfound" element={< NotFoundPage />} />
      </R>

      {/* Add Routes here */}
    </>
  );
};
