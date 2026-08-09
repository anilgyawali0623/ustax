import transporter from '../utils/mail.js';

export const sendContactEmail = async (req, res) => {
     console.log("Received contact email request:", req.body);
  try {
    const { fullName, email, phone, message } = req.body; 

    if (!fullName || !email || !phone || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Message from ${fullName}`,
      html: `
  <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;">
    
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px; overflow:hidden; border:1px solid #e5e7eb;">
      
      <!-- Header -->
      <div style="background:#2563EB; padding:16px 24px;">
        <h2 style="color:#ffffff; margin:0; font-size:20px;">New Contact Form Submission</h2>
      </div>

      <!-- Body -->
      <div style="padding:24px;">
        
        <p style="font-size:14px; color:#6b7280; margin-bottom:20px;">
          You have received a new inquiry through your website contact form.
        </p>

        <table style="width:100%; border-collapse:collapse; font-size:14px;">
          <tr>
            <td style="padding:10px 0; color:#374151;"><strong>Full Name:</strong></td>
            <td style="padding:10px 0; color:#111827;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding:10px 0; color:#374151;"><strong>Email Address:</strong></td>
            <td style="padding:10px 0; color:#111827;">${email}</td>
          </tr>
          <tr>
            <td style="padding:10px 0; color:#374151;"><strong>Phone Number:</strong></td>
            <td style="padding:10px 0; color:#111827;">${phone}</td>
          </tr>
          <tr>
            <td style="padding:10px 0; color:#374151; vertical-align:top;"><strong>Message:</strong></td>
            <td style="padding:10px 0; color:#111827; line-height:1.5;">
              ${message}
            </td>
          </tr>
        </table>

      </div>

      <!-- Footer -->
      <div style="background:#f9fafb; padding:16px 24px; text-align:center;">
        <p style="font-size:12px; color:#9ca3af; margin:0;">
          This message was sent from your website contact form.
        </p>
      </div>

    </div>
  </div>
`
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Message sent successfully' });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send message' });
  }
};