import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar.jsx';
import Marquee from 'react-fast-marquee';
import Loader from '../components/Loader.jsx';  // Import the Loader component
import { Link as RouterLink } from "react-router-dom";
import Statistics from '../components/Statistics'; 
import Newsletter from '../components/Newsletter.jsx';
import Partners from '../components/Partners.jsx';
import Testimonials from '../components/Testinomials.jsx';
import Footer from '../components/Footer.jsx';
import Contact from '../components/Contact.jsx';
import CarSlider from '../components/ImageSlider.jsx';
export default function Home() {
  const [loading, setLoading] = useState(true);
  const aboutUsRef = useRef(null); // Create a ref for the About Us section
  const benefitsRef = useRef(null); // Create a ref for the Benefits section
  const partnersRef = useRef(null); // Create a ref for the Partners section
  const contactRef = useRef(null); // Create a ref for the Contact section

  const scrollToAboutUs = () => {
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBenefits = () => {
    if (benefitsRef.current) {
      benefitsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPartners = () => {
    if (partnersRef.current) {
      partnersRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar 
        onAboutUsClick={scrollToAboutUs} 
        onServiceClick={scrollToBenefits} 
        onPartnersClick={scrollToPartners}
        onContactClick={scrollToContact}
      />
      <div className="mt-16"> {/* Push below fixed navbar */}
  <Marquee speed={50} gradient={false} className="bg-blue-100 py-2 text-xl">
    We have Taxi booking Service everywhere in INDIA. Book your taxi and get the Best Deal within 15 minutes.
  </Marquee>
</div>
      {/* Hero Section */}
      <div className="h-screen w-full bg-gradient-to-r from-white to-gray-300 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-blue-950 font-extrabold mb-4">
          Mittal Tour & Travels - 24x7  <br className="hidden md:block" /> Services.
        </h1>
        <p className="text-lg sm:text-xl text-gray-800 mb-2">
          Get <span className="text-blue-600 underline">Best Deal</span> , <span className="text-blue-600 underline">Best Price</span> & <span className="text-blue-600 underline">Best Service</span> from us.
        </p>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          Book your cab from anywhere in <span>🇮🇳</span>
        </p>
        <RouterLink to='/booking' className="bg-indigo-500 text-white font-semibold py-2 px-4 sm:px-6 rounded-xl shadow-md hover:bg-purple-100">
          <span className="fas fa-car"></span> Book your taxi now
        </RouterLink>
      </div>


       <div className="min-h-full bg-gray-100 flex items-center justify-center p-4">
      <CarSlider />
    </div>
      {/* Features Section */}
      <div className="w-full bg-gradient-to-r from-white to-blue-100 flex flex-col items-center justify-center text-center p-4 mb-28">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-black font-extrabold mb-8 sm:mb-12">
          Make your Travel Journey more exciting with us 
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-serif text-gray-800 leading-relaxed max-w-2xl">
          Welcome to our premium cab service, where comfort, reliability, and safety come first. We provide 24/7 transportation  with a fleet of clean, well-maintained, air-conditioned cars to ensure a smooth and pleasant ride every time. Whether you need a quick city ride, an airport transfer, or an outstation trip, our professional and courteous drivers are here to serve you. Our services are designed to suit your needs, offering both one-way and round-trip options at competitive prices. We pride ourselves on punctuality, cleanliness, and customer satisfaction. With easy online booking and real-time ride tracking, your convenience is our priority. We also offer corporate cab services and special packages for daily commuters. Choose from a range of vehicle options including sedans, SUVs, and luxury cars based on your preference and budget. Travel with us and experience the ease and comfort of a dependable cab service you can trust.
        </p>
      </div>

      {/* Benefits Section */}
      <div ref={benefitsRef} className="w-full bg-gradient-to-r from-white to-white flex items-center justify-center p-4">
        <div className="flex flex-col md:flex-row items-center">
          <img 
            src="/logo1.jpg" 
            alt="Mittal Tour & Travels" 
            className="w-64 h-48 sm:w-80 sm:h-64 md:w-80 md:h-96 object-cover rounded-md shadow-lg mb-6 md:mb-0 md:mr-8 lg:mr-12"
          />
          <div className="text-center md:text-left max-w-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-black font-bold mb-4">
              Famous spot's where our Taxi's visit weekly
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
              <ul className="list-disc list-inside text-base sm:text-lg md:text-xl text-gray-800 mb-4">
  <li>Agra – Taj Mahal</li>
  <li>Jaipur – Amer Fort</li>
  <li>Varanasi – Ghats of the Ganges</li>
  <li>Amritsar – Golden Temple</li>
  <li>Shimla – Mall Road & Hills</li>
  <li>Manali – Rohtang Pass</li>
  <li>Leh-Ladakh – Pangong Lake</li>
  <li>Haridwar & Rishikesh – Holy Ganga and Yoga</li>
  <li>Delhi – Red Fort, India Gate</li>
  <li>Udaipur – City Palace & Lakes</li>
</ul>
            </p>
            {/* <ol className="list-disc list-inside text-sm sm:text-base md:text-lg text-gray-700 space-y-2">
              <li>Grow your sales by creating timely payment reminders with TimelyPay.</li>
              <li>Share payment reminders through email & WhatsApp.</li>
              <li>Easily generate recurring payment reminders with the best payment reminder app.</li>
              <li>Make online payments using payment gateways & UPI.</li>
              <li>Track accounts receivables and sales reports with TimelyPay.</li>
              <li>Get paid on time and maintain cash flow with TimelyPay.</li>
            </ol> */}
          </div>
        </div>
      </div>

      {/* About Us Section */}
      {/* <div ref={aboutUsRef} className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-100 to-white p-6">
        <div className="max-w-xl text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-black font-bold mb-4">Who We Are</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 font-serif">
            At TimelyPay, we specialize in simplifying your financial commitments with our innovative payment reminder software. Our platform offers seamless services to keep you on track with your payments, from sending timely reminders to making payments with ease. We also provide e-invoicing solutions to streamline your transactions, ensuring you never miss a due date. With a focus on reliability and user-friendly experiences, we are dedicated to helping individuals and businesses manage their finances efficiently and stress-free. Trust us to keep your payments timely and your financial life organized.
          </p>
        </div>
      </div> */}
      
      {/* Partners Section */}
      {/* <div ref={partnersRef} className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-white to-blue-100 p-6 mb-28">
        <div className="text-center max-w-4xl mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-black font-semibold font-serif mb-4">
            Our Partners
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 font-mono">
            Collaborating with top-tier partners to drive success and excellence.
          </p>
        </div>
        <Partners />
      </div> */}

      {/* Statistics Section */}
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 to-white p-6">
        <Statistics />
      </div>

      {/* Newsletter Section */}
      {/* <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-white to-gray-100 p-6">
        <Newsletter />
      </div> */}

      {/* Testimonials Section */}
      {/* <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-100 to-white p-6">
        <Testimonials/>
      </div> */}

      {/* Contact Section */}
      <div ref={contactRef} className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-white to-blue-50 p-6">
        <Contact/>
      </div>

      {/* Footer Section */}
      <div className="w-full bg-gradient-to-r from-blue-50 to-white p-6">
        <Footer/>
      </div>
    </>
  );
}
