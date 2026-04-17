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
    cas: '497-19-8',
    hsCode: '2836.20.000',
    iupac: 'Sodium Hydroxide',
    formula: '<p>Na<sub>2</sub>CO<sub>3</sub></p>',
    appearance: 'White Flakes',
    commonNames: 'Soda ash, dense, Sodium carbonate, Sodium carbonat',
    packaging: '25kg PP/PE bag',
    description: `
      <h3><strong>Brief Overview</strong></h3>

      <p>Soda ash dense, an anhydrous version of sodium carbonate, is the technical term for this compound. Sodium carbonate decahydrate, a transparent, colorless crystalline substance commonly known as soda or washing soda, serves as its commercial form. Produced through the ammonia soda method (Solvay process) utilizing ammonia and carbon dioxide to treat sodium chloride, soda ash also originates from the naturally occurring mineral &#39;Trona.&#39; Its significance spans multiple industries and manufacturing processes, serving diverse industrial purposes. Particularly essential in the manufacture of flat glass, container glass, and as a crucial element in detergent production, it remains a fundamental component in various sectors.</p>

      <p>&nbsp;</p>

      <h3><strong>Manufacturing Process</strong></h3>

      <p><strong>Mining:</strong> Sodium carbonate, present naturally as Trona (Na3HCO3CO3&middot;2H2O), is acquired by dredging from specific alkaline lakes. Continuous replenishment of salt from hot saline springs ensures the sustainability of this source, maintaining balance as long as dredging rates align with replenishment.<br />
      <br />
      <strong>Solvay Process: </strong>In 1861, Belgian chemist Ernest Solvay innovated a technique to convert sodium chloride into sodium carbonate using ammonia. This method utilized a tall tower: calcium carbonate (limestone) was heated at the base, releasing carbon dioxide, while a concentrated solution of sodium chloride and ammonia entered from the top. Carbon dioxide bubbling through the solution caused sodium bicarbonate to precipitate, which was then converted to sodium carbonate through heating. Ammonia was regenerated from ammonium chloride by reacting it with residual lime (calcium hydroxide) from carbon dioxide production. This efficient process recycled ammonia, utilizing only brine and limestone, and producing calcium chloride as the sole waste byproduct. By 1900, the Solvay process accounted for 90% of sodium carbonate production.<br />
      <br />
      <strong>Hou&#39;s Process: </strong>Developed in the 1930s by Chinese chemist Hou Debang, this process involved pumping carbon dioxide from steam reforming through a saturated solution of sodium chloride and ammonia. This generated sodium bicarbonate, collected as a low-solubility precipitate, then heated to obtain pure sodium carbonate, similar to the final step in the Solvay process. Further introduction of sodium chloride and ammonia to the solution of ammonium and sodium chlorides allowed selective precipitation of ammonium chloride in a sodium chloride solution, owing to temperature-dependent solubility differences and the common-ion effect.<br />
      <br />
      Named &quot;Coupled Manufacturing Alkali Method&quot; in Chinese, Hou&#39;s process, linked with the Haber process, enhances atom efficiency by eliminating calcium chloride production, as ammonia regeneration becomes unnecessary. The resulting byproduct, ammonium chloride, can be marketed as a fertilizer.</p>
    `,
    application: `
      <p><strong>Detergent Industry</strong></p>

      <p>It is used as a water softener in laundry detergents. Soda ash competes with ionic magnesium and calcium in hard water and prevents them from combining with the detergent being used. If you do not use washing soda, you need an extra detergent to soak up magnesium and calcium ions. In the detergent part of the washing shop called washing soda or Sal soda, it can effectively remove oil, grease, and alcohol stains.<br />
      Medium or lighter soda ash is commonly used in detergents. They are used as builders in the formulation of soaps, detergents, and other cleaning compounds to maximize the detergency of cleaning media. Soda ash also aids in agglomeration by carrying the surfactant and providing the optimum pH of the detergent.<br />
      Soda ash is an important part of a large number of domestic formulations, including soap, refined powder, soaking, and washing powder.<br />
      <br />
      <strong>Glass Industry</strong></p>

      <p>The glass industry is a large consumer sector of soda ash. Soda Ash is used as the raw material to make the most common type of glass, soda-lime silica glass, generally used in the flat glass (automotive and construction), glass container (food and drink), and many other glass industries.<br />
      <br />
      <strong>Textile Industry</strong></p>

      <p>It is used as a water softener for printing and dyeing in the textile industry<br />
      <br />
      <strong>Buffer Industry</strong></p>

      <p>It is used as a buffering agent, neutralize and dough improver, it can be used for pastry and noodle food, and can be used appropriately according to production needs.</p>
    `,
    technicalDocuments: [
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
