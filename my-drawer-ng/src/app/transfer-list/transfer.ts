import { Product } from "./product";

export class Transfer {
    constructor(
        public id: number,
        public name: string,
        public products: Product[]
    ) {}
}
