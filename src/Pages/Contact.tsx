import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Sonorousvoicelogo from "../Assets/Images/Sonorousvoicelogo.png";
import ContactForm from "../Components/ContactForm";

function Contact() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <div className="flex">
        {sidebarVisible && <Sidebar />}
        <div
          className="cursor-pointer hamburger-icon"
          onClick={toggleSidebar}
          style={{ fontSize: "24px", padding: "1px", color: "#140c0A" }}
          title="Menu"
        >
          <i className="fas fa-caret-right"></i>
        </div>
        <div className="flex-2 h-fit w-fit-content justify-center">
          <div className="logo-container mt-10 mb-10">
            <img
              src={Sonorousvoicelogo}
              alt="Sonorous Voice Logo"
              className="mx-auto w-full md:1/2 lg:w-9/12"
            />
          </div>

          <div className="bg-Licorice p-4 lg:p-20 mx-auto rounded-xl text-center shadow-2xl lg:w-8/12 xl:w-7/12 mb-20">
            <h1 className="text text-center p-6 font-bold text-brown-400 text-4xl lg:text-5xl">
              Contact Us
            </h1>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
