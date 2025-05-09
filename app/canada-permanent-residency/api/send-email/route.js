import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Parse the request body to get form data
    const { name, email, phone, age, experience, qualification, country, message } = await request.json();

    // Create Nodemailer transporter with Gmail SMTP settings
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: 'vjcbangalore@gmail.com', // Recipient address
      subject: 'New Contact Form Submission From Main site',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Age: ${age}
        Experience: ${experience}
        Qualification: ${qualification}
        Country: ${country}
        Message: ${message}
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);

    // Return success response
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    // Handle errors correctly by checking if the error is an instance of Error
    if (error instanceof Error) {
      console.error('Error sending email:', error.message);
      return NextResponse.json({ message: 'Error sending email', error: error.message }, { status: 500 });
    }

    // Handle unknown errors
    console.error('Unknown error occurred:', error);
    return NextResponse.json({ message: 'Unknown error occurred', error: 'Unknown error' }, { status: 500 });
  }
}
