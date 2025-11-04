# Sales Application

A modern, user-friendly web application for managing sales records.

## Features

- 📝 Add new sales with product details, pricing, and customer information
- 📊 View real-time sales statistics (total sales, revenue, average sale value)
- 📋 Manage sales records with a sortable table view
- 💾 Persistent storage using browser's localStorage
- 🎨 Beautiful, responsive UI with gradient design
- ❌ Delete individual sales records

## How to Run

### Option 1: Using Node.js Server (Recommended)

1. Make sure you have Node.js installed on your system
2. Navigate to the project directory
3. Run the server:
   ```bash
   node server.js
   ```
4. Open your browser and go to: `http://localhost:8080/Local/Application.html`

### Option 2: Direct File Access

Simply open the `Local/Application.html` file directly in your web browser.

## Usage

1. **Add a Sale**: Fill in the form with product details, quantity, price, customer name, date, and category
2. **View Statistics**: See your total sales count, revenue, and average sale value
3. **Manage Records**: View all sales in a table format and delete records as needed
4. **Data Persistence**: All sales are automatically saved to your browser's localStorage

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- LocalStorage API
- Node.js HTTP Server (optional)

## File Structure

```
Sales-application-/
├── Local/
│   └── Application.html    # Main application file
├── server.js               # Optional Node.js server
└── README.md              # This file
```

## Categories Available

- Electronics
- Clothing
- Food
- Books
- Other

## Browser Compatibility

Works on all modern browsers that support:
- HTML5
- CSS3
- ES6 JavaScript
- LocalStorage API