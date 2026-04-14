import { useState, useEffect, useCallback, useRef } from 'react';
import {
  DetergentIcon,
  GlassIcon,
  ChemicalIcon,
  MetalIcon,
} from '../../components/icons/ProductApplications';

const APPLICATIONS = [
  {
    id: 'detergent',
    title: 'Detergent Industry',
    description: 'Soda ash dense softens water during washing and helps regulate pH in production processes.',
    image: 'https://cdn.chemtradeasia.com/product-websites/product-applications/detergent.webp',
    Icon: DetergentIcon,
  },
  {
    id: 'glass',
    title: 'Glass and Ceramics',
    description: 'An essential raw material in glass manufacturing of soda-lime-silica glass used in flat glass.',
    image: 'https://cdn.chemtradeasia.com/product-websites/product-applications/glass-ceramics.webp',
    Icon: GlassIcon,
  },
  {
    id: 'chemical',
    title: 'Chemical Industry',
    description: 'Soda ash dense is widely used as a pH regulator and as a raw material in the production of various industrial chemicals.',
    image: 'https://cdn.chemtradeasia.com/product-websites/product-applications/chemical.webp',
    Icon: ChemicalIcon,
  },
  {
    id: 'metal',
    title: 'Metal and Steel',
    description: 'Used in the steel industry to eliminate sulphur from iron ore and smooth blast furnace operations during iron and steel production.',
    image: 'https://cdn.chemtradeasia.com/product-websites/product-applications/metal-steel.webp',
    Icon: MetalIcon,
  },
];

const GAP = 22;
const N = APPLICATIONS.length;

export default function ProductApplications() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [offset, setOffset] = useState(3);
  const [animated, setAnimated] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      let newVisible = 3;
      if (window.innerWidth <= 640) {
        newVisible = 1;
      } else if (window.innerWidth <= 1024) {
        newVisible = 2;
      }

      if (newVisible !== visibleCount) {
        setVisibleCount(newVisible);
        setOffset(newVisible);
        setAnimated(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [visibleCount]);

  useEffect(() => {
    if (!containerRef.current) return;
    const calculate = () => {
      const w = containerRef.current.getBoundingClientRect().width;
      setCardWidth((w - GAP * (visibleCount - 1)) / visibleCount);
    };
    calculate();
    const ro = new ResizeObserver(calculate);
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [visibleCount]);

  const EXTENDED = [
    ...APPLICATIONS.slice(-visibleCount),
    ...APPLICATIONS,
    ...APPLICATIONS.slice(0, visibleCount),
  ];

  const slideUnit = cardWidth + GAP;
  const translateX = -(offset * slideUnit);
  // const dotIndex = ((offset - VISIBLE) % N + N) % N;
  const goNext = useCallback(() => {
    if (animated) return;
    setAnimated(true);
    setOffset(prev => prev + 1);
  }, [animated]);

  const goPrev = useCallback(() => {
    if (animated) return;
    setAnimated(true);
    setOffset(prev => prev - 1);
  }, [animated]);

  // const goToIndex = useCallback((i) => {
  //   if (animated) return;
  //   setAnimated(true);
  //   setOffset(VISIBLE + i);
  // }, [animated]);

  const handleTransitionEnd = useCallback(() => {
    if (offset >= visibleCount + N) {
      setAnimated(false);
      setOffset(visibleCount);
    } else if (offset < visibleCount) {
      setAnimated(false);
      setOffset(visibleCount + N - 1);
    } else {
      setAnimated(false);
    }
  }, [offset, visibleCount]);

  /* ── Auto-play ── */
  useEffect(() => {
    const timer = setInterval(goNext, 4500);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <section className="relative container mx-auto">
      <div className="relative p-5.5 md:p-[50px] overflow-hidden">

        <img
          src="https://cdn.chemtradeasia.com/product-websites/application-image.webp"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(93.62deg,_rgba(18,60,105,0.98)_0.6%,_rgba(18,60,105,0.9)_56.92%,_rgba(18,60,105,0.7)_99.4%)]" />

        <div className="relative z-10">
          
          <h5 className="text-white text-center text-[18px] mb-0 md:text-[24px] md:mb-5">Product Applications</h5>
          <h3 className="text-white text-center text-[18px] sm:text-[34px] sm:mb-7 md:text-[44px] md:mb-12">Uses of Soda Ash Dense</h3>

          <div className="relative md:mt-12.5 mt-0">

          <button
            onClick={goPrev}
            aria-label="Previous slide"
            className="absolute -left-3.5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 border-2 border-[var(--color-light-blue)] rounded-full shadow-md flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8.00984 12C8.00984 12.2509 8.10564 12.5018 8.29685 12.6931L14.3166 18.7128C14.6995 19.0957 15.3204 19.0957 15.7032 18.7128C16.0859 18.33 16.0859 17.7093 15.7032 17.3263L10.3765 12L15.703 6.67371C16.0857 6.29078 16.0857 5.67011 15.703 5.28737C15.3202 4.90425 14.6993 4.90425 14.3164 5.28737L8.29666 11.307C8.10543 11.4983 8.00984 11.7492 8.00984 12Z" fill="var(--color-light-blue)" />
            </svg>
          </button>

          <div ref={containerRef} className="overflow-hidden mx-2.5">
            <div
              className="flex"
              style={{
                gap: `${GAP}px`,
                transform: `translateX(${translateX}px)`,
                transition: animated
                  ? 'transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  : 'none',
                willChange: 'transform',
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {EXTENDED.map((item, i) => {
                const { title, description, image, Icon } = item;
                return (
                  <div
                    key={i}
                    style={{ flex: `0 0 ${cardWidth}px`, minWidth: 0 }}
                    className="bg-white flex flex-col overflow-hidden"
                  >
                    <div className="flex-1 p-5 md:p-7.5">
                      <Icon className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]" />
                      <h5 className="mt-5 mb-2.5 text-[18px] leading-[26px] md:text-[22px] md:leading-normal">{title}</h5>
                      <p className="text-[12px] leading-[24px] md:text-[16px] md:leading-[29px] text-[var(--color-gray-text)]">
                        {description}
                      </p>
                    </div>
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-37.5 object-cover"
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={goNext}
            aria-label="Next slide"
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 border-2 border-[var(--color-light-blue)] rounded-full shadow-md flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15.9902 12C15.9902 12.2509 15.8944 12.5018 15.7032 12.6931L9.68341 18.7128C9.30048 19.0957 8.67962 19.0957 8.29685 18.7128C7.91407 18.33 7.91407 17.7093 8.29685 17.3263L13.6235 12L8.29703 6.67371C7.91426 6.29078 7.91426 5.67011 8.29703 5.28737C8.67981 4.90425 9.30066 4.90425 9.6836 5.28737L15.7033 11.307C15.8946 11.4983 15.9902 11.7492 15.9902 12Z" fill="var(--color-light-blue)" />
            </svg>
          </button>
        </div>

        

        </div> 

      </div>
    </section>

  );
}
