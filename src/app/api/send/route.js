import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  // Get the data (email, subject, and message) from the request body
  const { email, subject, message } = await req.json();
  console.log(email, subject, message); // Log the incoming data for debugging
  
  try {
    // Send the email via Resend API
    const data = await resend.emails.send({
      from: fromEmail, // The email address from which to send
      to: [fromEmail, email], // Send to both the sender's email and the provided email
      subject: subject, // The subject of the email
      html: `<!-- Your HTML content goes here -->
        <h1>${subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New message submitted:</p>
        <p>${message}</p>
      `, // Use HTML instead of JSX/React components
    });

    // Return the response in JSON format
    return NextResponse.json(data);
  } catch (error) {
    // Log the error for debugging and return the error message
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message || "Failed to send email." });
  }
}
