import { PortfolioIcon, QualityIcon, SupplyChainIcon } from '../../components/icons/SupplyChain';

const STRENGTHS = [
  {
    id: 'portfolio',
    title: 'Comprehensive Portfolio',
    description:
      'We offer a wide range of required quality products that cater to various industries, ensuring a suitable solution for your needs.',
    Icon: PortfolioIcon,
  },
  {
    id: 'quality',
    title: 'Quality Inspection',
    description:
      'Our experienced grader conducts thorough inspections to ensure that every soda ash dense product meets our required quality standards.',
    Icon: QualityIcon,
  },
  {
    id: 'supply',
    title: 'Reliable Supply Chain',
    description:
      'Our robust supply chain network ensures consistent and timely delivery of products, minimizing any disruptions to your operations.',
    Icon: SupplyChainIcon,
  },
];

export default function SupplyChain() {
  return (
    <section className="py-[50px] md:py-[80px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 mdgap-10 items-center gap-0"> 
          <div>
            <img
              src="https://cdn.chemtradeasia.com/product-websites/supply-chain-img.webp"
              alt="Supply Chain"
              className="w-full md:w-[95%]"
            />
          </div>
          <div className="pl-0 mt-8 md:pl-8 md:mt-0">
            <h3 className="mb-3 text-[18px] md:text-[44px] leading-tight md:leading-normal sm:text-[18px]">Our Strength as Your Business Partner</h3>

            {STRENGTHS.map(({ id, title, description, Icon }, index) => (
              <div
                key={id}
                className="flex gap-4 md:gap-5 py-4 md:py-5.5 border-b border-gray-200 md:items-center items-start"
              >
                <span className="shrink-0 flex items-start md:items-center justify-center ">
                  <Icon className="w-[45px] h-[45px] md:w-[60px] md:h-[60px] sm:w-[40px] sm:h-[40px]" />
                </span>
                <div>
                  <h5 className="text-[var(--color-light-blue)] text-[18px] md:text-[22px] mb-1 md:mb-2">{title}</h5>
                  <p className="text-[14px] leading-[24px] md:text-[16px] md:leading-[29px]">{description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
