import {
    FaArrowAltCircleDown,
    FaGithub,
    FaTelegram,
    FaWhatsapp,
  } from "react-icons/fa";
  import { FaHeadset } from "react-icons/fa6";
  import { MdEmail } from "react-icons/md";
  import { FaLinkedin } from "react-icons/fa";
  import { FaGraduationCap } from "react-icons/fa6";
  import React, { useRef } from "react";
  import emailjs from "@emailjs/browser";
  import toast from "react-hot-toast";
  
  const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_zj7ygwh",
          "template_t3tliiq",
          form.current,
          "uwgZwaCagt4DvyygT"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success('Your message is saved ')
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    return (
      <div className="bg-[#e5ecfb] w-full p-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-center flex items-center justify-center gap-2">
            <FaHeadset /> Get In <span className="text-[#57059e]">Touch</span>
          </h2>
        </div>
  
       
  
          <div className=" mx-auto  p-4 my-4 md:px-12 max-w-xl   bg-white   rounded-2xl shadow-2xl">
            <form ref={form} onSubmit={sendEmail}>
            <div>
              <input
                className="w-full  bg-[#e5ecfb]  text-gray-900 mt-2 p-3 rounded-lg border border-black focus:border-[#57059e] focus:outline-[#57059e] focus:shadow-outline"
                type="text"
                name="name"
                placeholder=" Name"
                required
              />
              <input
                className="w-full bg-[#e5ecfb]  text-gray-900 mt-2 p-3 rounded-lg border border-black focus:border-[#57059e] focus:outline-[#57059e] focus:shadow-outline"
                type="number"
                name="phone"
                placeholder="Phone"
                required
              />
  
              <input
                className="w-full bg-[#e5ecfb]  text-gray-900 mt-2 p-3 rounded-lg border border-black focus:border-[#57059e] focus:outline-[#57059e]  focus:shadow-outline"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <div className="my-4">
                <textarea
                  placeholder="Message"
                  required
                  name="message"
                  className="w-full h-32 bg-[#e5ecfb]  text-gray-900 mt-2 p-3 rounded-lg border border-black focus:border-[#57059e] focus:outline-[#57059e] focus:shadow-outline"
                ></textarea>
              </div>
              <div className="my-2 w md:w-1/3">
                <button type="submit" value="Send"
                  className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                        border border-black focus:border-[#57059e] focus:outline-[#57059e] focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </div>
            </form>
          </div>
        </div>
      
    );
  };
  
  export default Contact;
  