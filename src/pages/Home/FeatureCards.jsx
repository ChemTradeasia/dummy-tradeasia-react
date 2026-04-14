import { HomeIcon1, HomeIcon2, HomeIcon3 } from '../../components/icons/Home';

const FEATURES = [
  {
    icon: HomeIcon1,
    title: 'Our Global Presence',
    description: 'Meeting your business needs through innovative solutions wherever you are.',
  },
  {
    icon: HomeIcon2,
    title: 'Get Trend and Market Analysis',
    description: 'Explore trends, analysis, and product demand updates.',
  },
  {
    icon: HomeIcon3,
    title: 'Request a Product Quote',
    description: 'Get a customized quotation based on your product needs.',
  },
];

export default function FeatureCards() {
  return (
    <section className="relative -mt-[100px] z-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white p-[30px] sm:p-[30px] md:p-7.5 shadow-[0px_4px_20px_0px_#0000001a] text-center transform transition duration-300 hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  <Icon />
                </div>
                <h1 className="font-semibold text-[14px] leading-[26px] sm:text-md md:text-md lg:text-[16px] mt-[20px] mb-[10px] text-[var(--color-light-blue)]">{feature.title}</h1>
                <p className="text-gray-600 text-[14px] lg:text-[16px] leading-[26px] md:leading-[29px] font-normal">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
