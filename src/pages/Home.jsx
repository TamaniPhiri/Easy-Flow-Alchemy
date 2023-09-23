import React from 'react';

const Home = () => {
  return (
    <div className="py-32 w-full flex min-h-screen justify-center items-center bg-blue-500 text-white text-center">
      <div>
        <h1 className='text-4xl font-bold'>Welcome To Our Bookstore</h1>
        <p className="text-4xl ms-4 font-bold">Explore the best collection of books from booksellers to hidden gems. find the best books to acompany your reading journey</p>
        <p className="mt-4 md:mt-8  text-xl">
          We believe in the magic of books and their power to inspire, educate, and entertain. Dive into a world of stories and knowledge with us.
        </p>
      </div>
    </div>
  );
};

export default Home;
