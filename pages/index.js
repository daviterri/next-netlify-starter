import Head from 'next/head'
import Link from 'next/link';
import Header from '@components/Header'
import Footer from '@components/Footer'
import React from 'react';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>What makes us look young?</title>
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
          <h1>What Makes Us Look Young?</h1>
          <p>
          The youthful appearance of a person is influenced by various factors,
          including biological, genetic, and lifestyle-related aspects. Here are
          some key factors that contribute to a youthful look:
          </p>
          <ul>
            <li>Collagen and Elastin: Collagen and elastin are proteins in our skin that provide structure, firmness, and elasticity.</li>
            <li>Skin Moisture: Hydrated skin appears plumper and healthier.</li>
            <li>Skin Cell Turnover: Younger individuals have a faster rate of skin cell turnover.</li>
            <li>Fat Distribution: Subcutaneous fat in our face contributes to a youthful appearance.</li>
            <li>Bone Structure: The underlying bone structure plays a role in facial appearance.</li>
            <li>Genetics: Our genes influence how we age and the features we inherit from our parents that contribute to a youthful look.</li>
            <li>Sun Exposure: Excessive sun exposure can accelerate skin aging due to UV damage.</li>
            <li>Lifestyle Habits: Healthy lifestyle choices can contribute to a more youthful appearance.</li>
            <li>Stress Management: Chronic stress can affect our overall health and may impact the aging process.</li>
            <li>Skincare: Proper skincare can help maintain a youthful look and prevent premature aging.</li>
          </ul>
          <p>
            It's essential to remember that aging is a natural process, and while
            some factors can influence our appearance, embracing the aging process
            with a positive mindset is also important.
          </p>
      </main>
      <footer>
        {/* Add a footer section with relevant information */}
      </footer>
    </div>
      <Footer />
    </div>
  )
}
