// Import React and any other libraries you need
import React from 'react';
import Head from 'next/head'; // For handling everything in the <head> of the HTML document

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
      <img src="/images/your-image.jpg" alt="Food Saving Example" style={{ width: "100%", height: "auto" }} />
      {/* Replace '/images/your-image.jpg' with the path to an actual image in your public/images directory */}
    </div>
  );
};

// Export the component as the default export
export default FoodSaver;
