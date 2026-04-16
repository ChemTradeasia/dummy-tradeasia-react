/**
 * Static product data for demonstration.
 * In a production environment, this would come from an API.
 */
export const PRODUCTS = [
  {
    id: 1,
    slug: 'soda-ash-light',
    name: 'Soda Ash Dense - India',
    image: 'https://cdn.chemtradeasia.com/images/product/sodaashdense.webp',
    cas: '497-19-8',
    hsCode: '2836.20.00',
    iupac: 'Sodium Carbonate',
    formula: 'Na<sub>2</sub>CO<sub>3</sub>',
    appearance: 'White granular powder',
    commonNames: 'Washing Soda, Soda Crystals',
    packaging: '25kg/50kg PP/PE bag or 1000kg jumbo bag',
    description: `
      <p>Soda ash is available in three different grades, namely dense soda ash, light soda ash, and washing soda. Soda ash light is also called an anhydrous sodium carbonate with the chemical formula Na2CO3. It is a white, odorless granular powder soluble in water and forms a strongly alkaline aqueous solution.</p>
      <p>It is also hygroscopic and absorbs moisture from the atmosphere, causing it to clump together. It exists mainly in its monohydrate form but in the decahydrate and heptahydrate forms.</p>
    `,
    application: `
      <h6 class="font-bold text-[#17234d] mt-4 mb-2">Detergent Industry</h6>
      <p>Soda lights are used as water softeners in washing machines. It competes with the magnesium and calcium ions in hard water, preventing them from combining with the detergent.</p>
      <h6 class="font-bold text-[#17234d] mt-4 mb-2">Textile Industry</h6>
      <p>Soda ash light is used for dyeing and added to ensure proper adhesion of the dyes to the cellulosic fibers.</p>
    `,
    technicalDocuments: [
      { type: 'TDS', grade: 'Standard', origin: 'China', file: '#' },
      { type: 'MSDS', grade: '-', origin: '-', file: '#' }
    ]
  },
  {
    id: 2,
    slug: 'caustic-soda-flakes',
    name: 'Soda Ash Dense - Bosnia',
    image: 'https://cdn.chemtradeasia.com//images/product/sodaashdense.webp',
    cas: '1310-73-2',
    hsCode: '2815.11.00',
    iupac: 'Sodium Hydroxide',
    formula: 'NaOH',
    appearance: 'White Flakes',
    commonNames: 'Lye, Caustic',
    packaging: '25kg PP/PE bag',
    description: `
      <p>Caustic Soda Flakes (Sodium Hydroxide) is a white solid substance in the form of flakes. It is highly alkaline and corrosive. It is easily soluble in water and releases a large amount of heat.</p>
    `,
    application: `
      <h6 class="font-bold text-[#17234d] mt-4 mb-2">Soap & Detergent</h6>
      <p>Primarily used in the saponification process to manufacture soap and detergents.</p>
      <h6 class="font-bold text-[#17234d] mt-4 mb-2">Water Treatment</h6>
      <p>Used to control water acidity and help remove heavy metals from water.</p>
    `,
    technicalDocuments: [
      { type: 'TDS', grade: '99%', origin: 'Indonesia', file: '#' },
      { type: 'MSDS', grade: '-', origin: '-', file: '#' }
    ]
  },
  // {
  //   id: 3,
  //   slug: 'sodium-bicarbonate',
  //   name: 'Sodium Bicarbonate',
  //   image: 'https://cdn.chemtradeasia.com/product-websites/product/sodium-bicarbonate.webp',
  //   cas: '144-55-8',
  //   hsCode: '2836.30.00',
  //   iupac: 'Sodium Hydrogen Carbonate',
  //   formula: 'NaHCO<sub>3</sub>',
  //   appearance: 'White crystalline powder',
  //   commonNames: 'Baking Soda',
  //   packaging: '25kg bag',
  //   description: `
  //     <p>Sodium bicarbonate is a chemical compound with the formula NaHCO3. It is a salt composed of a sodium cation and a bicarbonate anion. Sodium bicarbonate is a white solid that is crystalline, but often appears as a fine powder.</p>
  //   `,
  //   application: `
  //     <h6 class="font-bold text-[#17234d] mt-4 mb-2">Food Industry</h6>
  //     <p>Commonly used as a leavening agent in baking (baking soda).</p>
  //     <h6 class="font-bold text-[#17234d] mt-4 mb-2">Animal Feed</h6>
  //     <p>Used as a nutritional supplement in the diets of cattle or poultry to maintain health.</p>
  //   `,
  //   technicalDocuments: [
  //     { type: 'TDS', grade: 'Food Grade', origin: 'China', file: '#' },
  //     { type: 'MSDS', grade: '-', origin: '-', file: '#' }
  //   ]
  // },
  // {
  //   id: 4,
  //   slug: 'calcium-chloride',
  //   name: 'Calcium Chloride',
  //   image: 'https://cdn.chemtradeasia.com/product-websites/product/calcium-chloride.webp',
  //   cas: '10043-52-4',
  //   hsCode: '2827.20.00',
  //   iupac: 'Calcium Chloride',
  //   formula: 'CaCl<sub>2</sub>',
  //   appearance: 'White Flakes or Granules',
  //   commonNames: 'Road Salt',
  //   packaging: '25kg bag',
  //   description: `
  //     <p>Calcium chloride is an inorganic compound, a salt with the chemical formula CaCl2. It is a white colored crystalline solid at room temperature, and it is highly soluble in water.</p>
  //   `,
  //   application: `
  //     <h6 class="font-bold text-[#17234d] mt-4 mb-2">De-icing</h6>
  //     <p>Used for dust control and de-icing on roads in cold climates.</p>
  //     <h6 class="font-bold text-[#17234d] mt-4 mb-2">Construction</h6>
  //     <p>Used as an acceleration additive for concrete.</p>
  //   `,
  //   technicalDocuments: [
  //     { type: 'TDS', grade: '74-77% Flakes', origin: 'China', file: '#' },
  //     { type: 'MSDS', grade: '-', origin: '-', file: '#' }
  //   ]
  // }
];
