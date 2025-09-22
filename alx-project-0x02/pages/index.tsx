import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to ALX Listing App!</h1>
      <p className="text-lg text-gray-700">
        Explore your favorite properties and find the best deals worldwide.
      </p>
    </div>
  );
};

export default Home;
