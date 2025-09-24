
import { CategoryCard } from "../category-card";

const categories = [
    { imageId: 'category-men', title: 'Men', href: '/men' },
    { imageId: 'category-women', title: 'Women', href: '/women' },
    { imageId: 'category-footwear', title: 'Sneakers', href: '/sneakers' },
    { imageId: 'category-accessories', title: 'Accessories', href: '/accessories' },
]

export function ShopByCategory() {
    return (
        <section className="py-8 md:py-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Shop By Category</h2>
                <div className="w-24 h-1 bg-primary mx-auto mt-2 rounded-full" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {categories.map(cat => (
                    <CategoryCard key={cat.imageId} {...cat} />
                ))}
            </div>
        </section>
    );
}

    