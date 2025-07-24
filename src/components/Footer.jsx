import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
          {/* Company Logo and Slogan */}
          <div className="flex flex-col items-start">
            <img src="/logo1.jpg" alt="TimelyPay Logo" className="h-12 mb-2" />
            <h2 className="text-2xl font-extrabold text-white mt-4">Mittal Tour & Travels</h2>
            <p className="font-semibold"> Anytime/Anywhere/Any Cab</p>
            <p className="text-2xl">We Proudly Say we provide Taxi Services in  <span>🇮🇳</span> </p>
          </div>

          {/* Important Links */}
          {/* <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="flex flex-col items-start">
              <h2 className="text-lg font-bold mb-3">Important Links</h2>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-gray-300">Sign in</a></li>
                <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              </ul>
            </div>
          </div> */}

          {/* Contact and Social Media */}
          <div className="flex flex-col items-start lg:items-end space-y-4">
          <h2 className="text-2xl font-extrabold text-white mt-4">Follow us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-xl hover:text-gray-300"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-xl hover:text-gray-300"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-xl hover:text-gray-300"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-xl hover:text-gray-300"><i className="fab fa-linkedin-in"></i></a>
            </div>

            <div>
              <p className="text-white"><strong>Phone:</strong> <a href="tel:6284882520" className="text-white">+91 6284882520</a> <br />
              <a href="tel:8289095036" className="text-white">+91 8289095036</a></p>
              <p><strong>Email:</strong> nitishmittal8765432@gmail.com</p>
              <p><strong>24x7</strong> - Anytime</p>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm">
            &copy; 2025 Website Developed by Fahaam Khan Contact:<a href="tel:6284448162" className="text-white">+91: 6284448162</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
