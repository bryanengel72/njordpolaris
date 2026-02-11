import React from 'react';

interface ProductItem {
  name: string;
  description: string;
}

interface ProductCategory {
  title: string;
  items: ProductItem[];
}

const productData: ProductCategory[] = [
  {
    title: "Energy",
    items: [
      { name: "Coal", description: "Steelmaking coal, thermal coal" },
      { name: "Crude", description: "" },
      { name: "Petroleum Coke", description: "" },
      { name: "Distillates", description: "Fuel oils, diesel, kerosene, marine fuel" },
      { name: "Lubricants and Greases", description: "Circulation oils, compressor oils, heat transfer oils, industrial oils, process oils, slideway oils, turbine oils, et al." },
    ]
  },
  {
    title: "Ferrous",
    items: [
      { name: "Iron (Fe)", description: "Ores" },
      { name: "Ferrous products", description: "Pig Iron (Basic, Foundry, Nodular, Direct Reduced Iron (DRI), Hot Briquetted Iron (HBI)" },
      { name: "Ferroalloys", description: "Ferrochrome (FeCr), Ferromanganese (FeMn), Ferromolybdenum (FeMo), Ferrosilicon (FeSi), Ferronickel (FeNi), Ferrotitanium (FeTi), Ferrovanadium (FeV)" },
      { name: "Steel", description: "High-Speed Steel, Molybdenum Alloys, Nickel-Chromium and Nickel-Chromium-Molybdenum Alloys, Nickel-Iron Alloys, Super Alloys, Tool Steels, Tungsten Carbide, Tungsten Alloys, Stainless Steel ingots and billets, et al." },
      { name: "Ferrous scrap", description: "Heavy Melting Steel (HMS), Shredded Scrap, Industrial Scrap, Plate and Structural (P&S), Cast Iron, Steel Turnings and Borings, Stainless Steel, et al." },
    ]
  },
  {
    title: "Non-Ferrous",
    items: [
      { name: "Aluminium (Al)", description: "Ingots, billets, scrap" },
      { name: "Copper (Cu)", description: "Ingots, scrap" },
      { name: "Lead (Pb)", description: "Ingots, battery scrap" },
      { name: "Nickel (Ni)", description: "Ingots, scrap" },
      { name: "Tin (Sn)", description: "Ingots" },
      { name: "Zinc (Zn)", description: "SHG, scrap" },
      { name: "Minor Metals", description: "Antimony (Sb), Arsenic (As), Beryllium (Be), Bismuth (Bi), Cadmium (Cd), Calcium (Ca), Cobalt (Co), Gallium (Ga), Germanium (Ge), Hafnium (Hf), Indium (In), Lithium (Li), Magnesium (Mg), Manganese (Mn), Mercury (Hg), Molybdenum (Mo), Niobium (Nb), Rhenium (Re), Selenium (Se), Silicon (Si), Strontium (Sr), Tantalum (Ta), Tellurium (Te), Thallium (Tl), Titanium (Ti), Tungsten (W), Vanadium (V), Zirconium (Zr)" },
    ]
  },
  {
    title: "Minerals",
    items: [
      { name: "General Minerals", description: "Anhydrite, Baryte, Bentonite, Boron minerals, Chrysotile, Diatomite, Feldspar, Fluorspar, Graphite, Gypsum, Kaolin, Limestone, Magnesite, Perlite, Phosphate, Potash, Salts, Silica sands, Sulfur, Talc, Vermiculite, Wollastonite, Zircon, et al." },
    ]
  },
  {
    title: "Chemicals",
    items: [
      { name: "Mining Chemicals", description: "Cyanide, Sulfuric Acid, Hydrochloric Acid, Flotation Reagents, Flocculants and Coagulants, Sodium Carbonate (Soda Ash), Lime, Ammonium Nitrate, Activated Carbon, Xanthates, et al." },
      { name: "Polymers", description: "Polyethylene terephthalate (PET), High-density polyethylene (HDPE), Polyvinyl Chloride (PVC), Low-density polyethylene (LDPE), Polypropylene (PP), Polyvinyl Alcohol (PVA), Plastic Scrap" },
    ]
  },
  {
    title: "Rare Earth Elements",
    items: [
      { name: "Elements", description: "Scandium (Sc), Yttrium (Y), Lanthanum (La), Cerium (Ce), Praseodymium (Pr), Neodymium (Nd), Promethium (Pm), Samarium (Sm), Europium (Eu), Gadolinium (Gd), Terbium (Tb), Dysprosium (Dy), Holmium (Ho), Erbium (Er), Thulium (Tm), Ytterbium (Yb), Lutetium (Lu)" },
      { name: "Products", description: "Magnets, oxides, phosphors, specialty metals and alloys" },
    ]
  },
];

const Products: React.FC = () => {
  return (
    <div id="products" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Products</h2>

        <div className="w-full h-64 md:h-96 bg-gray-200 mb-12 overflow-hidden rounded-sm">
          <img 
            src="https://picsum.photos/seed/warehouse1/1920/1080" 
            alt="Metal ingots in warehouse" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productData.map((category, index) => (
            <div key={index} className="bg-white p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.items.map((item, i) => (
                  <li key={i}>
                    <span className="block font-semibold text-gray-800">{item.name}</span>
                    {item.description && (
                      <span className="block text-sm text-gray-600 mt-1 leading-relaxed">
                        {item.description}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Products;