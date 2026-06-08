import Header from '@/components/Header';
import './globals.scss';
import ReduxProvider from '@/store/ReduxProvider';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata = {
    metadataBase: 'https://aply-ai.vercel.app',
    title: 'Aply.ai — Effortless Resume Builder',
    description:
        'Aply.ai lets you build modern, ATS-optimized resumes without the hassle of sign-up. Craft, customize, and export professional resumes instantly.',
    openGraph: {
        title: 'Aply.ai — Build Smarter Resumes',
        images: '/banner.png',
        icons: {
            icon: '/favicon.png',
        },
        type: 'website',
    },
    alternates: {
        canonical: '/',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ReduxProvider>
                    <Header />
                    <div className="mx-auto min-h-[calc(100vh-3rem)]">{children}</div>
                </ReduxProvider>
                <GoogleAnalytics gaId="G-WPXWXJ9MC2" />
            </body>
        </html>
    );
}
