interface ProductProps {
    name: string;
    price: number;
    oldPrice?: number;
    image: string;
}

export default function ProductCard({ name, price, oldPrice, image }: ProductProps) {
    return (
        <div className="bg-white border rounded-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
            <div className="relative h-72 w-full overflow-hidden bg-gray-100">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {oldPrice && (
                    <div className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                        SAVE {Math.round(((oldPrice - price) / oldPrice) * 100)}%
                    </div>
                )}
            </div>
            <div className="p-4">
                <h3 className="text-sm font-medium text-gray-800 truncate">{name}</h3>
                <div className="mt-2 flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">৳{price}</span>
                    {oldPrice && <span className="text-sm text-gray-400 line-through">৳{oldPrice}</span>}
                </div>
                <button className="mt-3 w-full border border-primary text-primary hover:bg-primary hover:text-white py-2 rounded-md text-sm font-semibold transition">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}