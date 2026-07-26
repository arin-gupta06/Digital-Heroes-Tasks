import heroImg from "../assets/hero.png";
import {useState} from "react";
import { createLead } from "../services/lead.services";

function Home() {
  const initialFormData = {
  name: "",
  email: "",
  budgetRange: "",
  message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await createLead(formData);
      console.log(data);
      setFormData(initialFormData);
    } catch (error) {
      console.error(error);
    }
  }
  

  const scrollFeature = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    })
  }
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-white shadow">
        <h1 className="text-2xl font-bold text-blue-700">
          WebCraft Agency
        </h1>

        <button onClick = {scrollFeature} className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Contact
        </button>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-10 py-16">

        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            Build Stunning Websites <br />
            For Your Business
          </h1>

          <p className="text-gray-600 text-lg">
            We help startups and businesses create fast, modern,
            and scalable websites that convert visitors into customers.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src={heroImg}
            alt="Hero"
            className="w-112.5"
          />
        </div>

      </section>

      {/* Lead Form */}
      <section className="bg-white py-16">
        <div className="max-w-xl mx-auto bg-gray-50 shadow-lg rounded-xl p-8">

          <h2 className="text-3xl font-bold text-center mb-8">
            Request a Free Consultation
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>

            <input
              type="text"
              name = "name"
              value = {formData.name}
              onChange = {handleChange}
              placeholder="Full Name"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name = "email"
              value = {formData.email}
              onChange = {handleChange}
              placeholder="Email Address"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select 
            name = "budgetRange"
            value = {formData.budgetRange}
            onChange = {handleChange}
            className="w-full border rounded-lg p-3">
              <option>Select Budget Range</option>
              <option>$500 - $1000</option>
              <option>$1000 - $5000</option>
              <option>$5000 - $10000</option>
              <option>$10000+</option>
            </select>

            <textarea
              rows="5"
              name = "message"
              value = {formData.message}
              onChange = {handleChange}
              placeholder="Tell us about your project..."
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Inquiry
            </button>

          </form>

        </div>
      </section>
      <section
        id="contact"
        className="bg-gray-100 py-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Let's Connect
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            I'd love to hear about your project or discuss potential opportunities.
          </p>

          <div className="mt-8 flex justify-center gap-8">
            <a
              href="https://www.linkedin.com/in/arin-gupta-2b94b032a/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/arin-gupta06"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gray-900 px-6 py-3 text-white font-medium hover:bg-gray-800 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-900 text-white">
        © 2026 WebCraft Agency [Built for Digital Heros]. All Rights Reserved.
      </footer>

    </div>
  );
}

export default Home;