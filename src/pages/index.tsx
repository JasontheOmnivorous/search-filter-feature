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

  return <Box>{products.map((product) => product.title)}</Box>;
}
