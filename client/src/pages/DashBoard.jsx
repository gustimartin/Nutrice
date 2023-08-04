import CategoryForm from "../components/categories/CategoryForm";
import ProductForm from "../components/products/ProductForm";

function DashBoard() {
  return (
    <div className=" grid md:grid-cols-2 gap-6 p-6">
      <ProductForm />
      <CategoryForm />
    </div>
  );
}

export default DashBoard;
