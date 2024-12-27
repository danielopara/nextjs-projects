const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-12 text-center bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg shadow-lg text-white">
      <h1 className="text-4xl font-bold sm:text-5xl">
        Welcome to Book Management App
      </h1>
      <p className="mt-4 text-lg sm:text-xl">
        Your ultimate tool to discover, organize, and manage your favorite
        books. Sign up to build your wishlist or log in to access your
        collection!
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <a
          href="/register"
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200"
        >
          Get Started
        </a>
        <a
          href="/login"
          className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md transition-all duration-200"
        >
          Log In
        </a>
      </div>
    </section>
  );
};

export default Hero;
