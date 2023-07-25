import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      // Create header section
    const header = document.createElement('header');
    header.innerHTML = `
      <h1>Rejuvenate Your Mind and Body</h1>
      <p>Discover the power of rejuvenation for a healthier life!</p>
    `;

    // Create benefits section
    const benefitsSection = document.createElement('section');
    benefitsSection.className = 'benefits';
    benefitsSection.innerHTML = `
      <h2>Benefits of Rejuvenation</h2>
      <ul>
        <li>Increased energy and vitality</li>
        <li>Reduced stress and anxiety</li>
        <li>Improved focus and mental clarity</li>
        <li>Enhanced overall well-being</li>
      </ul>
    `;

    // Create call-to-action section
    const ctaSection = document.createElement('section');
    ctaSection.className = 'cta';
    ctaSection.innerHTML = `
      <h2>Start Your Journey Today</h2>
      <p>Sign up for our rejuvenation program now!</p>
      <button onclick="redirectToSignUp()">Get Started</button>
    `;

    // Create footer
    const footer = document.createElement('footer');
    footer.innerHTML = `
      <p>&copy; ${new Date().getFullYear()} RejuvenateNow. All rights reserved.</p>
    `;

    // Append elements to the body
    document.body.appendChild(header);
    const main = document.createElement('main');
    main.appendChild(benefitsSection);
    main.appendChild(ctaSection);
    document.body.appendChild(main);
    document.body.appendChild(footer);

    // Function to redirect to the sign-up page
    function redirectToSignUp() {
      // Replace this URL with the actual URL of your sign-up page.
      window.location.href = "https://www.example.com/signup";
    }

      <Footer />
    </div>
  )
}
