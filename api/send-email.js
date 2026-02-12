import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { firstName, lastName, companyName, website, email, phone, message } = req.body;

        // Send email using Resend
        const data = await resend.emails.send({
            from: 'Njord Polaris Contact Form <onboarding@resend.dev>', // You'll update this after verifying your domain
            to: ['oliver.h@njordpolaris.com'],
            subject: `New Contact Form Submission from ${firstName} ${lastName}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        ${website ? `<p><strong>Website:</strong> ${website}</p>` : ''}
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        return res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Failed to send email' });
    }
}
