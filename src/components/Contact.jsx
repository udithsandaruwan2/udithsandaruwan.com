import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const encode = (data) =>
        Object.keys(data)
            .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
            .join('&');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        const form = event.target;
        const formData = {
            'form-name': form.getAttribute('name'),
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
            'bot-field': form['bot-field'].value,
        };

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encode(formData),
            });

            if (!response.ok) {
                throw new Error('Something went wrong. Please try again.');
            }

            form.reset();
            setStatus('success');
        } catch (error) {
            setStatus('error');
            setErrorMessage(error.message || 'Unable to send your message right now.');
        }
    };

    return (
        <section id="contact" className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Contact Me</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Have a project idea, collaboration, or question? Send a message and I will get back to you.
                    </p>
                </motion.div>

                <motion.form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-dark-card border border-dark-border rounded-xl p-6 md:p-8 space-y-5"
                >
                    <input type="hidden" name="form-name" value="contact" />

                    <p className="hidden" aria-hidden="true">
                        <label>
                            Don’t fill this out if you are human:
                            <input name="bot-field" tabIndex={-1} autoComplete="off" />
                        </label>
                    </p>

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Your name"
                            className="w-full rounded-lg bg-black/50 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            className="w-full rounded-lg bg-black/50 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            placeholder="Tell me about your project or question..."
                            className="w-full rounded-lg bg-black/50 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30 transition-colors resize-y"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {status === 'submitting' ? (
                            'Sending...'
                        ) : (
                            <>
                                <Send className="h-4 w-4" />
                                Send Message
                            </>
                        )}
                    </button>

                    {status === 'success' && (
                        <p className="flex items-center gap-2 text-green-400 text-sm">
                            <CheckCircle2 className="h-4 w-4" />
                            Thanks! Your message was sent successfully.
                        </p>
                    )}

                    {status === 'error' && (
                        <p className="flex items-center gap-2 text-red-400 text-sm">
                            <AlertCircle className="h-4 w-4" />
                            {errorMessage}
                        </p>
                    )}

                    <p className="flex items-center gap-2 text-gray-500 text-sm pt-2">
                        <Mail className="h-4 w-4" />
                        Or email me directly at{' '}
                        <a href="mailto:hello@udithsandaruwan.com" className="text-gray-300 hover:text-white transition-colors">
                            hello@udithsandaruwan.com
                        </a>
                    </p>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
