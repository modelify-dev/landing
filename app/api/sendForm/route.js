import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey('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');

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the request body
    const { firstName, lastName, email, website, comment } = body;

    // Prepare email content
    const message = {
      to: 'info@modelify.co', 
      from: 'info@modelify.co', 
      subject: 'New Application Submission',
      text: `You received a new submission:
        - First Name: ${firstName}
        - Last Name: ${lastName}
        - Email: ${email}
        - Website: ${website}
        - Comment: ${comment}`,
    };

    // Send email using SendGrid
    const sendgridResponse = await sendgrid.send(message);

    // Log and return SendGrid's response for debugging purposes
    console.log('SendGrid response:', sendgridResponse);

    // Return success response with SendGrid's response object
    return new Response(JSON.stringify({
      success: true,
      message: 'Form submitted successfully',
      sendgridResponse,
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);

    // Return error response along with SendGrid's error message
    return new Response(JSON.stringify({
      success: false,
      message: 'Error sending email',
      error: error.response ? error.response.body : error.message, // SendGrid's error details if available
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}