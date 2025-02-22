// netlify/functions/handleReservation.js

exports.handler = async (event, context) => {
  // Atur header CORS
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // Tangani preflight OPTIONS request
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const data = JSON.parse(event.body);

    // Di sini kamu bisa tambahkan kode untuk menyimpan data,
    // misalnya ke Google Sheets atau database lain.
    // Untuk demo, kita cukup log data dan kirim respons sukses.
    console.log("Reservation data:", data);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ status: "success" }),
    };
  } catch (err) {
    console.error("Error processing request:", err);
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "Invalid request" }),
    };
  }
};
