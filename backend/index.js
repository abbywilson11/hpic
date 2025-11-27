import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json());

//added route for table fo hospitals
app.get("/api/hospitals", (req, res) => {
    res.json({ message: "List of hospitals goes here" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//BROCHURE SECTION
app.use(cors());

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// GET BROCHURE FILE
app.get("/api/brochure/:fileName", (req, res) => {
  const filePath = path.join(__dirname, "brochures", req.params.fileName);

  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error sending brochure:", err);
      return res.status(404).json({ message: "Brochure not found" });
    }
  });
});

// Start server
app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
