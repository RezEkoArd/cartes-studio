// $lib/email.server.js

import {
  EMAIL_USER,
  EMAIL_PASS,
  EMAIL_TO,
  SMTP_HOST,
  SMTP_PORT,
} from "$env/static/private";
import nodemailer from "nodemailer";

// Create transporter dengan credential dari env
const createTransporter = () => {
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: false, // true untuk port 465, false untuk port lain
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
};

// Function for send email
export async function sendContactEmail({ name, email, subject, message }) {
  try {
    const transporter = createTransporter();

    // Email template
    const htmlContent = ` <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
            New Contact Form Message
            </h2>
            
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            </div>
            
            <div style="background-color: #fff; padding: 20px; border-left: 4px solid #0066cc; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(
              /\n/g,
              "<br>"
            )}</p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
            <p style="color: #888; font-size: 12px; text-align: center;">
            This message was sent from your website contact form.
            </p>
        </div>
        `;

    //send email
    const info = await transporter.sendMail({
      from: `"Website Contact" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      subject: `Contact Form: ${subject}`,
      html: htmlContent,
      replyTo: email,
    });
    console.log("Email sent: ", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Email sent error", error);
    return { success: false, error: error.message };
  }
}

//Function untuk send auto reply
// Function untuk send auto-reply ke user
export async function sendAutoReply({ name, email, subject }) {
  try {
    const transporter = createTransporter();

    const autoReplyHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0066cc;">Thank You for Contacting Us!</h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for reaching out to us. We have received your message about "<strong>${subject}</strong>" and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f0f8ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>📧 Your message has been received</strong></p>
            <p style="margin: 5px 0 0 0; color: #666;">We'll review it and respond as soon as possible.</p>
          </div>
          
          <p>Best regards,<br>
          <strong>Your Team</strong></p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #888; font-size: 12px;">
            This is an automated response. Please do not reply to this email.
          </p>
        </div>
      `;

    await transporter.sendMail({
      from: `"Your Company" <${EMAIL_TO}>`,
      to: email,
      subject: `Re: ${subject} - We've received your message`,
      html: autoReplyHtml,
    });

    return { success: true };
  } catch (error) {
    console.error("Auto-reply error:", error);
    return { success: false, error: error.message };
  }
}
