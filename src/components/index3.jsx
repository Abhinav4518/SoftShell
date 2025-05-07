import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', type: '', message: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Form submitted (frontend only)');
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-10">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4 text-left px-4">
        <input name="name" required placeholder="Name" onChange={handleChange} className="p-3 rounded border" />
        <input name="email" type="email" required placeholder="Email" onChange={handleChange} className="p-3 rounded border" />
        <input name="company" placeholder="Company" onChange={handleChange} className="p-3 rounded border" />
        <select name="type" required onChange={handleChange} className="p-3 rounded border">
          <option value="">Select License Type</option>
          <option value="Office365">Office 365</option>
          <option value="Adobe">Adobe</option>
          <option value="Other">Other</option>
        </select>
        <textarea name="message" rows="4" required placeholder="Message" onChange={handleChange} className="p-3 rounded border"></textarea>
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;
