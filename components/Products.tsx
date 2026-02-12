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
    <div id="products" className="bg-gray-50 reveal">
      {/* Full-width Image */}
      <div className="w-full bg-white">
        <img
          src="https://zgfooiszwnzzwerznwwy.supabase.co/storage/v1/object/public/website-assets/ingots_np.jpg"
          alt="Commodity Metal Ingots"
          className="w-full h-auto block"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-12 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Products</h2>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productData.map((category) => (
            <div key={category.title} className="bg-white p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-wide">{category.title}</h3>
              <div className="space-y-3">
                {category.items.map((item, index) => (
                  <div key={index} className="text-gray-700">
                    <p className="font-semibold text-sm">{item.name}</p>
                    {item.description && (
                      <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;