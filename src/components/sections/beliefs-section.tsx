import { Card, CardContent } from "@/components/ui/card";

const beliefs = [
    {
        title: "Why we exist",
        description: "When \"fast fashion\" lost its flavour, we chose a different path. Honesty in style, care in craft. What we'd choose for our own wardrobes is what reaches you.",
        color: "bg-primary/5 dark:bg-primary/10 border-primary/20",
    },
    {
        title: "What drives us",
        description: "Every decision starts with you, our members. Quality is never compromised. Only what we'd choose for our own families reaches you. We stay bold, frugal, and curious to keep raising the standards you deserve.",
        color: "bg-accent/20 dark:bg-accent/10 border-accent/20",
    },
    {
        title: "How we show up",
        description: "Each piece is traced back to its origin. Every fabric is tested and looked before it reaches you. Small batches, big standards - because the best never lingers.",
        color: "bg-secondary",
    }
];

export function BeliefsSection() {
    return (
        <section className="py-16 md:py-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Belief</h2>
                <div className="w-24 h-1 bg-primary mx-auto mt-2 rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {beliefs.map((belief) => (
                    <Card key={belief.title} className={`rounded-2xl shadow-sm border ${belief.color}`}>
                        <CardContent className="p-8">
                            <h3 className="text-lg font-bold text-primary mb-2">{belief.title}</h3>
                            <p className="text-foreground/80">{belief.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
