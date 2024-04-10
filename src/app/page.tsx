import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import "/src/app/globals.css";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Bull Bitcoin India</title>
        <meta name="description" content="Purchase Bitcoin in India" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-custom-black text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
          <div className="flex items-center"> {/* Ensure logo and text are aligned */}
            <Link href="/" passHref className="flex items-center">

              <Image
                src="/logos/red-bull.png" // Adjust the path if necessary
                alt="Logo"
                width={70} // Set the desired width
                height={70} // And height, maintaining aspect ratio
              />
              <span className="text-3xl font-semibold ml-3" style={{ fontFamily: "'Bebas Neue', sans-serif", }}>
                Bull Bitcoin India
              </span>

            </Link>
          </div>
          <nav>
            <Link href="/" passHref className="text-white px-4 hover:underline">
              {/*Nav Menu Link*/}
            </Link>
            {/* Additional navigation links */}
          </nav>
        </div>
      </header>

      {/* Opening Banner */}
      <section className="flex-1 flex items-center justify-center py-20 text-white text-center w-full bg-custom-red relative" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Simulated background image with controlled opacity */}
        <div style={{
          backgroundImage: 'url("/logos/red-bull.png")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.33, // Adjust the opacity as needed
        }}></div>

        {/* Text Content */}
        <div className="px-4 py-20 md:px-0" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="text-6xl font-bold mb-4 text-white">Own Your Money</h1>
          <p className="text-2xl text-white">Subtitle goes here</p>
        </div>
      </section>


      <section className="bg-custom-black ">
        {/* Pricer Placeholder */}
        <section className="container mx-auto my-12 px-4 md:px-0"> {/* Add padding here */}
          <h2 className="text-3xl text-center font-bold mb-6">Our Pricing</h2>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <p className="text-black">Pricer component will go here</p>
          </div>
        </section>

        {/* Blog Section */}
        <section className="container mx-auto my-12 px-4 md:px-0"> {/* Add padding here */}
          <h2 className="text-3xl text-center font-bold mb-6">From Our Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="https://example.com/blog/post1" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
              <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Blog Post Title 1</h3>
              <p className="font-normal text-gray-700">Description of the blog post...</p>
            </a>
            <a href="https://example.com/blog/post1" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
              <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Blog Post Title 2</h3>
              <p className="font-normal text-gray-700">Description of the blog post...</p>
            </a>
            <a href="https://example.com/blog/post1" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
              <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Blog Post Title 3</h3>
              <p className="font-normal text-gray-700">Description of the blog post...</p>
            </a>
          </div>
        </section>
      </section>

      {/* Footer */}

      <footer className="bg-custom-black text-white p-4 border-t border-gray-500">
        <div className="container mx-auto px-4 md:px-0 flex justify-between items-start flex-wrap">
          {/* Left Side with Responsive Layout */}
          <div className="mb-4 md:mb-0 w-full md:w-auto">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center mb-2">
                <Image src="/logos/red-bull.png" alt="Logo" width={40} height={40} />
                <span className="ml-2 font-semibold">Bull Bitcoin India</span>
              </div>
              <div className="flex justify-center md:justify-start space-x-4">
                <Link href="https://x.com" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/social-logo-x-white.png" alt="X" className="h-6 w-6 mx-2 cursor-pointer" />
                </Link>
                <Link href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/social-logo-telegram-white.png" alt="Telegram" className="h-6 w-6 mx-2 cursor-pointer" />
                </Link>
                <Link href="https://discord.com" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/social-logo-discord-white.png" alt="Discord" className="h-6 w-6 mx-2 cursor-pointer" />
                </Link>
                <Link href="https://github.com/SatoshiPortal" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/social-logo-github-white.png" alt="Github" className="h-6 w-6 mx-2 cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side - Legal */}
          <div className="mt-4 md:mt-0">
            <p className="font-semibold mb-2">Legal</p>
            <div className="block">
              <Link href="/terms" className="border-b border-0 hover:border-red-700 border-transparent">
                Terms and Conditions
              </Link>
            </div>
            <div className="block hover">
              <Link href="/terms" className="border-b border-0 hover:border-red-700 border-transparent">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-0 border-gray-600 my-4"></div>

        {/* Copyright Text */}
        <p className="text-center text-sm">
          © 2024 BPoonji Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}





