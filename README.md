# Construction Project Drawing Analysis System

This project provides a web-based system to upload construction project drawings (in PDF/Image format), extract detailed information from the drawings, and fetch real-time cost estimates for materials. It generates detailed reports (in Excel/PDF formats) summarizing the material estimates for construction projects.

## Table of Contents

- [Available Scripts](#available-scripts)
- [How to Use](#how-to-use)
- [Tech Stack](#tech-stack)
- [Learn More](#learn-more)

## Available Scripts

In the project directory, you can run the following commands:

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make changes to the code.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.
See the testing documentation for more details.

### `npm run build`

Builds the app for production to the `build` folder.
It optimizes the React app for the best performance. The build is minified, and the filenames include hashes.
Your app is now ready to be deployed!

For deployment information, check the deployment docs.

### `npm run eject`

**Note: this is a one-way operation. Once you eject, you cannot go back!**

If you're not satisfied with the default build tool and configuration, you can eject the project. This will copy all configuration files and dependencies (Webpack, Babel, ESLint, etc.) into your project. At that point, you're on your own.

You don't have to eject. The curated feature set is sufficient for small to medium deployments, and you can customize further if needed.

## How to Use

1.  **Upload Drawing:** Navigate to the homepage and upload a construction project drawing in PDF or image format.
2.  **Element Breakdown:** The system will process the uploaded drawing, extracting all elements and their respective sizes.
3.  **Get Cost Estimates:** Integration with third-party APIs like DOT will fetch real-time material cost estimates.
4.  **Download Report:** After processing, you can download a detailed report in Excel or PDF format.

## Tech Stack

*   **Frontend:** React.js (for building the user interface)
*   **Styling:** Bootstrap (for responsive design)
*   **API Integration:** Fetch real-time cost estimates from external sources
*   **Libraries:** Various libraries for image/PDF processing, report generation, and more.

## Learn More

To learn more about React, check out the official [React documentation](https://reactjs.org/).

For more details on Create React App, visit the [Create React App documentation](https://facebook.github.io/create-react-app/).