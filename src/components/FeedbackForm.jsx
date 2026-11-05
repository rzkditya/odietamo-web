import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const FeedbackForm = ({ bgImage, toEmail }) => {
  const inputStyle =
    "w-74 py-2 px-4 text-white border border-white rounded-3xl mb-2 focus:ring-2 focus:ring-red-300 focus:ring-offset-2 focus:ring-offset-black/40";

  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_6l0xmxi", "template_4sis7zt", form.current, {
        publicKey: "lmPdVR4Kxm25s8cl3",
      })
      .then(
        () => {
          alert("Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("Error sending email:", error.text);
          alert("Failed to send email. Please try again later.");
        },
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      className="flex flex-col justify-center items-center bg-cover bg-center w-full h-dvh gap-16 overflow-x-clip"
    >
      <h1 className="text-4xl font-bold text-white">Feedback</h1>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex gap-4 w-full justify-center items-center"
      >
        <fieldset className="flex flex-col w-full justify-center items-center text-white gap-4">
          <input type="hidden" name="to_email" value={toEmail} />
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message">Feedback</label>
            <textarea
              id="message"
              name="message"
              required
              className={inputStyle}
              placeholder="Enter your feedback here..."
            ></textarea>
          </div>

          <button
            type="submit"
            value="Send"
            className="self-center w-40 text-white py-2 px-4 rounded-lg border border-white hover:bg-main/80 transition-colors"
          >
            {loading ? "Sending..." : "Send Feedback"}
          </button>
        </fieldset>
      </form>
    </div>
  );
};
export default FeedbackForm;
