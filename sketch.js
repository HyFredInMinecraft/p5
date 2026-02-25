let responseText = "...";
let responses = []

function setup() {
  createCanvas(600, 400);
  askOllama("Hello");
}

function draw() {
  background(30);
  fill(255);
  textSize(16);
  text(responseText, 20, 40, width - 40);
}

async function askOllama(prompt) {
  try {
    const res = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama3",
        prompt: prompt,
        stream: false
      })
    });

    const data = await res.json();
    responseText = data.response;
    

  } catch (err) {
    responseText = "Error: " + err;
    console.error(err);
  }
}