import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const rajdhani = Rajdhani({
    weight: ["500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-rajdhani",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Unique KTM Spares - Genuine KTM Parts & Service Booking",
    description: "Your trusted source for genuine KTM spare parts and professional service booking. Duke, RC, Adventure - all models covered.",
    keywords: ["KTM", "spare parts", "bike parts", "KTM Duke", "KTM RC", "motorcycle service"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${rajdhani.variable}`}>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
