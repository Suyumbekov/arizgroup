const { google } = require("googleapis");

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

exports.handler = async function (event, context) {
  try {
    const analytics = google.analytics("v3");
    const response = await analytics.data.ga.get({
      auth: oauth2Client,
      ids: "ga:" + process.env.GA_VIEW_ID, // Replace with your Google Analytics View ID
      "start-date": "30daysAgo",
      "end-date": "today",
      metrics: "ga:sessions",
    });

    const visitorCount = response.data.totalsForAllResults["ga:sessions"];

    return {
      statusCode: 200,
      body: JSON.stringify({ visitorCount }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to fetch data from Google Analytics",
      }),
    };
  }
};
