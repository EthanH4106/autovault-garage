import "./ContactForm.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        setLoading(true);

        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData
                }
            );

            const result = await response.json();

            if (response.ok && result.success) {
                toast.success("Message sent successfully!");
                form.reset();
            } else {
                toast.error(
                    "Message failed to send. Please try again."
                );
            }
        } catch (error) {
            toast.error(
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact">
            <Toaster
                position="top-center"
                toastOptions={{
                    style: {
                        background: "#202020",
                        color: "#ffffff",
                        border: "1px solid #008fd3"
                    }
                }}
            />

            <div className="contact-heading">
                <h2>Contact AutoVault</h2>
                <p>
                    Have a question, suggestion, or car you
                    want to see featured? Send us a message!
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <input
                    type="hidden"
                    name="access_key"
                    value="5f2cda9f-7206-4ab2-a43d-609a957233b3"
                />

                <input
                    type="hidden"
                    name="subject"
                    value="New AutoVault Contact Message"
                />

                <div className="contact-field">
                    <label htmlFor="contact-name">
                        Name
                    </label>
                    <input
                        id="contact-name"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                    />
                </div>

                <div className="contact-field">
                    <label htmlFor="contact-email">
                        Email
                    </label>
                    <input
                        id="contact-email"
                        type="email"
                        name="email"
                        placeholder="Your email"
                        required
                    />
                </div>

                <div className="contact-field">
                    <label htmlFor="contact-message">
                        Message
                    </label>
                    <textarea
                        id="contact-message"
                        name="message"
                        rows="6"
                        placeholder="Write your message..."
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="contact-submit"
                    disabled={loading}
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>
        </section>
    );
};

export default ContactForm;