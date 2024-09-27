# QTrip - Travel Adventure Website

QTrip is a dynamic travel website designed for adventurers seeking exciting experiences in various cities. The site uses JavaScript, REST APIs, and localStorage to provide an interactive user experience with features like multi-select filters, image carousels, and reservation handling with a responsive design for seamless experiences across different devices.

## Features

### 1. **Dynamic Landing Page**

- Fetches cities data using REST API and dynamically generates the city grid with responsiveness.
- Renders city information dynamically using DOM manipulation.

### 2. **Adventures Page with Multi-Select Filters**

- Fetches adventures data for a specific city based on the query parameters.
- Implements both multi-select and single-select filters for users to customize their search.
- Persists user filter preferences using localStorage.

### 3. **Adventure Details & Reservations Page**

- Displays a detailed view of each adventure, including an image carousel built with Bootstrap.
- Implements a reservation form that submits data using the Fetch API (POST request).
- Conditionally renders the availability of adventures (e.g., "Sold Out") and shows a reservations page with the user's previous reservations.

### 4. **Frontend and Backend Deployment**

- Deployed frontend on Vercel and backend on Render to ensure fast, reliable access across the web.

## Tech Stack

- **HTML5 & CSS3**: Structuring and styling web pages.
- **JavaScript (ES6+)**: Dynamic rendering, form handling, event management.
- **Bootstrap**: Used for responsive design, grid layout, and image carousels.
- **REST APIs**: Fetched data for cities, adventures, and reservations.
- **localStorage**: Saved user preferences and filters on the client-side.
- **Vercel & Render**: Deployed frontend to Vercel and backend to Render.

## Installation

To run QTrip locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/adityaamaiya/QTripDynamic.git
   ```

2. Navigate to the project directory:

   ```bash
   cd qtrip
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Deployment

The project has been deployed to Vercel. Visit the live demo [here](https://q-trip-orpin.vercel.app/).

## Screenshots

### 1. QTrip Landing Page

![Landing Page](https://i.imgur.com/ub9mpPb.png)

### 2. QTrip Adventures Page

![Adventures Page](https://i.imgur.com/XduSrRL.png)

### 3. QTrip Adventure Details Page

![Adventure Details Page](https://i.imgur.com/QcQpG8P.png)

### 4. QTrip Reservations Page

![Reservations Page](https://i.imgur.com/RGJALNA.png)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
