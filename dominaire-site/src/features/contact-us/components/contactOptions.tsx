"use client";
// React
import Link from "next/link";

// Icons
import { FaCalendar } from "react-icons/fa";
import { MdOutlineSouth } from "react-icons/md";

// Lenis
import { useLenis } from "lenis/react";

const ContactOptions = () => {
  const lenis = useLenis();

  return (
    <div className="flex gap-8">
      <div className="flex-1 h-full p-8 rounded-2xl bg-surface border-white/10 border flex flex-col gap-8">
        <p className="text-primary uppercase font-barlow-condensed res-text-21">
          INSTANT BOOKING
        </p>
        <p className="font-semibold text res-text-48 text-text">
          Schedule a 30-minute call
        </p>
        <p className="res-text-21 text-text">
          Skip the back-and-forth. Select a time that works for you and let's
          discuss your roadmap immediately.
        </p>
        <Link
          href={"https://calendly.com/abass-ibrahim-dominaire/30min"}
          target="_blank"
          className="py-4 px-8 rounded-full bg-text text-text-on-lightSurface flex items-center gap-4 justify-between"
        >
          <p className="uppercase font-semibold text-lg">Book via calendly</p>
          <FaCalendar className="text-2xl" />
        </Link>
      </div>
      <div className="flex-1 h-full p-8 rounded-2xl bg-surface border-white/10 border flex flex-col gap-8">
        <p className="text-primary uppercase font-barlow-condensed res-text-21">
          Inquiry
        </p>
        <p className="font-semibold res-text-48 text-text">Send a message</p>
        <p className="res-text-21 text-text">
          Prefer to outline your project first? Tell us about your goals, and
          our experts will reach out within 24 hours.
        </p>
        <button
          onClick={() => lenis?.scrollTo("#contact")}
          className="py-4 px-8 rounded-full border border-text flex items-center gap-4 justify-between"
        >
          <p className="uppercase font-semibold text-lg">Submit an enquiry</p>
          <MdOutlineSouth className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default ContactOptions;
