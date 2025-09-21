// 'use client';

// import { useForm } from 'react-hook-form';
// import emailjs from '@emailjs/browser';
// import { useState } from 'react';

// type FormData = { name: string; email: string; message: string };

// export default function Contact() {
//   const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
//   const [submitStatus, setSubmitStatus] = useState<string | null>(null);

//   const onSubmit = async (data: FormData) => {
//     try {
//       const templateParams = { from_name: data.name, from_email: data.email, message: data.message, to_email: 'ricardoleitaopedro@gmail.com' };
//       await emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '', templateParams, process.env.NEXT_PUBLIC_EMAILJS_USER_ID || '');
//       setSubmitStatus('Message sent successfully!');
//       reset();
//     } catch (error) {
//       setSubmitStatus('Failed to send message. Please try again.');
//       console.error('EmailJS error:', error);
//     }
//   };

//   return (
//     <section className="p-4 md:p-8">
//       <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
//       <div className="card max-w-md mx-auto bg-base-200">
//         <div className="card-body">
//           <h3 className="card-title text-xl md:text-2xl">Get in Touch</h3>
//           <p className="text-base-content/80 mb-4">Phone: +46 70 042 35 97 | Email: ricardoleitaopedro@gmail.com | Location: Gothenburg, Sweden</p>
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//             <div className="form-control">
//               <label htmlFor="name" className="label">
//                 <span className="label-text">Name</span>
//               </label>
//               <input id="name" type="text" {...register('name', { required: 'Name is required' })} className="input input-bordered w-full" />
//               {errors.name && <span className="text-error text-xs mt-1">{errors.name.message}</span>}
//             </div>
//             <div className="form-control">
//               <label htmlFor="email" className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input id="email" type="email" {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email address' } })} className="input input-bordered w-full" />
//               {errors.email && <span className="text-error text-xs mt-1">{errors.email.message}</span>}
//             </div>
//             <div className="form-control">
//               <label htmlFor="message" className="label">
//                 <span className="label-text">Message</span>
//               </label>
//               <textarea id="message" {...register('message', { required: 'Message is required' })} rows={4} className="textarea textarea-bordered w-full" />
//               {errors.message && <span className="text-error text-xs mt-1">{errors.message.message}</span>}
//             </div>
//             <button type="submit" className="btn btn-primary w-full">Send Message</button>
//             {submitStatus && <p className={`text-center text-sm ${submitStatus.includes('successfully') ? 'text-success' : 'text-error'}`}>{submitStatus}</p>}
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2>Contact Us</h2>
      <form style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Your Email" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea rows={5} placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
}