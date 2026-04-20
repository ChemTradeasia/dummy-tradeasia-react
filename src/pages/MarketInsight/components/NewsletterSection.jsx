import React from 'react';

export default function NewsletterSection() {
  return (
    <section 
      id="newsletter" 
      className="w-full bg-[url('https://cdn.chemtradeasia.com/blog-portal/bn-contact.webp')] bg-center bg-cover bg-no-repeat py-[50px] mt-15"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-8 lg:col-span-6">
            <h4 className="text-[18px] md:text-[32px] max-w-[300px] md:max-w-full font-semibold text-white leading-relaxed md:leading-normal mb-5">
              Don't miss out on our updates! <br className="hidden md:block" />
              Subscribe to our newsletter now
            </h4>
            
            <form 
              className="flex flex-col sm:flex-row gap-2 mb-5" 
              onSubmit={(e) => e.preventDefault()}
            >
              <input 
                type="email" 
                name="email" 
                placeholder="Enter your email address here" 
                className="flex-grow md:px-6 md:py-3 px-4 py-2 rounded-full bg-white border-0 focus:ring-2 focus:ring-[var(--color-light-blue)] text-gray-700 outline-none text-[14px] md:text-[16px]"
                required 
              />
              <button 
                type="submit" 
                className="md:px-7 md:py-3 px-6 py-2 bg-[var(--color-light-blue)] border-2 border-[var(--color-light-blue)] text-white rounded-full transition-all duration-300 text-[16px] whitespace-nowrap hover:bg-white hover:text-[var(--color-light-blue)] shadow-md"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-[14px] text-white max-w-[600px] leading-normal opacity-90">
              We're committed to your privacy. Tradeasia uses the information you provide to us to contact you about our relevant content, products, and services. For more information, check out our privacy policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
