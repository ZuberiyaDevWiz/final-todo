import axios from "axios";
import { useEffect, useState } from "react";
import useUser from "../../store/useUser";

const Product = () => {
  const { token } = useUser();

  const [product, setProduct] = useState<{
    productTitle: string;
    productDescription: string;
    productPrice: string;
    productImage: string[];
  }>({
    productTitle: "",
    productDescription: "",
    productPrice: "",
    productImage: [],
  });
  // useEffect(() => {
  //   axios
  //     .post(`http://localhost:4000/api/product`)
  //     .then((res) => alert(res))
  //     .catch((err) => alert(err));
  // }, []);

  console.log(product);

  return (
    <div className="space-y-6">
      <h1 className="text-center  text-xl font-bold">Add Product</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post(
              `http://localhost:4000/api/product`,
              {
                productTitle: product.productTitle,
                productDescription: product.productDescription,
                productImage: product.productImage,
                productPrice: product.productPrice,
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
            .then((res) => alert("Product Added Successfully.!!"))
            .catch((err) => alert(err));
        }}
      >
        <div className="flex flex-col space-y-4 w-[30%] mx-auto">
          <input
            placeholder="Enter your title"
            className="border-[1px] border-black py-2 px-2 rounded-md"
            value={product.productTitle}
            onChange={(e) =>
              setProduct({ ...product, productTitle: e.target.value })
            }
          />
          <input
            placeholder="Upload product image"
            type="file"
            accept="*/images"
            value={product.productImage}
            onChange={(e) =>
              setProduct({ ...product, productImage: [e.target.value] })
            }
            className="border-[1px] border-black py-2 px-2 rounded-md"
          />
          <input
            placeholder="Enter product price"
            className="border-[1px] border-black py-2 px-2 rounded-md"
            value={product.productPrice}
            onChange={(e) =>
              setProduct({ ...product, productPrice: e.target.value })
            }
          />
          <input
            placeholder="Enter product description"
            className="border-[1px] border-black py-2 px-2 rounded-md"
            value={product.productDescription}
            onChange={(e) =>
              setProduct({ ...product, productDescription: e.target.value })
            }
          />
          <button
            type="submit"
            className="bg-black py-2 text-white font-bold rounded"
            onClick={() => {
              if (!token) {
                alert("Please Login before creating a product..!");
              }
            }}
          >
            Submit Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Product;
