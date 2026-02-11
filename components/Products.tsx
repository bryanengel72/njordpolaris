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
    <div id="products" className="bg-gray-50 py-12 md:py-24 reveal">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 space-y-20">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Products</h2>

        {/* Category 1: Energy */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full h-64 md:h-96 bg-gray-200 overflow-hidden rounded-sm">
            <img
              src="https://zgfooiszwnzzwerznwwy.supabase.co/storage/v1/object/public/website-assets/oil_tank.jpg"
              alt="Crude oil tank"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">Energy</h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              We trade and transport a wide range of energy commodities, including crude oil, natural gas, refined petroleum products, and biofuels. Our global network ensures efficient sourcing and delivery to meet the world's growing energy demands.
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed text-lg space-y-2">
              <li>Crude Oil</li>
              <li>Natural Gas</li>
              <li>Refined Petroleum Products</li>
              <li>Biofuels</li>
            </ul>
          </div>
        </div>
        {/* Category 2: Minerals/Metals */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full h-64 md:h-96 bg-gray-200 overflow-hidden rounded-sm">
            <img
              src="https://zgfooiszwnzzwerznwwy.supabase.co/storage/v1/object/public/website-assets/containers.jpg"
              alt="Shipping containers"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">Minerals & Metals</h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              We are a key player in the trading of various minerals and metals, including iron ore, copper, aluminum, and precious metals. Our expertise in logistics and market analysis ensures reliable supply chains for industrial and manufacturing clients.
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed text-lg space-y-2">
              <li>Iron Ore</li>
              <li>Copper</li>
              <li>Aluminum</li>
              <li>Precious Metals</li>
            </ul>
          </div>
        </div>
        {/* Category 3: Other Commodities */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full h-64 md:h-96 bg-gray-200 overflow-hidden rounded-sm">
            <img
              src="https://zgfooiszwnzzwerznwwy.supabase.co/storage/v1/object/public/website-assets/sustainability_hero.jpg"
              alt="Sustainability hero"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">Other Commodities</h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Our portfolio also includes a diverse range of other commodities such as agricultural products, chemicals, and lumber. We leverage our global reach and market insights to provide tailored solutions for our clients.
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed text-lg space-y-2">
              <li>Agricultural Products</li>
              <li>Chemicals</li>
              <li>Lumber</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Products;