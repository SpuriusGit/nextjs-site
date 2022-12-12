import Link from 'next/link';
import Head from 'next/head';

export default function MetaLinks() {
    return (
        <Head>
            <meta charset="utf-8"></meta>
            <meta name="theme-color" content="#536DFE"></meta>
            <meta name="apple-mobile-web-app-title" content="Scimus"></meta>
            <meta name="msapplication-TileColor" content="#536DFE"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <meta name="twitter:card" content="summary"></meta>
            <meta name="twitter:site" content="@your twitter handle"></meta>
            <meta name="twitter:creator" content="@your twitter handle"></meta>
            <meta property="og:type" content="website"></meta>
            <meta property="og:image:alt" content="Web Development, Web App Development & Software Testing Services | Scimus"></meta>
            <meta property="og:image:width" content="280"></meta>
            <meta property="og:image:height" content="280"></meta>
            <meta property="og:locale" content="en_US"></meta>
            <meta property="og:site_name" content="Scimus"></meta>
            <meta name="next-head-count" content="18"></meta>
            <Link rel="dns-prefetch" href="https://www.gstatic.com/"></Link>
            <Link rel="dns-prefetch" href="https://fonts.googleapis.com/"></Link>
            <Link rel="dns-prefetch" href="https://fonts.gstatic.com/"></Link>
            <Link rel="dns-prefetch" href="https://js.hsforms.net/"></Link>
            <Link rel="dns-prefetch" href="https://www.google.com/"></Link>
            <Link rel="dns-prefetch" href="https://cdnjs.cloudflare.com/"></Link>
            <Link rel="manifest" href="public/static/manifest.json"></Link>
            <Link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;500;700&amp;display=swap" rel="stylesheet" rel="preload" as="style"></Link>
            <Link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;700;900&display=swap" rel="stylesheet" rel="preload" as="style"></Link>
        </Head>
    );
};