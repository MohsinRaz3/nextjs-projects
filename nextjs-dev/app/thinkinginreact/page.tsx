"use client"
import { log } from "console";
import { useState } from "react";

interface Product {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
}
interface ProductRowProps {
    product: Product
}
function ProductRow({ product }: ProductRowProps): JSX.Element {
    const name = product.stocked ? (product.name) : (<span style={{ color: 'red' }}> {product.name}</span>)
    return (
        <div>
            {name}
            {product.price}
        </div>
    )
}

interface ProductCategoryRowProps { category: string }
function ProductCategoryRow({ category }: ProductCategoryRowProps): JSX.Element {
    return (
        <div>
            {category}
        </div>
    )
}
interface ProductTableProps {
    products: Product[];
    filterText: string;
    inStockOnly: boolean;
}

function ProductTable({ products, filterText, inStockOnly }: ProductTableProps): JSX.Element {
    const rows: React.ReactNode[] = [];
    let lastCategory: string | null = null;
   
    Products.forEach((product) => {

        if (product.name.toLowerCase().indexOf(
            filterText.toLowerCase()) === -1) {
            return;
        }

        if (inStockOnly && !product.stocked) {
            return;
        }

        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}
                />

            )
        }
        rows.push(
            <ProductRow product={product} key={product.name} />
        )
        lastCategory = product.category
    })

    return (
        <div>
            {rows}
        </div>
    )
}
interface SearchBarProps {
    filterText: string;
    inStockOnly: boolean;
    onFilterTextChange: (value: string) => void;
    onInStockOnlyChange: (checked: boolean) => void;
}


function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }: SearchBarProps): JSX.Element {
    return (
        <div>
            <form>
                <input type="text" value={filterText} onChange={(e) => onFilterTextChange(e.target.value)} placeholder="search..." />
                <label><input value={inStockOnly.toString()} onChange={(e) => onInStockOnlyChange(e.target.checked)} type="checkbox" />
                    Only show products in stocks</label>
            </form>
        </div>
    )
}

const FilterableProducts = ({ products }: { products: Product[] }): JSX.Element => {
    const [filterText, setFilterText] = useState('')
    const [inStockOnly, setInStockOnly] = useState(false)

    return (
        <div>
            <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={setFilterText} onInStockOnlyChange={setInStockOnly} />
            <ProductTable filterText={filterText} inStockOnly={inStockOnly} products={products} />
        </div>
    )
}

//interface prod { category: string, price: string, stocked: boolean, name: string}

const Products: Product[] = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

export default function ThinkingInReact(Products: Product[]) {
    return <div>
        <FilterableProducts products={Products} />
    </div>;
};


