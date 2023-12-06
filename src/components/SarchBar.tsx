import { TextField } from "@mui/material";
import { Products } from "@prisma/client";
import { ChangeEvent } from "react";

interface Props {
  setFilterProduct: (val: Products[]) => void;
  products: Products[];
}

const SarchBar = ({ setFilterProduct, products }: Props) => {
  const handleSearch = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const query = evt.target.value.toLowerCase();
    const filteredProduct = products.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
    setFilterProduct(filteredProduct);
  };

  return (
    <TextField
      onChange={handleSearch}
      sx={{ width: 300 }}
      placeholder="Search products..."
    />
  );
};

export default SarchBar;
