import type { APIRoute } from "astro";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export const prerender = false;

const getApiKey = () => {
  return import.meta.env.MAILERSEND_API_KEY || process.env.MAILERSEND_API_KEY;
};

const getFromEmail = () => {
  return import.meta.env.MAILERSEND_FROM_EMAIL || process.env.MAILERSEND_FROM_EMAIL || "test-68zxl27z9em4j905.mlsender.net";
};


export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "All fields are required",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Invalid email format",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Check if API key is configured
    const apiKey = getApiKey();
    const fromEmail = getFromEmail();
    
    if (!apiKey) {
      console.error("MailerSend API key not configured");
      console.log("Available env vars:", Object.keys(import.meta.env));
      return new Response(
        JSON.stringify({
          success: false,
          error: "Email service not configured. Please set MAILERSEND_API_KEY in your environment variables.",
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    console.log("API Key present:", !!apiKey);
    console.log("API Key length:", apiKey.length);
    console.log("From Email:", fromEmail);

    // Initialize MailerSend with the API key
    const mailerSend = new MailerSend({
      apiKey: apiKey,
    });

    // Configure email
    const sentFrom = new Sender(fromEmail, "CV Contact Form");

    const recipients = [
      new Recipient("joseantonio.nuevo@gmail.com", "Jose Antonio Nuevo"),
    ];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(new Sender(email, name))
      .setSubject(`Contact Form: ${subject}`).setHtml(`
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>

            <div style="margin-bottom: 15px;">
              <strong style="color: #4F46E5;">Name:</strong>
              <span style="margin-left: 10px; color: #333;">${name}</span>
            </div>

            <div style="margin-bottom: 15px;">
              <strong style="color: #4F46E5;">Email:</strong>
              <span style="margin-left: 10px; color: #333;">${email}</span>
            </div>

            <div style="margin-bottom: 15px;">
              <strong style="color: #4F46E5;">Subject:</strong>
              <span style="margin-left: 10px; color: #333;">${subject}</span>
            </div>

            <div style="margin-bottom: 20px;">
              <strong style="color: #4F46E5;">Message:</strong>
              <div style="margin-top: 10px; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #4F46E5; border-radius: 4px;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
              <p>This email was sent from your CV website contact form.</p>
              <p>You can reply directly to this email to respond to ${name}.</p>
            </div>
          </div>
        </div>
      `).setText(`
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This email was sent from your CV website contact form.
You can reply directly to this email to respond to ${name}.
      `);

    // Send email
    await mailerSend.email.send(emailParams);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Message sent successfully!",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    console.error("Error details:", {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      name: error instanceof Error ? error.name : undefined
    });

    // More specific error handling
    let errorMessage = "Failed to send message. Please try again.";

    if (error instanceof Error) {
      console.log("Error message:", error.message);
      // Don't expose sensitive API errors to users
      if (error.message.includes("API key") || error.message.includes("401")) {
        errorMessage = "Email service configuration error. Invalid API key.";
      } else if (error.message.includes("rate limit")) {
        errorMessage = "Too many requests. Please try again later.";
      } else if (error.message.includes("domain")) {
        errorMessage = "Email domain not verified. Please verify your sending domain.";
      }
    }

    // Check if it's a MailerSend API error
    if (error && typeof error === 'object' && 'statusCode' in error) {
      const apiError = error as any;
      if (apiError.statusCode === 422) {
        if (apiError.body?.message?.includes('from.email')) {
          errorMessage = "Email sending domain not verified. Please verify your domain in MailerSend.";
        } else if (apiError.body?.message?.includes('Trial accounts')) {
          errorMessage = "MailerSend trial limitation: Can only send to administrator email. Your account is pending approval.";
          console.log("Trial account limitation - consider using the administrator email or waiting for account approval");
        } else {
          errorMessage = "Invalid email data. Please check your input.";
        }
      } else if (apiError.statusCode === 401) {
        errorMessage = "Email service authentication failed. Please check API key.";
      }
    }

    return new Response(
      JSON.stringify({
        success: false,
        error: errorMessage,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};