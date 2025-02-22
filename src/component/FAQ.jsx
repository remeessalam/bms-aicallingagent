import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import groupImg from "../assets/images/group.png";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How does the AI handle inbound and outbound calls?",
    answer:
      "Our AI system can initiate outbound calls for sales, reminders, or follow-ups, and also handle inbound calls by answering queries, gathering information, and transferring calls when needed.",
  },
  {
    question: "Can I customize the scripts for calls?",
    answer:
      "Yes, you can fully customize the AI's call scripts to match your business needs, tone, and customer interaction style. We also offer script optimization for better engagement.",
  },
  {
    question: "How does the AI manage appointment scheduling?",
    answer:
      "The AI integrates with your calendar and scheduling tools to book, reschedule, or cancel appointments. It ensures time slot availability and sends reminders to reduce no-shows.",
  },
  {
    question: "Is the call log and conversation tracking secure?",
    answer:
      "Yes, we use end-to-end encryption and secure cloud storage to protect call logs and conversation data, ensuring compliance with privacy regulations like GDPR and HIPAA.",
  },
  {
    question: "Can I access call logs and appointment details at any time?",
    answer:
      "Absolutely! You will have a dashboard where you can review call logs, listen to recordings, track appointment schedules, and analyze AI-driven insights in real-time.",
  },
  {
    question:
      "How quickly can I get started with the AI call handling solution?",
    answer:
      "Getting started is easy! After an initial consultation, setup can take as little as a few days, depending on customization requirements and integrations.",
  },
  {
    question:
      "Does the AI integrate with other tools I use, like CRMs or calendars?",
    answer:
      "Yes, our AI seamlessly integrates with popular CRMs, scheduling tools, and customer support platforms, ensuring smooth workflow automation for your business.",
  },
];

const FAQ = () => {
  return (
    <>
      <div
        id="faq"
        className="wrapper text-white flex flex-col items-center justify-center"
      >
        <h3 className="text-4xl font-bold text-white capitalize">
          Frequently asked questions
        </h3>
        <div className="mt-10 flex flex-col gap-4 w-full">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>
      <section>
        <div
          data-aos="fade-up"
          className="flex flex-col gap-3 w-full justify-center items-center pt-[3rem]"
        >
          <Link
            className="primary-btn font-medium w-[20rem] flex justify-center py-3"
            to={"#"}
          >
            Start your own AI company
          </Link>
          {/* <JoinEntrepreneurs /> */}
        </div>
        <div className="flex w-full justify-center items-center gap-2 pt-[1rem]">
          <img src={groupImg} alt="group" className="h-[1.2rem]" />
          <p className="text-[.7rem] font-light text-white/60">
            Join 250+ like-minded Entrepreneurs
          </p>
        </div>{" "}
      </section>
    </>
  );
};

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col gap-4 bg-[#111111] rounded-md px-4 py-6 w-full"
    >
      <div className="flex justify-between gap-5 w-full font-medium text-start">
        {faq.question}{" "}
        {isOpen ? (
          <FaMinus className="text-xl" />
        ) : (
          <FaPlus className="text-xl" />
        )}
      </div>
      {isOpen && (
        <p className="p-[.5rem] text-white/80 text-start">{faq.answer}</p>
      )}
    </button>
  );
};
export default FAQ;
