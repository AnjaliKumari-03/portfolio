import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { profile } from "../data/portfolioData";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error | unconfigured

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("unconfigured");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden scroll-mt-20 py-28"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-3">
            Let's build something
          </h2>
          <p className="text-muted mb-6 max-w-lg">
            Open to full-stack roles and collaborations — send a message below,
            or reach out directly.
          </p>
          <div className="flex flex-wrap gap-6 mb-10">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 text-sm text-ink hover:text-roseDeep transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-rose/15 text-roseDeep flex items-center justify-center">
                <FaEnvelope size={12} />
              </span>
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm text-ink hover:text-roseDeep transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-sage/15 text-sage flex items-center justify-center">
                <FaPhone size={12} />
              </span>
              {profile.phone}
            </a>
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl rounded-[2.5rem] p-8 md:p-10 neu-panel space-y-5"
        >
          <div>
            <label className="text-xs text-muted block mb-2">Name</label>
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full neu-input rounded-full px-5 py-3 text-ink placeholder:text-muted/60 outline-none transition-shadow"
            />
          </div>
          <div>
            <label className="text-xs text-muted block mb-2">Email</label>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full neu-input rounded-full px-5 py-3 text-ink placeholder:text-muted/60 outline-none transition-shadow"
            />
          </div>
          <div>
            <label className="text-xs text-muted block mb-2">Message</label>
            <textarea
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell me about the opportunity or project..."
              className="w-full neu-input rounded-3xl px-5 py-3 text-ink placeholder:text-muted/60 outline-none transition-shadow"
            />
          </div>

          <motion.button
            type="submit"
            disabled={status === "sending"}
            whileTap={{ scale: 0.97 }}
            className="w-full neu-btn text-white font-medium py-3 rounded-full transition disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </motion.button>

          <AnimatePresence>
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-sm text-sage"
              >
                Message sent — thank you! I'll get back to you soon.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-sm text-roseDeep"
              >
                Something went wrong — please try again, or email me directly at{" "}
                {profile.email}.
              </motion.p>
            )}
            {status === "unconfigured" && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-sm text-roseDeep"
              >
                Email isn't set up yet — add your EmailJS keys to{" "}
                <code>.env</code> (see README).
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
