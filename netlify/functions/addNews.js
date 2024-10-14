const fs = require("fs");
const path = require("path");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    // Parse the news data sent in the request body

    const newsData = JSON.parse(event.body);
    console.log(newsData);
    // Path to the news.json file (inside the Netlify functions folder)
    const filePath = path.resolve(__dirname, "news.json");

    // Read existing news data
    let existingData = [];
    if (fs.existsSync(filePath)) {
      const rawData = fs.readFileSync(filePath);
      existingData = JSON.parse(rawData);
    }

    // Append the new news data
    existingData.push(newsData);

    // Save the updated data back to the JSON file
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "News data saved successfully" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to save news data",
        error: error.message,
      }),
    };
  }
};
