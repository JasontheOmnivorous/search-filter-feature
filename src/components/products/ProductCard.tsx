import { MonetizationOn } from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { Products } from "@prisma/client";

interface Props {
  product: Products;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card
      elevation={3}
      sx={{
        width: 350,
        height: 350,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        m: 2,
      }}
    >
      <CardContent>
        <Typography sx={{ fontWeight: "bold" }} variant="h5">
          {product.title}
        </Typography>
        <img
          style={{ width: 150, height: 150 }}
          src={product.imageUrl || ""}
          alt="product_image"
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MonetizationOn sx={{ fontSize: 50, color: "green" }} />
          <Typography variant="h5">{product.price}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
