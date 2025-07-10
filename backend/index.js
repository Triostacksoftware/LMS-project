const express = require("express");
const app = express();

app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.json({ message: "Backend API is running!" });
});

// TODO: Mount routes from routes/ directory here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
