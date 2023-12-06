import { Products } from "@prisma/client";

export interface ProductSliceState {
    items: Products[],
    isLoading: boolean,
    error: Error | null
}