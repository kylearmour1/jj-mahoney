



import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
    const form = useRef();
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_93nrlvq', 'template_qc37f9m', form.current, 'uCxgXAn6w5NWF6MmQ')
            .then((result) => {
                console.log(result.text);
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 6000); // Hide success message after 6 seconds
                form.current.reset(); // Reset the form fields after successful submission
            }, (error) => {
                console.log(error.text);
                setSubmitError(true);
                setTimeout(() => setSubmitError(false), 6000); // Hide error message after 6 seconds
            });
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 text-whitesmoke pb-16"> {/* Add bottom padding */}
            <h1 className="text-3xl font-bold">Get in touch. We love hearing from you.</h1>
            <p className="mt-4 text-lg">
                Please fill out our contact form with any comments, questions, or concerns and we will respond as soon as possible!
            </p>
            <h1 className="text-2xl font-semibold">For Reservation, Large Parties, or Banquet Email us At:</h1>
                <p className="mt-2 text-lg">
                    <a href="mailto:manager@jjmahoneys.com" className="text-blue-500 underline">manager@jjmahoneys.com</a>
                </p>
            <form ref={form} onSubmit={sendEmail} className="mt-8">
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="name">
                        Name:
                    </label>
                    <input type="text" name="name" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="email">
                        Email:
                    </label>
                    <input type="email" name="email" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-bold mb-2" htmlFor="message">
                        Message:
                    </label>
                    <textarea name="message" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <input type="submit" value="Submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
                </div>
            </form>

            {submitted && (
                <p className="mt-4 text-sm font-semibold text-green-600">Your message was sent successfully!</p>
            )}
            {submitError && (
                <p className="mt-4 text-sm font-semibold text-red-600">Failed to send the message. Please try again.</p>
            )}

            <div className="mt-8"> {/* Move Location and Hours into a separate container */}
                <h1 className="text-2xl font-semibold">Location</h1>
                <p className="mt-2 text-lg">8932 161st Ave NE Redmond, WA 98052</p>
               
                <h1 className="text-2xl font-semibold">Phone</h1>
                <p className="mt-2 text-lg">
                    <a href="tel:4255581866" className="text-blue-500 underline">425-558-1866</a>
                </p>

                <h1 className="text-2xl font-semibold mt-4">Hours</h1>
                <p className="mt-2 text-lg">
                    Monday-Thursday: 11am-11pm <br />
                    Friday: 11am-12am<br />
                    Saturday: 9:30am-12am<br />
                    Sunday: 9:30am-11pm
                </p>
            </div>
        </div>
    );
}

export default Contact;
