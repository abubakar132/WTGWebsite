import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_7154rsh', // Replace with your EmailJS service ID
      'template_au0c11c', // Replace with your EmailJS template ID
      formData,
      'gTKbWhLZDckBSVVfI' // Replace with your EmailJS user ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({
          from_name: '',
          from_email: '',
          message: ''
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send the message. Please try again.');
      });
  };

  return (
    <div id="contact" className="contact-form-container bg-black text-white duration-300 p-10 neon-glow rounded-lg">
      <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="from_name" className="block text-sm font-medium">Name</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 neon-input rounded-md"
          />
        </div>
        <div>
          <label htmlFor="from_email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 neon-input rounded-md"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 neon-input rounded-md"
            rows="4"
          />
        </div>
        <button type="submit" className="bg-neonPink text-dark shadow-neon px-4 py-2 rounded-md hover:bg-dark hover:text-neonPink transition duration-300">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
