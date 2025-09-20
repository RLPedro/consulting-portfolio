'use client';

import { useForm } from 'react-hook-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

type FormData = { name: string; email: string; message: string };

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    try {
      const templateParams = { from_name: data.name, from_email: data.email, message: data.message, to_email: 'ricardoleitaopedro@gmail.com' };
      await emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '', templateParams, process.env.NEXT_PUBLIC_EMAILJS_USER_ID || '');
      setSubmitStatus('Message sent successfully!');
      reset();
    } catch (error) {
      setSubmitStatus('Failed to send message. Please try again.');
      console.error('EmailJS error:', error);
    }
  };

  return (
    <section className="p-4 md:p-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
      <Card className="max-w-md mx-auto bg-gray-800">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Get in Touch</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-300">
          <p className="mb-4">Phone: +46 70 042 35 97 | Email: ricardoleitaopedro@gmail.com | Location: Gothenburg, Sweden</p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-200">Name</label>
              <input id="name" {...register('name', { required: 'Name is required' })} className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white focus:border-blue-500 focus:ring-blue-500" />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
              <input id="email" type="email" {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email address' } })} className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white focus:border-blue-500 focus:ring-blue-500" />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-200">Message</label>
              <textarea id="message" {...register('message', { required: 'Message is required' })} rows={4} className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white focus:border-blue-500 focus:ring-blue-500" />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
            </div>
            <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">Send Message</Button>
            {submitStatus && <p className="mt-2 text-center text-sm">{submitStatus}</p>}
          </form>
        </CardContent>
      </Card>
    </section>
  );
}