// api/contact/+server.js

import { sendAutoReply, sendContactEmail } from "$lib/email.server";
import { error, json } from "@sveltejs/kit";

export async function POST({ request }) {
  try {
    const formData = await request.json();
    const { name, subject, email, message } = formData;

    // Validation
    if (!name || !email || !subject || !message) {
      return json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    //Email validation (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return json(
        { success: false, error: "Invalid Email format" },
        { status: 400 }
      );
    }

    //Send main to you
    const emailResult = await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    if (!emailResult.success) {
      return json(
        { success: false, error: "Failed to send mail" },
        { status: 500 }
      );
    }

    // send Auto Reply
    await sendAutoReply({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
    });

    return json({
      success: true,
      message: "Email successfully",
    });
    //
  } catch (error) {
    console.error("Contact Api error: ", error);
    return json(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
