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
  function updateTime() {
    const now = new Date();
  
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
  
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 turns into 12
  
    // Add leading 0 if needed
    hours = hours < 10 ? hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
  
    document.getElementById("clock").innerText = timeString;
  }
  
  setInterval(updateTime, 1000);
  updateTime();
  