// api/send-email.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Ensure you have set your RESEND_API_KEY in Vercel Environment Variables
const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Only accept POST requests
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
    }

    const { email, message } = req.body;

    // Validate input
    if (!email || !message) {
      return res.status(400).json({ error: 'Email and message are required' });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'you@example.com',        // Replace with your verified sender
      to: email,
      subject: 'Message from SafeSpace Africa',
      html: `<p>${message}</p>`,      // Template literal fixed
    });

    if (error) {
      console.error('Resend Error:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: true, data });
  } catch (err: any) {
    console.error('Server Error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}