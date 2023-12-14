let me = {
    name: "Le Quyet Chien",
    age: 19,
    hobbies: ["chatting", "gaming", "listening to music", " sleeping "],
    skills: ["web development", "Bilingual", "coding skill", " cooking", "playing sports"]
  };
  let meJSON = JSON.stringify(me);
  const fs = require("fs");
  fs.writeFile("me.json", meJSON, "utf8", (err) => {
    if (err) throw err;
    console.log("File me.json has been created");
  });
  