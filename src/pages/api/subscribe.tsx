import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// Define a type for the response data to ensure type safety
type Data = {
  data: any;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Retrieve environment variables
  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_GROUP_ID;

  if (req.method === 'POST') {
    // Check if userEmailAddress is provided in the request body
    if (!req.body.email) {
      res.status(400).json({ error: 'Email address is required', data: undefined });
      return;
    }

    try {
      const response = await axios.post(`https://api.mailerlite.com/api/v2/groups/${groupId}/subscribers`, {
        email: req.body.email
      }, {
        headers: {
          'Content-Type': 'application/json',
          'X-MailerLite-ApiKey': apiKey
        }
      });

      // Respond with the data from MailerLite API
      res.status(200).json({ data: response.data });
    } catch (error) {
      res.status(500).json({
        error: 'Failed to add subscriber to MailerLite group',
        data: undefined
      });
    }
  } else {
    // Limit the method to POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
