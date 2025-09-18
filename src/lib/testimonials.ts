
export type Testimonial = {
    id: string;
    name: string;
    quote: string;
    avatarImageId: string;
    rating: number;
    };

export const testimonials: Testimonial[] = [
    {
        id: "1",
        name: "Priya S.",
        quote: "The app is so easy to use! I found the perfect dress for a wedding and it arrived in less than an hour. The quality is amazing and the variety is just what I was looking for.",
        avatarImageId: "avatar-1",
        rating: 5,
    },
    {
        id: "2",
        name: "Rohan M.",
        quote: "Yoloo is a game-changer! The delivery is insanely fast, and I love the curated collections. Finally, a fashion app that understands my style.",
        avatarImageId: "avatar-2",
        rating: 5,
    },
    {
        id: "3",
        name: "Anjali K.",
        quote: "I'm obsessed with the ethnic wear collection. The fabrics are beautiful and the designs are so unique. Customer service was also super helpful with my sizing questions.",
        avatarImageId: "avatar-3",
        rating: 5,
    },
    {
        id: "4",
        name: "Vikram R.",
        quote: "Great selection of sneakers and streetwear. The app experience is smooth and I always get my orders on time. Highly recommend for anyone who loves fashion.",
        avatarImageId: "avatar-4",
        rating: 4,
    },
];
