import { useState } from "react";
import { sendCustomEmail } from "./Email";

import './EmailForm.css'

const App = () => {
  const [details, setDetails] = useState({
    subject: "",
    message: "",
    to_email: "legislativeguru@gmail.com",
  });

  const handleDetailsChange = (event) => {
    const { name, value } = event.target;

    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  };

  const handleSendEmail = () => {
    sendCustomEmail(details);
    setDetails(
        {
            subject: "",
            message: "",
            to_email: "legislativeguru@gmail.com",
          }
    )
  };

  return (
    <div className="email-form flex">
        <span>To:</span>
        <input
          name="to_email"
          value={details.to_email}
          onChange={handleDetailsChange}
          type="email"
          placeholder="Required.."
        />
        <span>Subject:</span>
        <input
          name="subject"
          value={details.subject}
          onChange={handleDetailsChange}
          type="text"
          placeholder="Required"
        />
        <span>Message</span>
        <textarea
          name="message"
          value={details.message}
          onChange={handleDetailsChange}
          type="text"
          placeholder="Required.."
        />
      <button
        disabled={!details.to_email || !details.subject || !details.message}
        onClick={handleSendEmail}
      >
        <span>Send Email</span>
      </button>
    </div>
  );
};

export default App;