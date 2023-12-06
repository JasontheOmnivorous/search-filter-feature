import SearchBar from "@/components/SarchBar";
import ProductCard from "@/components/products/ProductCard";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getProducts } from "@/store/slices/productSlice";
import { Box } from "@mui/material";
import { Products } from "@prisma/client";
import { useEffect, useState } from "react";

export default function Home() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((store) => store.product.items);
  const [filterProduct, setFilterProduct] = useState<Products[]>([]);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    setFilterProduct(products);
  }, [products]);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box>
        <SearchBar products={products} setFilterProduct={setFilterProduct} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {filterProduct.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
}
