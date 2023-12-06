import SearchBar from "@/components/SarchBar";
import ProductCard from "@/components/products/ProductCard";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getProducts } from "@/store/slices/productSlice";
import { Box } from "@mui/material";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((store) => store.product.items);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box>
        <SearchBar />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
}
