import emailjs from '@emailjs/browser';

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  const templateParams = {
    from_name: data.name,
    reply_to: data.email,
    subject: data.subject,
    message: data.message,
  };

  try {
    await emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!); // Initialize with your public key
    
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // Service ID
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Template ID
      templateParams
    );

    if (response.status === 200) {
      return response;
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}; 