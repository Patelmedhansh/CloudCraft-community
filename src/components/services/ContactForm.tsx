import React from 'react';
import { Send, Loader } from 'lucide-react';
import { allServices } from '../../data/services';
import { useFormValidation } from '../../hooks/useFormValidation';
import type { ContactFormData, FormStatus } from '../../types/services';

const initialState: ContactFormData = {
  name: '',
  email: '',
  service: '',
  message: ''
};

const validationRules = {
  name: (value: string) => (!value ? 'Name is required' : undefined),
  email: (value: string) => {
    if (!value) return 'Email is required';
    if (!/\S+@\S+\.\S+/.test(value)) return 'Invalid email address';
    return undefined;
  },
  service: (value: string) => (!value ? 'Please select a service' : undefined),
  message: (value: string) => (!value ? 'Message is required' : undefined)
};

export default function ContactForm() {
  const [status, setStatus] = React.useState<FormStatus>('idle');
  const { values, setValues, errors, validate } = useFormValidation<ContactFormData>(
    initialState,
    validationRules
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mdkkpawn', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) throw new Error('Failed to send message');
      
      setStatus('success');
      setValues(initialState);
    } catch (error) {
      setStatus('error');
      console.error('Contact form error:', error);
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-dark-100 rounded-xl p-8 border border-gray-800">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Get in Touch</h3>
        <p className="text-gray-300">Book a free consultation to discuss your project</p>
      </div>

      {status === 'success' && (
        <div className="bg-green-500/10 text-green-400 p-4 rounded-lg mb-6">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-500/10 text-red-400 p-4 rounded-lg mb-6">
          Failed to send message. Please try again or email us directly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 bg-dark-200 border rounded-lg focus:ring-2 focus:ring-primary-500 text-white ${
              errors.name ? 'border-red-500' : 'border-gray-700'
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 bg-dark-200 border rounded-lg focus:ring-2 focus:ring-primary-500 text-white ${
              errors.email ? 'border-red-500' : 'border-gray-700'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
            Service of Interest
          </label>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={handleChange}
            className={`w-full px-4 py-2 bg-dark-200 border rounded-lg focus:ring-2 focus:ring-primary-500 text-white ${
              errors.service ? 'border-red-500' : 'border-gray-700'
            }`}
          >
            <option value="">Select a service</option>
            {allServices.map(service => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-500">{errors.service}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={values.message}
            onChange={handleChange}
            rows={4}
            className={`w-full px-4 py-2 bg-dark-200 border rounded-lg focus:ring-2 focus:ring-primary-500 text-white ${
              errors.message ? 'border-red-500' : 'border-gray-700'
            }`}
            placeholder="Tell us about your project or requirements..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors disabled:opacity-50"
        >
          {status === 'sending' ? (
            <>
              <Loader className="animate-spin mr-2 h-5 w-5" />
              Sending...
            </>
          ) : (
            <>
              Book a Meeting
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}