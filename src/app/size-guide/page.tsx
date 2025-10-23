'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTransitionWrapper } from '@/components/page-transition-wrapper';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function SizeGuidePage() {
    const menSizes = [
        { size: 'S', chest: '36-38', waist: '30-32' },
        { size: 'M', chest: '38-40', waist: '32-34' },
        { size: 'L', chest: '40-42', waist: '34-36' },
        { size: 'XL', chest: '42-44', waist: '36-38' },
    ];
    const womenSizes = [
        { size: 'S', bust: '32-34', waist: '26-28', hips: '36-38' },
        { size: 'M', bust: '34-36', waist: '28-30', hips: '38-40' },
        { size: 'L', bust: '36-38', waist: '30-32', hips: '40-42' },
        { size: 'XL', bust: '38-40', waist: '32-34', hips: '42-44' },
    ];

    return (
        <PageTransitionWrapper>
            <div className="bg-background text-foreground min-h-screen p-4 sm:p-6 flex flex-col items-center">
                <div className="w-full max-w-4xl">
                    <Link href="/home" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
                        <ArrowLeft size={16} />
                        <span>Back to Home</span>
                    </Link>
                </div>
                <div className="bg-card rounded-2xl p-8 sm:p-12 w-full max-w-4xl space-y-8 border">
                    <div>
                        <h1 className="text-3xl font-bold mb-4 text-foreground">Size Guide</h1>
                        <p className="text-muted-foreground">Find your perfect fit with our general sizing guide. All measurements are in inches.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">Men's Sizing</h2>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Size</TableHead>
                                    <TableHead>Chest</TableHead>
                                    <TableHead>Waist</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {menSizes.map(s => (
                                <TableRow key={s.size}>
                                    <TableCell>{s.size}</TableCell>
                                    <TableCell>{s.chest}</TableCell>
                                    <TableCell>{s.waist}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">Women's Sizing</h2>
                         <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Size</TableHead>
                                    <TableHead>Bust</TableHead>
                                    <TableHead>Waist</TableHead>
                                    <TableHead>Hips</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {womenSizes.map(s => (
                                <TableRow key={s.size}>
                                    <TableCell>{s.size}</TableCell>
                                    <TableCell>{s.bust}</TableCell>
                                    <TableCell>{s.waist}</TableCell>
                                    <TableCell>{s.hips}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">How to Measure</h2>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li><strong>Chest/Bust:</strong> Measure around the fullest part of your chest/bust.</li>
                            <li><strong>Waist:</strong> Measure around your natural waistline.</li>
                            <li><strong>Hips:</strong> Measure around the fullest part of your hips.</li>
                        </ul>
                        <p className="text-sm text-muted-foreground pt-2">Note: This is a general guide. Sizes may vary between brands. Check product-specific details in the app for the best fit.</p>
                    </div>

                    <div className="pt-4">
                        <Link href="/home">
                            <Button variant="secondary">Go to Home</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </PageTransitionWrapper>
    );
}
