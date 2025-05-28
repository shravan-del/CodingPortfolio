'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendEmail } from '@/lib/email';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormError {
  field: keyof FormData;
  message: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<FormError[]>([]);

  const validateForm = (): boolean => {
    const newErrors: FormError[] = [];

    if (!formData.name.trim()) {
      newErrors.push({ field: 'name', message: 'Name is required' });
    }

    if (!formData.email.trim()) {
      newErrors.push({ field: 'email', message: 'Email is required' });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.push({ field: 'email', message: 'Invalid email format' });
    }

    if (!formData.subject.trim()) {
      newErrors.push({ field: 'subject', message: 'Subject is required' });
    }

    if (!formData.message.trim()) {
      newErrors.push({ field: 'message', message: 'Message is required' });
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('loading');

    try {
      await sendEmail(formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    setErrors(errors.filter(error => error.field !== name as keyof FormData));
  };

  const getFieldError = (field: keyof FormData) => {
    return errors.find(error => error.field === field)?.message;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-2 rounded-lg border ${
              getFieldError('name')
                ? 'border-red-500 dark:border-red-400'
                : 'border-gray-300 dark:border-gray-700'
            } bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500`}
          />
          {getFieldError('name') && (
            <p className="mt-1 text-sm text-red-500 dark:text-red-400">
              {getFieldError('name')}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-2 rounded-lg border ${
              getFieldError('email')
                ? 'border-red-500 dark:border-red-400'
                : 'border-gray-300 dark:border-gray-700'
            } bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500`}
          />
          {getFieldError('email') && (
            <p className="mt-1 text-sm text-red-500 dark:text-red-400">
              {getFieldError('email')}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full p-2 rounded-lg border ${
              getFieldError('subject')
                ? 'border-red-500 dark:border-red-400'
                : 'border-gray-300 dark:border-gray-700'
            } bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500`}
          />
          {getFieldError('subject') && (
            <p className="mt-1 text-sm text-red-500 dark:text-red-400">
              {getFieldError('subject')}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`w-full p-2 rounded-lg border ${
              getFieldError('message')
                ? 'border-red-500 dark:border-red-400'
                : 'border-gray-300 dark:border-gray-700'
            } bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500`}
          />
          {getFieldError('message') && (
            <p className="mt-1 text-sm text-red-500 dark:text-red-400">
              {getFieldError('message')}
            </p>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={status === 'loading'}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-2 px-4 rounded-lg text-white font-medium transition-colors ${
            status === 'loading'
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {status === 'loading' ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </div>
          ) : (
            'Send Message'
          )}
        </motion.button>
      </form>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 rounded-lg flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Message sent successfully! I'll get back to you soon.
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-lg flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Failed to send message. Please try again or contact me directly.
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}; 