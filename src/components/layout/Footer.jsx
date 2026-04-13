const INFO_LINKS = [
  { label: 'Customer Support', href: '/customer-support' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms and Conditions', href: '/terms-conditions' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20">

      <div className="bg-[url('https://cdn.chemtradeasia.com/product-websites/soda-ash-dense/footer-bg.webp')] bg-cover bg-center bg-no-repeat py-13">
        <div className="container mx-auto">

          <a href="/" className="inline-block mb-1.5">
            <img
              src="https://cdn.chemtradeasia.com/cdn-cgi/image/width=163,height=60,fit=cover,format=auto,quality=75/chemtradeasia-new/tradeasia-logo-white.webp"
              alt="Tradeasia Logo"
              width="163"
              height="60"
              loading="lazy"
            />
          </a>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

            <div className="md:col-span-5">
              <p className="text-white font-semibold mb-3">Tradeasia International Pte. Ltd</p>
              <p className="text-white text-md mb-1">Keck Seng Tower</p>
              <p className="text-white text-md mb-1">133 Cecil Street #12-03</p>
              <p className="text-white text-md mb-3">Singapore, 069535, Republic of Singapore.</p>

              <a
                href="mailto:contact@chemtradeasia.com"
                className="flex items-center gap-3 text-white text-md hover:text-white transition-colors mb-2"
              >
                <img
                  src="https://cdn.chemtradeasia.com/chemtradeasia-new/email.webp"
                  alt="Email"
                  className="w-5 h-5 object-contain"
                />
                contact@chemtradeasia.com
              </a>

              <a
                href="tel:+65-62276365"
                className="flex items-center gap-3 text-white text-md hover:text-white transition-colors"
              >
                <img
                  src="https://cdn.chemtradeasia.com/chemtradeasia-new/call.webp"
                  alt="Phone"
                  className="w-5 h-5 object-contain"
                />
                +65 6227 6365
              </a>
            </div>

            <div className="md:col-span-3">
              <p className="text-white font-semibold mb-3">Informations</p>
              <ul className="space-y-1">
                {INFO_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-white text-md hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kolom 3 — Download & Sosial Media */}
            <div className="md:col-span-4">
              <p className="text-white font-semibold mb-3">Download Our Mobile App</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href="https://apps.apple.com/sk/app/tradeasia/id6478198700"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn.chemtradeasia.com/chemtradeasia-new/icon/download-app-appl.webp"
                    alt="Download on App Store"
                    className="w-[165px] rounded-lg border-1 border-white"
                    loading="lazy"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.app.btwob"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn.chemtradeasia.com/chemtradeasia-new/icon/download-app-andr.webp"
                    alt="Get it on Google Play"
                    className="w-[165px] h-[53.391px] rounded-lg border-1 border-white"
                    loading="lazy"
                  />
                </a>
              </div>

              <p className="text-white font-semibold mb-3">Connect With Us</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com/tradeasia"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 bg-[var(--color-light-blue)] rounded-full flex items-center justify-center hover:bg-white/25 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z" fill="#fff"/>
                  </svg>
                </a>

                <a
                  href="https://instagram.com/tradeasia"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 bg-[var(--color-light-blue)] rounded-full flex items-center justify-center hover:bg-white/25 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm138 0q0 164-115 279t-279 115-279-115-115-279 115-279 279-115 279 115 115 279zm108-410q0 38-27 65t-65 27-65-27-27-65 27-65 65-27 65 27 27 65zm-502-220q-7 0-76.5-.5t-105.5 0-96.5 3-103 10-71.5 18.5q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103-3 96.5 0 105.5.5 76.5-.5 76.5 0 105.5 3 96.5 10 103 18.5 71.5q20 50 58 88t88 58q29 11 71.5 18.5t103 10 96.5 3 105.5 0 76.5-.5 76.5.5 105.5 0 96.5-3 103-10 71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103 3-96.5 0-105.5-.5-76.5.5-76.5 0-105.5-3-96.5-10-103-18.5-71.5q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10-96.5-3-105.5 0-76.5.5zm768 630q0 229-5 317-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124t-124-322q-5-88-5-317t5-317q10-208 124-322t322-124q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z" fill="#fff"/>
                  </svg>
                </a>

                <a
                  href="https://linkedin.com/company/tradeasia"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 bg-[var(--color-light-blue)] rounded-full flex items-center justify-center hover:bg-white/25 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z" fill="#fff"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="bg-white py-4 border-b-5 border-[var(--color-light-blue)]">
        <p className="text-[#5d5d5d] text-sm text-center ">
          © {currentYear} Tradeasia International All rights reserved.
        </p>
      </div>

    </footer>
  );
}
