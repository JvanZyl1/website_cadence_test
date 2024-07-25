// Import React and any other libraries you need
import React from 'react';
import Head from 'next/head'; // For handling everything in the <head> of the HTML document
import Image from 'next/image'; // Import the Image component

// Define the functional component
const FoodSaver = () => {
  return (
    <div>
      <Head>
        <title>Food Saver</title>
        <meta name="description" content="Save food and reduce waste with Food Saver!" />
      </Head>
      <h1>Welcome to Food Saver</h1>
      <p>Helping you save food and the environment with easy, practical solutions.</p>
      <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
        <Image
          src="/Images/Jamie_Vardy_2018.jpg" // Ensure the path is correct
          alt="Food Saving Example"
          layout="fill" // This makes the image fill the container
          objectFit="cover" // Adjust the fitting of the image to cover the area of the container
        />
      </div>
      {/* Note: Adjust the container style as needed to ensure it has a defined height when using layout='fill' */}
    </div>
  );
};

// Export the component as the default export
export default FoodSaver;