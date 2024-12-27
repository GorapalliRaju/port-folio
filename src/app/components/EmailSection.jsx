"use client";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const EmailSection = () => {
  return (
    <section id="contact" className="py-24 px-4 mt-6 md:px-12 bg-black text-white">
      <div className="text-center">
        <h5 className="text-xl font-bold mb-6 mt-16">Get in Touch</h5>
        <p className="text-[#ADB7BE] mb-8 max-w-3xl mx-auto">
          Feel free to reach out if you have any questions or opportunities to discuss. I'm always open to connecting!
        </p>
      </div>

      <div className="flex justify-center gap-12 flex-wrap">
        {/* Phone Number */}
        <div className="flex items-center gap-3 mb-8">
          <FaPhoneAlt className="text-primary-500 text-3xl" />
          <p className="text-lg font-medium">+91 7793919749</p>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3 mb-8">
          <FaEnvelope className="text-primary-500 text-3xl" />
          <p className="text-lg font-medium">gorapalliraju2004@gmail.com</p>
        </div>

        {/* GitHub */}
        <div className="flex items-center gap-3 mb-8">
          <FaGithub className="text-primary-500 text-3xl" />
          <Link href="https://github.com/gorapalliraju" target="_blank" className="text-lg font-medium hover:underline">
            github.com/gorapalliraju
          </Link>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-3 mb-8">
          <FaLinkedin className="text-primary-500 text-3xl" />
          <Link href="https://www.linkedin.com/in/raju-gorapalli-732963257/" target="_blank" className="text-lg font-medium hover:underline">
            linkedin.com/in/gorapalliraju
          </Link>
        </div>
      </div>

      <div className="text-center">
        <Link
          href="mailto:gorapalliraju2004@gmail.com"
          className="bg-primary-500 hover:bg-primary-600 text-white py-2.5 px-6 rounded-lg"
        >
          Send Email
        </Link>
      </div>
    </section>
  );
};

export default EmailSection;
