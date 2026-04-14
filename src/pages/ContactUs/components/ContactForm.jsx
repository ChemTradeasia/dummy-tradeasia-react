import React, { useState } from 'react';

/**
 * Mock data for selectors
 */
const UOM_OPTIONS = [
  { id: 1, name: 'Metric Tons (MT)' },
  { id: 2, name: 'Kilograms (KG)' },
  { id: 3, name: 'Litres (L)' },
  { id: 4, name: 'Drums' },
  { id: 5, name: 'Bags' },
];

const INCOTERM_OPTIONS = [
  { id: 1, name: 'CIF' },
  { id: 2, name: 'CFR' },
  { id: 3, name: 'FOB' },
  { id: 4, name: 'EXW' },
  { id: 5, name: 'DDP' },
];

const SALUTATIONS = ['Mr.', 'Mrs.', 'Ms.'];

/**
 * ContactForm
 * A dynamic form that adapts based on the inquiry type (General, RFQ, Supplier).
 */
export default function ContactForm() {
  const [mode, setMode] = useState('General'); // 'General', 'Request For Quotation', 'Supplier'
  const [formData, setFormData] = useState({
    salutation: 'Mr.',
    firstName: '',
    lastName: '',
    company: '',
    country: '',
    email: '',
    phone: '',
    message: '',
    // RFQ Specific
    productBuying: '',
    quantity: '',
    uom: '',
    incoterm: '',
    destinationCountry: '',
    destinationPort: '',
    // Supplier Specific
    supplierType: 'Distributor',
    productSelling: '',
    // Checkboxes
    verification: false,
    newsletter: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', { mode, formData });
    alert('Thank you for your inquiry! This is a demonstration form.');
  };

  return (
    <div className="bg-white border-2 border-[var(--color-light-blue)] p-6 md:p-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Inquiry Type Selector */}
        <div className="flex flex-col space-y-2">
          <label className="text-[var(--color-text-dark)] text-[16px] font-semibold">
            How We Can Help You? <span className="text-red-500">*</span>
          </label>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            className="w-full bg-white border-2 border-[#E5E7E9] rounded-full px-6 py-3 text-[var(--color-text-dark)] focus:border-[#354FAE] focus:ring-0 outline-none transition-all appearance-none cursor-pointer"
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23354FAE\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\' /%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.25rem' }}
          >
            <option value="General">General Inquiry</option>
            <option value="Request For Quotation">Request For Quotation (RFQ)</option>
            <option value="Supplier">Become a Supplier</option>
          </select>
        </div>

        {/* --- DYNAMIC FIELDS: RFQ MODE --- */}
        {mode === 'Request For Quotation' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              <label className="text-[var(--color-text-dark)] text-[16px] font-semibold  tracking-wider">Product Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="productBuying"
                placeholder="Ex: Caustic Soda, Sodium Bicarbonate..."
                className="w-full rounded-full border-2 border-[#E5E7E9]  px-4 py-3 text-[#0A205C] focus:border-[#354FAE] outline-none transition-all"
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label className="text-[var(--color-text-dark)] text-[16px] font-semibold  tracking-wider">Quantity <span className="text-red-500">*</span></label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  className="w-full rounded-full border-2 border-[#E5E7E9]  px-4 py-3 text-[#0A205C] focus:border-[#354FAE] outline-none transition-all"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-[var(--color-text-dark)] text-[16px] font-semibold  tracking-wider">Unit <span className="text-red-500">*</span></label>
                <select
                  name="uom"
                  className="w-full rounded-full border-2 border-[#E5E7E9]  px-4 py-3 text-[#0A205C] focus:border-[#354FAE] outline-none transition-all cursor-pointer"
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Unit</option>
                  {UOM_OPTIONS.map(uom => (
                    <option key={uom.id} value={uom.name}>{uom.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col space-y-2">
                <label className="text-[var(--color-text-dark)] text-[16px] font-semibold  tracking-wider">Incoterm</label>
                <select
                  name="incoterm"
                  className="w-full rounded-full border-2 border-[#E5E7E9]  px-4 py-3 text-[#0A205C] focus:border-[#354FAE] outline-none transition-all cursor-pointer"
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  {INCOTERM_OPTIONS.map(opt => (
                    <option key={opt.id} value={opt.name}>{opt.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col space-y-2 col-span-1 md:col-span-2">
                <label className="text-[var(--color-text-dark)] text-[16px] font-semibold  tracking-wider">Destination (Country/Port)</label>
                <input
                  type="text"
                  name="destinationPort"
                  placeholder="Ex: Shanghai, China"
                  className="w-full rounded-full border-2 border-[#E5E7E9]  px-4 py-3 text-[#0A205C] focus:border-[#354FAE] outline-none transition-all"
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        )}

        {/* --- DYNAMIC FIELDS: SUPPLIER MODE --- */}
        {mode === 'Supplier' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              <label className="text-[var(--color-text-dark)] text-[16px] font-semibold  tracking-wider">Are you a Manufacture or Distributor?</label>
              <select
                name="supplierType"
                className="w-full rounded-full border-2 border-[#E5E7E9]  px-4 py-3 text-[#0A205C] focus:border-[#354FAE] outline-none transition-all cursor-pointer"
                onChange={handleInputChange}
              >
                <option value="Distributor">Distributor</option>
                <option value="Manufacture">Manufacture</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-[var(--color-text-dark)] text-[16px] font-semibold  tracking-wider">What product would you like to offer? <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="productSelling"
                placeholder="Product Name"
                className="w-full rounded-full border-2 border-[#E5E7E9]  px-4 py-3 text-[#0A205C] focus:border-[#354FAE] outline-none transition-all"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        )}

        {/* --- COMMON FIELDS --- */}
        <div className="space-y-6 pt-4 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="flex flex-col space-y-2 md:col-span-3">
              <label className="text-[var(--color-text-dark)] text-[16px] font-semibold  tracking-wider">Salutation <span className="text-red-500">*</span></label>
              <select
                name="salutation"
                className="w-full rounded-full border-2 border-[#E5E7E9]  px-4 py-3 text-[#0A205C] focus:border-[#354FAE] outline-none transition-all cursor-pointer"
                onChange={handleInputChange}
              >
                {SALUTATIONS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="flex flex-col space-y-2 md:col-span-4">
              <label className="text-[var(--color-text-dark)] text-[16px] font-semibold  tracking-wider">First Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full rounded-full border-2 border-[#E5E7E9]  px-4 py-3 text-[#0A205C] focus:border-[#354FAE] outline-none transition-all"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col space-y-2 md:col-span-5">
              <label className="text-[var(--color-text-dark)] text-[16px] font-semibold  tracking-wider">Last Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full rounded-full border-2 border-[#E5E7E9]  px-4 py-3 text-[#0A205C] focus:border-[#354FAE] outline-none transition-all"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="text-[var(--color-text-dark)] text-[16px] font-semibold  tracking-wider">Company <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                className="w-full rounded-full border-2 border-[#E5E7E9]  px-4 py-3 text-[#0A205C] focus:border-[#354FAE] outline-none transition-all"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-[var(--color-text-dark)] text-[16px] font-semibold  tracking-wider">Country <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="country"
                placeholder="Country Name"
                className="w-full rounded-full border-2 border-[#E5E7E9]  px-4 py-3 text-[#0A205C] focus:border-[#354FAE] outline-none transition-all"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="text-[var(--color-text-dark)] text-[16px] font-semibold  tracking-wider">Business Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full rounded-full border-2 border-[#E5E7E9]  px-4 py-3 text-[#0A205C] focus:border-[#354FAE] outline-none transition-all"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-[var(--color-text-dark)] text-[16px] font-semibold  tracking-wider">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="+1 234 567 890"
                className="w-full rounded-full border-2 border-[#E5E7E9]  px-4 py-3 text-[#0A205C] focus:border-[#354FAE] outline-none transition-all"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-[var(--color-text-dark)] text-[16px] font-semibold  tracking-wider">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="How can we help you?"
              className="w-full rounded-xl border-2 border-[#E5E7E9]  px-4 py-3 text-[#0A205C] focus:border-[#354FAE] outline-none transition-all resize-none"
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>

        {/* Checkboxes */}
        <div className="space-y-4 pt-4">
          <label className="flex items-start cursor-pointer group">
            <div className="relative flex items-center mt-1">
              <input
                type="checkbox"
                name="verification"
                className="peer h-5 w-5 cursor-pointer appearance-none rounded border-2 border-[#E5E7E9]  checked:bg-[#354FAE] checked:border-[#354FAE] transition-all"
                onChange={handleInputChange}
                required
              />
              <svg className="absolute h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <span className="ml-3 text-sm text-[#4A4A4A] leading-relaxed">
              I have read and accepted the <a href="/privacy-policy" className="text-[#354FAE] hover:underline">Privacy Policy</a> and <a href="/terms-conditions" className="text-[#354FAE] hover:underline">Terms & Conditions</a>. <span className="text-red-500">*</span>
            </span>
          </label>

          <label className="flex items-start cursor-pointer group">
            <div className="relative flex items-center mt-1">
              <input
                type="checkbox"
                name="newsletter"
                className="peer h-5 w-5 cursor-pointer appearance-none rounded border-2 border-[#E5E7E9]  checked:bg-[#354FAE] checked:border-[#354FAE] transition-all"
                onChange={handleInputChange}
              />
              <svg className="absolute h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <span className="ml-3 text-sm text-[#4A4A4A]">I would like to receive the latest updates and newsletters from Tradeasia International.</span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#354FAE] hover:bg-[#2A3E8A] text-white font-bold py-4  shadow-lg shadow-[#354FAE]/20 transition-all active:scale-[0.98] transform mt-4"
        >
          Submit Application
        </button>
      </form>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
