const activities = [
    {
      name: "Sensory play",
      image: "./images/sensory.jpeg"
    },
    {
      name: "Arts & crafts",
      image: "./images/craft.png"
    },
    {
      name: "Outside play",
      image: "./images/outside-play.png"
    },
    {
      name: "Dance and music",
      image: "./images/dance.png"
    },
    {
      name: "Play with toys",
      image: "./images/toys.jpeg"
    },
    {
      name: "Reading time",
      image: "./images/read.png"
    }
  ];

  function pickRandomActivity() {
    const randomIndex = Math.floor(Math.random() * activities.length);
    const activity = activities[randomIndex];

    document.getElementById("result").textContent = `🎉 Activity: ${activity.name}`;
    
    const image = document.getElementById("activityImage");
    image.src = activity.image;
    image.alt = activity.name;
    image.style.display = "block";
  }
