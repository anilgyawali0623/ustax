import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const FAQS = [
  {
    q: "How do I get started with UsTaxFiler?",
    a: "Simply fill out the contact form or call/WhatsApp us. We'll schedule a free consultation to understand your tax situation and provide a free quote.",
  },
  {
    q: "What documents do I need to provide?",
    a: "Typically W-2s, 1099s, investment statements, and any other income documents. We'll provide a detailed checklist after understanding your situation.",
  },
  {
    q: "How long does the tax filing process take?",
    a: "Simple returns can be completed within 2-3 business days. Complex returns may take 5-7 business days. We'll keep you updated throughout.",
  },
  {
    q: "Do you offer free tax consultation?",
    a: "Yes! We first prepare your tax returns entirely free — you only pay after reviewing your tax estimate. No obligation whatsoever.",
  },
  {
    q: "What if I receive an IRS notice after filing?",
    a: "We are open 365 days to assist with queries from tax agencies. Our representation/audit defense service is included at no additional charge.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left bg-transparent border-none cursor-pointer gap-4 font-body"
      >
        <span className="text-navy font-semibold text-sm">{q}</span>
        <span
          className="text-gold text-lg font-bold flex-shrink-0 transition-transform duration-200"
          style={{ transform: open ? "rotate(45deg)" : "none" }}
        >
          +
        </span>
      </button>
      {open && (
        <p className="text-gray-500 text-sm leading-relaxed pb-5">{a}</p>
      )}
    </div>
  );
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const change = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) {
      e.email = "Email is required";
    } else if (!EMAIL_RE.test(form.email.trim())) {
      e.email = "Enter a valid email address";
    }
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const submit = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("sending");
    try {
      console.log("Submitting contact form:");
      const res = await axios.post("/api/contact", form);
      console.log("Contact form submission response:", res);
      if (res.status === 200) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setErrors({});
    setForm({ name: "", email: "", phone: "", message: "" });
  };
 console.log("Contact page rendered", form, errors, status);
  return (
    <div>
      {/* ════ PAGE HERO ════ */}
      <div className="page-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 text-white/50 text-xs mb-4">
            <Link
              to="/"
              className="text-white/50 hover:text-gold no-underline transition-colors"
            >
              Home
            </Link>
            <span className="text-gold">/</span>
            <span className="text-white">Contact Us</span>
          </div>
          <h1 className="text-white font-display text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-white/65 text-lg max-w-xl mx-auto">
            We're here to help. Reach out to our team of tax experts for a free
            consultation.
          </p>
        </div>
      </div>

      {/* ════ CONTACT GRID ════ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* ── INFO CARD ── */}
            <div className="lg:col-span-2">
              <div className="bg-navy rounded-3xl p-10 h-full">
                <h3 className="font-display text-white text-2xl font-bold mb-2">
                  Contact Information
                </h3>
                <p className="text-white/55 text-sm mb-10">
                  Fill up the form and our team will get back to you within 24
                  hours.
                </p>

                <div className="space-y-7">
                  {[
                    {
                      icon: "📍",
                      label: "Office Address",
                      val: <>1333 Corporate Dr Suite 266 Irving, TX 75038</>,
                    },
                    {
                      icon: "📞",
                      label: "US Phone",
                      val: (
                        <a
                          href="tel:+14692319102"
                          className="text-gold hover:text-gold-light no-underline"
                        >
                          +1 (469) 231-9102
                        </a>
                      ),
                    },
                    {
                      icon: "✉️",
                      label: "Email",
                      val: (
                        <>
                          <a
                            href="mailto:Taxyogchaudhary@gmail.com"
                            className="text-gold hover:text-gold-light no-underline"
                          >
                            Taxyogchaudhary@gmail.com
                          </a>
                          <br />
                        </>
                      ),
                    },
                    {
                      icon: "🕐",
                      label: "Business Hours",
                      val: "10:30 AM – 7:30 PM CST, Mon–Fri",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-white/40 text-xs uppercase tracking-widest mb-1">
                          {item.label}
                        </div>
                        <div className="text-white/80 text-sm leading-relaxed">
                          {item.val}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/14692319102"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 mt-10 bg-[#25D366] text-white font-bold py-3 rounded-xl no-underline hover:opacity-90 transition-opacity text-sm"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* ── FORM CARD ── */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-10 shadow-card-lg border border-gray-100">
                {status === "success" ? (
                  <div className="text-center py-16">
                    <div className="text-6xl mb-5">✅</div>
                    <h3 className="font-display text-navy text-3xl font-bold mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-gray-500 mb-8">
                      Thank you for reaching out. Our team will contact you
                      within 24 hours.
                    </p>
                    <button className="btn-navy" onClick={resetForm}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-display text-navy text-2xl font-bold mb-1">
                      Get in Touch
                    </h3>
                    <p className="text-gray-400 text-sm mb-8">
                      Free consultation — no obligation whatsoever.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-xs font-semibold text-navy mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          placeholder="John Smith"
                          value={form.name}
                          onChange={change("name")}
                          className={`form-input ${errors.name ? "border-red-400" : ""}`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-navy mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          value={form.email}
                          onChange={change("email")}
                          className={`form-input ${errors.email ? "border-red-400" : ""}`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-xs font-semibold text-navy mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={form.phone}
                          onChange={change("phone")}
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-xs font-semibold text-navy mb-1.5">
                        Message *
                      </label>
                      <textarea
                        placeholder="Tell us about your tax situation..."
                        value={form.message}
                        onChange={change("message")}
                        rows={5}
                        className={`form-input resize-none ${errors.message ? "border-red-400" : ""}`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {status === "error" && (
                      <p className="text-red-500 text-xs mb-4 text-center">
                        Something went wrong sending your message. Please try
                        again.
                      </p>
                    )}

                    <button
                      onClick={submit}
                      disabled={status === "sending"}
                      className="btn-gold w-full text-center block disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? "Sending..." : "Submit →"}
                    </button>
                    <p className="text-center text-gray-400 text-xs mt-3">
                      🔒 Your information is 100% secure and will never be
                      shared.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}