import React, { useState, FormEvent } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `New contact from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = `mailto:lakhdaralix@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <section id="contact" className="my-8">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form className="max-w-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className="w-full px-3 py-2 border rounded" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className="w-full px-3 py-2 border rounded" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            required 
            className="w-full px-3 py-2 border rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send</button>
      </form>
    </section>
  );
};

export default Contact;

