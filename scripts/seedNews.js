const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);

const newsSeed = [
  {
    title: "The Dead Zone",
    link: "//news/Stephen King",
    date: new Date(Date.now())
  },
  {
    title: "Lord of the Flies",
    link: "//news/William Golding",
    date: new Date(Date.now())
  },
  {
    title: "The Catcher in the Rye",
    link: "//news/J.D. Salinger",
    date: new Date(Date.now())
  },
  {
    title: "The Punch Escrow",
    link: "//news/Tal M. Klein",
    date: new Date(Date.now())
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    link: "//news/J.K. Rowling",
    date: new Date(Date.now())
  },
  {
    title: "Coraline",
    link: "//news/Neil Gaiman",
    date: new Date(Date.now())
  },
  {
    title: "Code: The Hidden Language of Computer Hardware and Software",
    link: "//news/Charles Petzold",
    date: new Date(Date.now())
  },
  {
    title: "The Everything Store: Jeff Bezos and the Age of Amazon",
    link: "//news/Brad Stone",
    date: new Date(Date.now())
  },
  {
    title: "Total Recall: My Unbelievably True Life Story",
    link: "//news/Arnold Schwarzenegger",
    date: new Date(Date.now())
  },
  {
    title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
    link: "//news/Ashlee Vance",
    date: new Date(Date.now())
  },
  {
    title: "Steve Jobs",
    link: "//news/Walter Isaacson",
    date: new Date(Date.now())
  },
  {
    title: "Astrophysics for People in a Hurry",
    link: "//news/Neil deGrasse Tyson",
    date: new Date(Date.now())
  },
  {
    title: "1984",
    link: "//news/George Orwell",
    date: new Date(Date.now())
  },
  {
    title: "Frankenstein",
    link: "//news/Mary Shelley",
    date: new Date(Date.now())
  },
  {
    title: "The Great Gatsby",
    link: "//news/F. Scott Fitzgerald",
    date: new Date(Date.now())
  },
  {
    title: "Born a Crime: Stories from a South African Childhood",
    link: "//news/Trevor Noah",
    date: new Date(Date.now())
  }
];

db.Book
  .remove({})
  .then(() => db.News.collection.insertMany(newsSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
});