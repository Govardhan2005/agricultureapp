import React from 'react';

const Support = () => {
  return (
    <>
      <style>
        {`
        /* General Styles */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background: url('images/bg-2.jpg') no-repeat center center fixed;
            background-size: cover;
        }

        /* Navigation Bar */
        nav {
            background-color: rgba(64, 99, 67, 0.9); /* Added transparency */
            display: flex;
            width:1473px;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
        }

        nav .nav-links {
            display: flex;
        }

        nav a {
            display: block;
            color: white;
            text-align: center;
            padding: 16px 22px;
            text-decoration: none;
            font-weight: bold;
        }

        nav a:hover {
            background-color: #2f4f33;
            color: #f2f2f2;
        }

        .nav-right {
            display: flex;
        }

        .nav-right a {
            padding: 16px 22px;
        }

        /* Section Styling */
        section {
            max-width: 1200px;
            margin: 3rem auto;
            padding: 20px;
            background-color: rgba(255, 255, 255, 0.9); /* Semi-transparent background */
            border-radius: 12px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
            margin-bottom: 2rem;
        }

        section h2 {
            color: #406343;
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
        }

        section p, ul {
            color: #555;
            font-size: 1.1rem;
            line-height: 1.8;
            margin-bottom: 1.5rem;
        }

        /* Flexbox Layout */
        .flex-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin: 1.5rem 0;
        }

        .flex-item {
            background-color: #f1f1f1;
            border-radius: 8px;
            padding: 15px;
            margin: 10px;
            text-align: center;
            flex-basis: 22%;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .flex-item img {
            max-width: 100%;
            height: auto;
            border-radius: 4px;
        }

        /* Footer */
        footer {
            background-color: #5b8a72;
            color: white;
            text-align: center;
            padding: 1.5rem 0;
            font-size: 1rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            nav {
                flex-direction: column;
            }

            .flex-item {
                flex-basis: 100%;
            }
        }
        `}
      </style>

      {/* Navigation */}
      <nav>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/buyers-info">Products</a>
          <a href="/orders">Orders</a>
          <a href="/market">Market</a>
          <a href="/support">Support</a>
        </div>
    
      </nav>

      {/* Section: Variety of Crops */}
      <section id="crops">
        <h2>Variety of Crops</h2>
        <p>Farmers can grow different types of crops depending on the climate, soil type, and water availability. Below are some of the commonly cultivated crops:</p>

        {/* Flexbox Layout */}
        <div className="flex-container">
          {/* Rice */}
          <div className="flex-item">
            <p><strong>Rice:</strong> A crucial crop, especially in Asia. Rice requires plenty of water and is often grown in paddy fields.</p>
            <img src="src/images/rice.jpg" alt="Rice Crop" />
          </div>

          {/* Wheat */}
          <div className="flex-item">
            <p><strong>Wheat:</strong> A staple food crop grown worldwide. Wheat thrives in cooler climates and is a source of carbohydrates.</p>
            <img src="src/images/wheat.jpg" alt="Wheat Crop" />
          </div>

          {/* Corn */}
          <div className="flex-item">
            <p><strong>Corn:</strong> Also known as maize, corn is used for food, livestock feed, and biofuel.</p>
            <img src="src/images/corn.jpg" alt="Corn Crop" />
          </div>

          {/* Vegetables */}
          <div className="flex-item">
            <p><strong>Vegetables:</strong> Various vegetables like tomatoes, peppers, onions, and lettuce can be grown in diverse climates with proper care.</p>
            <img src="src/images/vegetables.jpeg" alt="Vegetables" />
          </div>

          {/* Fruits */}
          <div className="flex-item">
            <p><strong>Fruits:</strong> Fruit crops like apples, oranges, bananas, and grapes are essential for a balanced diet and can be lucrative for farmers.</p>
            <img src="src/images/fruits.jpg" alt="Fruits" />
          </div>
        </div>
      </section>

      {/* Section: Farming Methods */}
      <section id="methods">
        <h2>Farming Methods</h2>
        <p>Farmers today employ a range of methods to improve crop yield, maintain soil fertility, and ensure sustainability:</p>

        {/* Flexbox Layout for Farming Methods */}
        <div className="flex-container">
          <div className="flex-item">
            <p><strong>Organic Farming:</strong> Organic farming avoids synthetic fertilizers and pesticides, focusing on natural processes to grow crops.</p>
            <img src="src/images/organicfarming.jpg" alt="Organic Farming" />
          </div>

          <div className="flex-item">
            <p><strong>Precision Farming:</strong> This method uses technology like GPS and sensors to optimize field-level management of crops.</p>
            <img src="src/images/precisionfarming.jpg" alt="Precision Farming" />
          </div>

          <div className="flex-item">
            <p><strong>Hydroponics:</strong> Growing crops in a water-based nutrient solution, hydroponics can be used in places where soil is limited.</p>
            <img src="src/images/hydroponics.jpeg" alt="Hydroponics" />
          </div>

          <div className="flex-item">
            <p><strong>Conservation Agriculture:</strong> Practices like minimum soil disturbance, crop rotation, and mulching help maintain soil health.</p>
            <img src="src/images/conservationfarming.jpeg" alt="Conservation Agriculture" />
          </div>
        </div>
      </section>

      {/* Section: Farming Tools */}
      <section id="tools">
        <h2>Farming Tools</h2>
        <p>Modern farming involves various tools and machinery to enhance productivity:</p>

        {/* Flexbox Layout for Farming Tools */}
        <div className="flex-container">
          <div className="flex-item">
            <p><strong>Tractors:</strong> Tractors are versatile machines used for plowing, tilling, planting, and more.</p>
            <img src="src/images/tractor.jpg" alt="Tractor" />
          </div>

          <div className="flex-item">
            <p><strong>Combine Harvesters:</strong> These machines combine reaping, threshing, and winnowing operations into a single process.</p>
            <img src="src/images/combineharvesters.jpg" alt="Combine Harvester" />
          </div>

          <div className="flex-item">
            <p><strong>Irrigation Systems:</strong> Sprinklers, drip systems, and pivot irrigation help ensure crops get the necessary water.</p>
            <img src="src/images/irrigationsystems.jpg" alt="Irrigation System" />
          </div>

          <div className="flex-item">
            <p><strong>Soil Sensors:</strong> These devices measure moisture levels and provide real-time data to optimize irrigation.</p>
            <img src="src/images/soilsensors.jpg" alt="Soil Sensor" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Support the Farmers. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Support;
