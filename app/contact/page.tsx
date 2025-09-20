'use client'; // Marks this as a Client Component for form handling

import { useForm } from 'react-hook-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser'; // Install with: npm install @emailjs/browser
import { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID)
  console.log(process.env.NEXT_PUBLIC_EMAILJS_USER_ID)
  console.log(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID)

  const onSubmit = async (data: FormData) => {

    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_email: 'ricardoleitaopedro@gmail.com', // Your email
      };

      // emailjs.init({
      //   publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      // });

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ''
      );

      setSubmitStatus('Message sent successfully!');
      reset(); // Clear form
    } catch (error) {
      setSubmitStatus('Failed to send message. Please try again.');
      console.error('EmailJS error:', error);
    }
  };

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                {...register('name', { required: 'Name is required' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Invalid email address',
                  },
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                {...register('message', { required: 'Message is required' })}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
            </div>

            <Button type="submit" className="w-full bg-blue-600 text-white">
              Send Message
            </Button>

            {submitStatus && <p className="mt-2 text-center text-sm">{submitStatus}</p>}
          </form>
        </CardContent>
      </Card>
    </section>
  );
}