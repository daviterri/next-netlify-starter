import Head from 'next/head'
import Link from 'next/link';
import Header from '@components/Header'
import Footer from '@components/Footer'
import React from 'react';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <Head>
        <title>Home Page</title>
        {/* Add meta tags, CSS, or other head elements */}
      </Head>
      <header>
        {/* Create a navigation bar or any header content */}
        <nav>
          <ul>
            <li>
              {/* Add a link to the rejuvenating page */}
              <Link href="/rejuvenating">
                <a>Rejuvenating</a>
              </Link>
            </li>
            {/* Add more navigation links if needed */}
          </ul>
        </nav>
      </header>
      <main>
        {/* Add your main content */}
      </main>
      <footer>
        {/* Add a footer section with relevant information */}
      </footer>
    </div>
      <Footer />
    </div>
  )
}
