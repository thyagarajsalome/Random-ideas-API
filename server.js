const express = require("express");
const port = 5000;

const app = express();

// data
const ideas = [
  {
    id: 1,
    text: "Positive NewsLetter, a newsletter that only shares positive, uplifting news",
    tag: "Technology",
    username: "TonyStarck",
    date: "2022-01-02",
  },
  {
    id: 2,
    text: "Eco-friendly packaging for online retailers, made from biodegradable materials",
    tag: "Sustainability",
    username: "GreenThumb",
    date: "2023-05-15",
  },
  {
    id: 3,
    text: "Community skill-sharing platform, where people can offer and request local services (e.g., gardening, tutoring)",
    tag: "Community",
    username: "HelperHand",
    date: "2024-02-28",
  },
  {
    id: 4,
    text: "AI-powered personalized learning assistant for students, adapting to individual learning styles",
    tag: "Education",
    username: "BrainyBot",
    date: "2023-11-10",
  },
  {
    id: 5,
    text: "Subscription box for gourmet coffee from small, ethical farms around the world",
    tag: "Food & Beverage",
    username: "CoffeeCrafter",
    date: "2024-01-20",
  },
  {
    id: 6,
    text: "Virtual reality fitness classes with interactive environments and real-time coaching",
    tag: "Health & Fitness",
    username: "VRFitGuru",
    date: "2023-09-01",
  },
  {
    id: 7,
    text: "App that connects travelers with local hosts for authentic cultural experiences and home-cooked meals",
    tag: "Travel",
    username: "WanderlustSoul",
    date: "2022-07-07",
  },
  {
    id: 8,
    text: "Open-source platform for citizen science projects, allowing public participation in data collection and research",
    tag: "Science",
    username: "CuriousMind",
    date: "2024-04-12",
  },
  {
    id: 9,
    text: "Smart home device that optimizes energy consumption based on user habits and weather forecasts",
    tag: "Smart Home",
    username: "EnergySaver",
    date: "2023-03-25",
  },
  {
    id: 10,
    text: "Decentralized social media platform focused on data privacy and user control",
    tag: "Web3",
    username: "PrivacyAdvocate",
    date: "2024-06-05",
  },
];

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the RandomIdeas API" });
});

// Get all ideas
app.get("/api/ideas", (req, res) => {
  res.json({ success: true, data: ideas });
});

app.get("/api/ideas/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);
  if (!idea) {
    return res.status(404).json({ sucess: false, error: "Resource not found" });
  }
  res.json({ success: true, data: idea });
});

// Port
app.listen(port, () => console.log(`Server listening on port  ${port}`));
