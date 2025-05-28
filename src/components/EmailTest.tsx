'use client';

import { useState } from 'react';
import { sendEmail } from '@/lib/email';

export function EmailTest() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleTestEmail = async () => {
    setStatus('loading');
    try {
      await sendEmail({
        name: 'Test User',
        email: 'test@example.com',
        subject: 'Test Email',
        message: 'This is a test email to verify the EmailJS integration.'
      });
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Test email failed:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Email Test Component</h2>
      <button
        onClick={handleTestEmail}
        disabled={status === 'loading'}
        className={`px-4 py-2 rounded ${
          status === 'loading'
            ? 'bg-gray-400'
            : status === 'success'
            ? 'bg-green-500'
            : status === 'error'
            ? 'bg-red-500'
            : 'bg-blue-500'
        } text-white`}
      >
        {status === 'loading'
          ? 'Sending...'
          : status === 'success'
          ? 'Email Sent!'
          : status === 'error'
          ? 'Failed!'
          : 'Send Test Email'}
      </button>
      {status === 'success' && (
        <p className="text-green-600">Email sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600">Failed to send email. Check console for details.</p>
      )}
    </div>
  );
} 