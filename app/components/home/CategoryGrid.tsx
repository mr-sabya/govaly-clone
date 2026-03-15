"use client";

const CATEGORIES = [
    { id: 1, name: "Women Fashion", image: "/images/categories/category_1.jpg" },
    { id: 2, name: "Women Bottom", image: "/images/cat2.png" },
    { id: 3, name: "Men Topwear", image: "/images/cat3.png" },
    { id: 4, name: "Women Footwear", image: "/images/cat4.png" },
    { id: 5, name: "Men Bottomwear", image: "/images/cat5.png" },
    { id: 6, name: "Men Fashion Acce...", image: "/images/cat6.png" },
    { id: 7, name: "Men Footwear", image: "/images/cat7.png" },
    { id: 8, name: "Women Accessories", image: "/images/cat8.png" },
    { id: 9, name: "Health & Beauty", image: "/images/cat9.png" },
    { id: 10, name: "Kids Kurti", image: "/images/cat10.png" },
    { id: 11, name: "Kids Girls Clothing", image: "/images/cat11.png" },
    { id: 12, name: "Kids Boys Clothing", image: "/images/cat12.png" },
    { id: 13, name: "Kids Accessories", image: "/images/cat13.png" },
    { id: 14, name: "Kids Footwear", image: "/images/cat14.png" },
    { id: 15, name: "Baby Clothing Set", image: "/images/cat15.png" },
    { id: 16, name: "Baby Shoes", image: "/images/cat16.png" },
    { id: 17, name: "Baby Accessories", image: "/images/cat17.png" },
    { id: 18, name: "Baby Winter Wear", image: "/images/cat18.png" },
];

export default function CategoryGrid() {
    return (
        <section className="py-8 bg-white">
            <div className="container mx-auto px-4">
                {/* Grid layout: 3 cols on mobile, 6 on tablet, 9 on desktop */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3 md:gap-4">
                    {CATEGORIES.map((category) => (
                        <div
                            key={category.id}
                            className="flex flex-col items-center group cursor-pointer"
                        >
                            {/* Image Container with Govaly Gradient */}
                            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gradient-to-b from-[#E3F2FD] to-white border border-gray-50 shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:shadow-md">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            {/* Category Title */}
                            <p className="mt-2 text-[11px] md:text-[13px] font-medium text-gray-700 text-center leading-tight truncate w-full px-1">
                                {category.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}