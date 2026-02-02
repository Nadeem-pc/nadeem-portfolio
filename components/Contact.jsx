'use client'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const [result, setResult] = useState("");
    const formRef = useRef(null);
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
            );

            setResult("Thank you! Your message has been sent.");
            event.target.reset();
        } catch (error) {
            console.error("EmailJS error", error);
            setResult("Something went wrong. Please try again.");
        }
    };

    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/assets/icons/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">

            <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I&apos;d love to hear from you! If you have any questions, comments or feedback, please use the form below.</p>

            <form onSubmit={onSubmit} ref={formRef} className="max-w-2xl mx-auto">

                <input type="hidden" name="subject" value="Eliana Jade - New form Submission" />

                <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
                    <input type="text" placeholder="Enter your name" className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkTheme" required name="name" />

                    <input type="email" placeholder="Enter your email" className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkTheme" required name="email" />
                </div>
                <textarea rows="6" placeholder="Enter your message" className="w-full px-4 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white mb-6 dark:bg-darkTheme" required name="message"></textarea>
                <button type='submit' className="py-2 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border dark:border-white/30 dark:hover:bg-darkHover">
                Submit now
                    <img src="/assets/icons/right-arrow-white.png" alt="" className="w-4" />
                </button>
                <p className='mt-6 text-center'>{result}</p>
            </form>
        </div>
    )
}