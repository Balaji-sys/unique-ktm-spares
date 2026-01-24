// Comprehensive KTM Spare Parts Database
// Organized by categories matching KTM's parts catalog

export interface Product {
    id: string;
    name: string;
    category: string;
    subcategory?: string;
    model: string;
    price: number;
    originalPrice: number;
    rating: number;
    reviews: number;
    image: string;
    inStock: boolean;
    description?: string;
    features?: string[];
    specifications?: Record<string, string>;
    featured?: boolean;
}

// All KTM spare parts organized by category
export const allProducts: Product[] = [
    // ========== ENGINE & TRANSMISSION ==========
    {
        id: '101',
        name: 'Crankcase Assembly (RH)',
        category: 'Engine & Transmission',
        subcategory: 'Engine Core',
        model: 'Duke 390, RC 390',
        price: 18500,
        originalPrice: 22000,
        rating: 4.8,
        reviews: 45,
        image: '101',
        inStock: true,
        description: 'Genuine KTM right-hand crankcase assembly for Duke 390 and RC 390 models. Precision-engineered aluminum casting ensures perfect fit and optimal engine performance. Essential component for engine rebuilds and major repairs.',
        features: [
            'OEM-quality aluminum construction',
            'Precision-machined mounting surfaces',
            'Integrated oil passages for proper lubrication',
            'Heat-treated for durability',
            'Direct replacement for damaged crankcase',
            'Includes all necessary mounting bosses'
        ],
        specifications: {
            'Material': 'High-grade Aluminum Alloy',
            'Finish': 'Powder-coated',
            'Weight': '3.2 kg',
            'Compatibility': 'Duke 390, RC 390 (2013-2023)',
            'Part Type': 'OEM Replacement',
            'Mounting Points': '12',
            'Oil Capacity': '2.3L',
            'Warranty': '6 months'
        },
        featured: false,
    },
    {
        id: '102',
        name: 'Crankcase Assembly (LH)',
        category: 'Engine & Transmission',
        subcategory: 'Engine Core',
        model: 'Duke 390, RC 390',
        price: 18500,
        originalPrice: 22000,
        rating: 4.8,
        reviews: 42,
        image: '102',
        inStock: true,
        description: 'Genuine KTM left-hand crankcase assembly for Duke 390 and RC 390 models. Matches perfectly with RH crankcase for complete engine housing. Essential for engine rebuilds and major overhauls.',
        features: [
            'OEM-quality aluminum construction',
            'Precision-machined mating surfaces',
            'Integrated clutch housing',
            'Pre-drilled for all sensors and fittings',
            'Heat-treated for strength',
            'Perfect seal with gasket'
        ],
        specifications: {
            'Material': 'High-grade Aluminum Alloy',
            'Finish': 'Powder-coated',
            'Weight': '3.1 kg',
            'Compatibility': 'Duke 390, RC 390 (2013-2023)',
            'Part Type': 'OEM Replacement',
            'Clutch Side': 'Left',
            'Oil Capacity': '2.3L',
            'Warranty': '6 months'
        }
    },
    {
        id: '103',
        name: 'Cylinder Assembly',
        category: 'Engine & Transmission',
        subcategory: 'Engine Core',
        model: 'Duke 200, Duke 250',
        price: 12500,
        originalPrice: 15000,
        rating: 4.9,
        reviews: 78,
        image: '103',
        inStock: true,
        description: 'High-performance cylinder assembly for Duke 200 and Duke 250. Features nikasil-coated bore for reduced friction and improved heat dissipation. Complete with all necessary ports and mounting points.',
        features: [
            'Nikasil-coated cylinder bore',
            'Precision-honed for perfect piston fit',
            'Integrated cooling fins for heat management',
            'Pre-drilled sensor ports',
            'OEM specifications',
            'Tested for compression and leak-down'
        ],
        specifications: {
            'Bore Diameter': '72mm (Duke 200) / 78mm (Duke 250)',
            'Material': 'Aluminum with Nikasil coating',
            'Stroke': '49mm (Duke 200) / 58.8mm (Duke 250)',
            'Displacement': '199.5cc / 248.8cc',
            'Compression Ratio': '11.3:1 / 12.5:1',
            'Weight': '2.8 kg',
            'Compatibility': 'Duke 200, Duke 250',
            'Warranty': '1 year'
        },
        featured: true,
    },
    {
        id: '104',
        name: 'Piston Kit - Standard',
        category: 'Engine & Transmission',
        subcategory: 'Engine Core',
        model: 'All Models',
        price: 3500,
        originalPrice: 4200,
        rating: 4.7,
        reviews: 156,
        image: '104',
        inStock: true,
        description: 'Standard size piston kit including piston, rings, pin, and circlips. Forged aluminum construction for strength and light weight. Perfect for engine rebuilds and performance maintenance.',
        features: [
            'Forged aluminum piston',
            'Pre-fitted piston rings',
            'Hardened wrist pin included',
            'Circlips for secure installation',
            'Molybdenum-coated skirt',
            'Optimized for fuel efficiency'
        ],
        specifications: {
            'Piston Diameter': 'Standard (varies by model)',
            'Material': 'Forged Aluminum Alloy',
            'Ring Count': '3 (2 compression + 1 oil)',
            'Pin Diameter': '15mm',
            'Weight': '285g',
            'Compression Height': '32mm',
            'Compatibility': 'All KTM Duke & RC Models',
            'Service Life': '30,000-40,000 km'
        }
    },
    {
        id: '105',
        name: 'Crankshaft Complete',
        category: 'Engine & Transmission',
        subcategory: 'Engine Core',
        model: 'Duke 390, RC 390',
        price: 15000,
        originalPrice: 18500,
        rating: 4.9,
        reviews: 34,
        image: '105',
        inStock: true,
        description: 'Complete crankshaft assembly for Duke 390 and RC 390. Precision-balanced for smooth operation and reduced vibration. Includes connecting rod, bearings, and balancer shaft.',
        features: [
            'Precision-balanced assembly',
            'Forged steel construction',
            'Pre-installed bearings',
            'Integrated balancer shaft',
            'Hardened journals',
            'Factory-tested for runout'
        ],
        specifications: {
            'Material': 'Forged Steel',
            'Stroke': '62.4mm',
            'Journal Diameter': '38mm',
            'Rod Length': '115mm',
            'Weight': '4.5 kg',
            'Balance Factor': '50%',
            'Compatibility': 'Duke 390, RC 390',
            'Warranty': '1 year'
        }
    },
    {
        id: '106',
        name: 'Clutch Assembly Complete',
        category: 'Engine & Transmission',
        subcategory: 'Transmission',
        model: 'Duke 200, Duke 250',
        price: 6500,
        originalPrice: 7800,
        rating: 4.6,
        reviews: 92,
        image: '106',
        inStock: true,
        description: 'Complete clutch assembly with plates, springs, and hub. Provides smooth engagement and reliable power transfer. Designed for street and occasional track use.',
        features: [
            'Complete assembly - ready to install',
            'Friction and steel plates included',
            'Heavy-duty clutch springs',
            'Hardened clutch hub',
            'Smooth engagement',
            'Fade-resistant materials'
        ],
        specifications: {
            'Plate Count': '8 friction + 7 steel',
            'Spring Rate': '95 N/mm',
            'Hub Material': 'Hardened Steel',
            'Friction Material': 'Organic Composite',
            'Weight': '3.2 kg',
            'Torque Capacity': '45 Nm',
            'Compatibility': 'Duke 200, Duke 250',
            'Service Life': '25,000-30,000 km'
        }
    },
    {
        id: '107',
        name: 'Transmission Shaft Kit',
        category: 'Engine & Transmission',
        subcategory: 'Transmission',
        model: 'RC 390',
        price: 8900,
        originalPrice: 10500,
        rating: 4.8,
        reviews: 29,
        image: '107',
        inStock: false,
        description: 'Complete transmission shaft kit for RC 390. Includes input and output shafts with all gears pre-assembled. Precision-cut gears ensure smooth shifting and long life.',
        features: [
            'Complete shaft assembly',
            'Precision-cut gears',
            'Pre-assembled and tested',
            'Hardened steel construction',
            'Smooth gear engagement',
            'OEM specifications'
        ],
        specifications: {
            'Gear Count': '6-speed',
            'Shaft Material': 'Hardened Alloy Steel',
            'Gear Ratio': '2.92 / 1.94 / 1.45 / 1.19 / 1.04 / 0.92',
            'Weight': '5.8 kg',
            'Compatibility': 'RC 390',
            'Treatment': 'Case-hardened',
            'Warranty': '1 year',
            'Service Life': '50,000+ km'
        }
    },
    {
        id: '108',
        name: 'Balancer Shaft Assembly',
        category: 'Engine & Transmission',
        subcategory: 'Engine Core',
        model: 'Duke 390',
        price: 5500,
        originalPrice: 6800,
        rating: 4.7,
        reviews: 38,
        image: '108',
        inStock: true,
        description: 'Balancer shaft assembly for Duke 390. Reduces engine vibration for smoother operation. Essential for engine rebuilds and vibration-related issues.',
        features: [
            'Reduces engine vibration',
            'Precision-balanced',
            'Pre-installed bearings',
            'Hardened steel construction',
            'OEM specifications',
            'Easy installation'
        ],
        specifications: {
            'Material': 'Hardened Steel',
            'Weight': '1.8 kg',
            'Bearing Type': 'Sealed Ball Bearings',
            'Balance Weight': '450g',
            'Compatibility': 'Duke 390',
            'Rotation Speed': '2x crankshaft speed',
            'Warranty': '6 months',
            'Service Life': '40,000+ km'
        }
    },
    {
        id: '109',
        name: 'Spark Plug NGK CR9EK',
        category: 'Engine & Transmission',
        subcategory: 'Ignition',
        model: 'All Models',
        price: 450,
        originalPrice: 550,
        rating: 4.9,
        reviews: 412,
        image: '7',
        inStock: true,
        featured: true,
        description: 'Genuine NGK CR9EK spark plug designed specifically for KTM motorcycles. Ensures optimal combustion, improved fuel efficiency, and reliable engine performance. This OEM-quality spark plug delivers consistent ignition and is built to withstand high temperatures and pressures.',
        features: [
            'Genuine NGK brand - trusted worldwide',
            'Copper core for superior heat dissipation',
            'Trivalent metal plating for anti-corrosion',
            'Optimal heat range for KTM engines',
            'Improved throttle response and fuel economy',
            'Easy installation - direct OEM replacement'
        ],
        specifications: {
            'Brand': 'NGK',
            'Part Number': 'CR9EK',
            'Thread Size': '12mm',
            'Thread Reach': '19mm (3/4")',
            'Hex Size': '16mm',
            'Seat Type': 'Gasket',
            'Gap': '0.8mm',
            'Heat Range': '9',
            'Electrode Material': 'Copper Core',
            'Terminal Type': 'Removable',
            'Compatibility': 'All KTM Duke & RC Models'
        }
    },
    {
        id: '110',
        name: 'Throttle Body Assembly',
        category: 'Engine & Transmission',
        subcategory: 'Fuel System',
        model: 'Duke 390, RC 390',
        price: 9800,
        originalPrice: 11500,
        rating: 4.8,
        reviews: 67,
        image: '110',
        inStock: true,
        description: 'Electronic throttle body assembly for Duke 390 and RC 390. Provides precise fuel-air mixture control for optimal performance and fuel efficiency. Includes TPS sensor.',
        features: [
            'Electronic throttle control',
            'Integrated TPS sensor',
            'Precision butterfly valve',
            'Quick response time',
            'Plug-and-play installation',
            'Improves fuel efficiency'
        ],
        specifications: {
            'Bore Diameter': '46mm',
            'Sensor Type': 'Throttle Position Sensor (TPS)',
            'Voltage': '12V DC',
            'Material': 'Aluminum body',
            'Weight': '850g',
            'Response Time': '<50ms',
            'Compatibility': 'Duke 390, RC 390',
            'Warranty': '1 year'
        }
    },

    // ========== ELECTRICAL & LIGHTING ==========
    {
        id: '201',
        name: 'Wiring Harness Complete',
        category: 'Electrical & Lighting',
        subcategory: 'Electrical',
        model: 'Duke 200',
        price: 4500,
        originalPrice: 5500,
        rating: 4.6,
        reviews: 56,
        image: '201',
        inStock: true,
        description: 'Complete wiring harness for Duke 200. All-in-one solution for electrical system replacement. Pre-wired with connectors for easy installation.',
        features: [
            'Complete wiring solution',
            'Pre-installed connectors',
            'Color-coded wires',
            'Weather-resistant insulation',
            'OEM routing',
            'Plug-and-play installation'
        ],
        specifications: {
            'Wire Gauge': '16-22 AWG',
            'Insulation': 'PVC with UV protection',
            'Connector Type': 'Waterproof sealed',
            'Length': '2.5m total',
            'Weight': '1.2 kg',
            'Voltage Rating': '12V DC',
            'Compatibility': 'Duke 200',
            'Warranty': '6 months'
        }
    },
    {
        id: '202',
        name: 'Fuel Pump Assembly',
        category: 'Electrical & Lighting',
        subcategory: 'Fuel System',
        model: 'All Models',
        price: 3800,
        originalPrice: 4500,
        rating: 4.7,
        reviews: 89,
        image: '202',
        inStock: true,
        description: 'High-pressure fuel pump assembly for all KTM models. Ensures consistent fuel delivery for optimal engine performance. Includes fuel level sensor and filter.',
        features: [
            'High-pressure fuel delivery',
            'Integrated fuel level sensor',
            'Built-in fuel filter',
            'Quiet operation',
            'Corrosion-resistant',
            'Easy installation'
        ],
        specifications: {
            'Pressure': '3.5 bar (50 PSI)',
            'Flow Rate': '120 L/hr',
            'Voltage': '12V DC',
            'Current Draw': '4-6A',
            'Weight': '650g',
            'Filter Micron': '10 micron',
            'Compatibility': 'All KTM Duke & RC Models',
            'Warranty': '1 year'
        }
    },
    {
        id: '203',
        name: 'Ignition Coil',
        category: 'Electrical & Lighting',
        subcategory: 'Ignition',
        model: 'Duke 390, RC 390',
        price: 2800,
        originalPrice: 3300,
        rating: 4.8,
        reviews: 134,
        image: '203',
        inStock: true,
        description: 'High-performance ignition coil for Duke 390 and RC 390. Delivers strong spark for reliable ignition. Improved over stock for better performance.',
        features: [
            'High-energy spark output',
            'Improved over stock',
            'Heat-resistant housing',
            'Direct OEM replacement',
            'Reliable ignition',
            'Long service life'
        ],
        specifications: {
            'Output Voltage': '40,000V',
            'Primary Resistance': '0.5-1.0 Ω',
            'Secondary Resistance': '10-15 kΩ',
            'Spark Duration': '2.5ms',
            'Weight': '320g',
            'Operating Temp': '-40°C to 150°C',
            'Compatibility': 'Duke 390, RC 390',
            'Warranty': '1 year'
        }
    },
    {
        id: '204',
        name: 'Electric Starter Motor',
        category: 'Electrical & Lighting',
        subcategory: 'Starting System',
        model: 'All Models',
        price: 5500,
        originalPrice: 6800,
        rating: 4.5,
        reviews: 72,
        image: '204',
        inStock: true,
        description: 'Electric starter motor for all KTM models. Powerful and reliable starting in all conditions. Includes solenoid and mounting hardware.',
        features: [
            'Powerful starting torque',
            'All-weather reliability',
            'Integrated solenoid',
            'Sealed bearings',
            'Low current draw',
            'Direct replacement'
        ],
        specifications: {
            'Power Output': '1.2 kW',
            'Voltage': '12V DC',
            'Current Draw': '80-120A',
            'Rotation': 'Clockwise',
            'Weight': '2.1 kg',
            'Gear Ratio': '9:1',
            'Compatibility': 'All KTM Duke & RC Models',
            'Warranty': '1 year'
        }
    },
    {
        id: '205',
        name: 'Speedometer - Digital',
        category: 'Electrical & Lighting',
        subcategory: 'Instruments',
        model: 'Duke 390',
        price: 8900,
        originalPrice: 10500,
        rating: 4.9,
        reviews: 98,
        image: '205',
        inStock: false,
        description: 'Digital TFT speedometer for Duke 390. Full-color display with multiple riding modes. Shows speed, RPM, gear position, fuel level, and more.',
        features: [
            'Full-color TFT display',
            'Multiple riding modes',
            'Gear position indicator',
            'Fuel consumption display',
            'Trip computer',
            'Bluetooth connectivity'
        ],
        specifications: {
            'Screen Size': '5 inches',
            'Resolution': '800x480 pixels',
            'Display Type': 'TFT LCD',
            'Brightness': '1000 nits',
            'Weight': '450g',
            'Operating Temp': '-20°C to 70°C',
            'Compatibility': 'Duke 390',
            'Warranty': '1 year'
        }
    },
    {
        id: '206',
        name: 'LED Headlight Assembly',
        category: 'Electrical & Lighting',
        subcategory: 'Lighting',
        model: 'Duke 200, Duke 250',
        price: 4200,
        originalPrice: 5000,
        rating: 4.7,
        reviews: 145,
        image: '206',
        inStock: true,
        description: 'LED headlight assembly for Duke 200 and Duke 250. Bright white light for excellent visibility. Energy-efficient and long-lasting.',
        features: [
            'Bright LED technology',
            'Energy-efficient',
            'Long service life (50,000+ hours)',
            'Improved visibility',
            'Plug-and-play installation',
            'Weather-resistant'
        ],
        specifications: {
            'Light Output': '2800 lumens',
            'Color Temperature': '6000K (Cool White)',
            'Power Consumption': '35W',
            'Beam Pattern': 'High/Low beam',
            'Weight': '1.2 kg',
            'Voltage': '12V DC',
            'Compatibility': 'Duke 200, Duke 250',
            'Warranty': '2 years'
        }
    },
    {
        id: '207',
        name: 'Tail Light LED',
        category: 'Electrical & Lighting',
        subcategory: 'Lighting',
        model: 'All Models',
        price: 1800,
        originalPrice: 2200,
        rating: 4.6,
        reviews: 203,
        image: '207',
        inStock: true,
        description: 'LED tail light for all KTM models. Bright red LED for maximum visibility. Includes integrated brake light function.',
        features: [
            'Bright LED technology',
            'Integrated brake light',
            'Energy-efficient',
            'Long service life',
            'Weather-resistant',
            'Easy installation'
        ],
        specifications: {
            'LED Count': '12 LEDs',
            'Color': 'Red',
            'Power Consumption': '8W',
            'Brightness': '800 lumens',
            'Weight': '280g',
            'Voltage': '12V DC',
            'Compatibility': 'All KTM Duke & RC Models',
            'Warranty': '2 years'
        }
    },
    {
        id: '208',
        name: 'Turn Indicator Set (4pcs)',
        category: 'Electrical & Lighting',
        subcategory: 'Lighting',
        model: 'All Models',
        price: 1200,
        originalPrice: 1500,
        rating: 4.5,
        reviews: 178,
        image: '208',
        inStock: true,
        description: 'Set of 4 LED turn indicators for all KTM models. Bright amber LEDs for clear signaling. Compact design with universal mounting.',
        features: [
            'Set of 4 indicators',
            'Bright amber LEDs',
            'Compact design',
            'Universal mounting',
            'Weather-resistant',
            'Low power consumption'
        ],
        specifications: {
            'LED Count': '6 per indicator',
            'Color': 'Amber',
            'Power Consumption': '3W each',
            'Flash Rate': '85 flashes/min',
            'Weight': '80g each',
            'Voltage': '12V DC',
            'Compatibility': 'All KTM Duke & RC Models',
            'Warranty': '1 year'
        }
    },

    // ========== FRAME & BODY ==========
    {
        id: '301',
        name: 'Main Frame Assembly',
        category: 'Frame & Body',
        subcategory: 'Chassis',
        model: 'Duke 390',
        price: 28000,
        originalPrice: 35000,
        rating: 4.9,
        reviews: 12,
        image: '301',
        inStock: true,
        description: 'Main frame assembly for Duke 390. Lightweight trellis design for optimal rigidity and handling. Powder-coated finish for corrosion resistance.',
        features: [
            'Lightweight trellis design',
            'High-strength steel construction',
            'Powder-coated finish',
            'Precision-welded joints',
            'OEM geometry',
            'Pre-drilled mounting points'
        ],
        specifications: {
            'Material': 'Chromoly Steel',
            'Weight': '9.5 kg',
            'Finish': 'Orange powder coat',
            'Rake Angle': '24.5°',
            'Trail': '98mm',
            'Wheelbase': '1357mm',
            'Compatibility': 'Duke 390',
            'Warranty': '2 years'
        }
    },
    {
        id: '302',
        name: 'RC Fairing - Full Set',
        category: 'Frame & Body',
        subcategory: 'Body Panels',
        model: 'RC 390',
        price: 12500,
        originalPrice: 15000,
        rating: 4.8,
        reviews: 67,
        image: '302',
        inStock: true,
        description: 'Complete fairing set for RC 390. Includes all body panels for full coverage. Aerodynamic design for reduced drag and improved top speed.',
        features: [
            'Complete fairing set',
            'Aerodynamic design',
            'UV-resistant ABS plastic',
            'Pre-drilled mounting holes',
            'OEM fitment',
            'Includes all fasteners'
        ],
        specifications: {
            'Material': 'ABS Plastic',
            'Pieces Included': '12',
            'Weight': '6.8 kg',
            'Finish': 'Gloss paint',
            'Drag Coefficient': '0.32',
            'Compatibility': 'RC 390',
            'Color': 'OEM colors available',
            'Warranty': '6 months'
        }
    },
    {
        id: '303',
        name: 'Front Mudguard',
        category: 'Frame & Body',
        subcategory: 'Body Panels',
        model: 'Duke 200, Duke 250',
        price: 1800,
        originalPrice: 2200,
        rating: 4.6,
        reviews: 89,
        image: '303',
        inStock: true,
        description: 'Front mudguard for Duke 200 and Duke 250. Protects from road debris and water spray. Flexible material prevents damage from impacts.',
        features: [
            'Impact-resistant material',
            'Flexible construction',
            'Easy installation',
            'OEM fitment',
            'Lightweight',
            'Corrosion-resistant'
        ],
        specifications: {
            'Material': 'Polypropylene',
            'Weight': '320g',
            'Length': '480mm',
            'Width': '180mm',
            'Mounting': 'Fork-mounted',
            'Finish': 'Textured black',
            'Compatibility': 'Duke 200, Duke 250',
            'Warranty': '6 months'
        }
    },
    {
        id: '304',
        name: 'Rear Mudguard',
        category: 'Frame & Body',
        subcategory: 'Body Panels',
        model: 'All Models',
        price: 1500,
        originalPrice: 1900,
        rating: 4.5,
        reviews: 76,
        image: '304',
        inStock: true,
        description: 'Rear mudguard for all KTM models. Protects rider and bike from road spray. Includes license plate mounting bracket.',
        features: [
            'Protects from road spray',
            'License plate bracket included',
            'Flexible material',
            'Easy installation',
            'OEM fitment',
            'Lightweight'
        ],
        specifications: {
            'Material': 'Polypropylene',
            'Weight': '450g',
            'Length': '520mm',
            'Width': '200mm',
            'Mounting': 'Swingarm-mounted',
            'Finish': 'Textured black',
            'Compatibility': 'All KTM Duke & RC Models',
            'Warranty': '6 months'
        }
    },
    {
        id: '305',
        name: 'Belly Pan - Carbon Look',
        category: 'Frame & Body',
        subcategory: 'Body Panels',
        model: 'Duke 390, RC 390',
        price: 3200,
        originalPrice: 3800,
        rating: 4.7,
        reviews: 92,
        image: '305',
        inStock: true,
        description: 'Carbon-look belly pan for Duke 390 and RC 390. Enhances aerodynamics and protects engine from debris. Lightweight and stylish.',
        features: [
            'Carbon fiber look',
            'Aerodynamic design',
            'Engine protection',
            'Lightweight construction',
            'Easy installation',
            'UV-resistant finish'
        ],
        specifications: {
            'Material': 'ABS with carbon pattern',
            'Weight': '850g',
            'Length': '650mm',
            'Width': '350mm',
            'Finish': 'Gloss carbon look',
            'Mounting': 'Frame-mounted',
            'Compatibility': 'Duke 390, RC 390',
            'Warranty': '6 months'
        }
    },
    {
        id: '306',
        name: 'Seat Assembly Complete',
        category: 'Frame & Body',
        subcategory: 'Seating',
        model: 'Duke 200',
        price: 4500,
        originalPrice: 5200,
        rating: 4.6,
        reviews: 145,
        image: '306',
        inStock: true,
        description: 'Complete seat assembly for Duke 200. Comfortable foam padding with durable cover. Includes mounting brackets and hardware.',
        features: [
            'Comfortable foam padding',
            'Durable vinyl cover',
            'Water-resistant',
            'OEM fitment',
            'Mounting hardware included',
            'Easy installation'
        ],
        specifications: {
            'Foam Density': '50 kg/m³',
            'Cover Material': 'Vinyl',
            'Weight': '2.8 kg',
            'Length': '780mm',
            'Width': '280mm',
            'Height': '120mm',
            'Compatibility': 'Duke 200',
            'Warranty': '1 year'
        }
    },
    {
        id: '307',
        name: 'Side Stand Assembly',
        category: 'Frame & Body',
        subcategory: 'Chassis',
        model: 'All Models',
        price: 850,
        originalPrice: 1100,
        rating: 4.8,
        reviews: 234,
        image: '307',
        inStock: true,
        description: 'Side stand assembly for all KTM models. Heavy-duty construction for reliable support. Includes return spring and mounting hardware.',
        features: [
            'Heavy-duty construction',
            'Reliable support',
            'Return spring included',
            'Powder-coated finish',
            'Easy installation',
            'OEM specifications'
        ],
        specifications: {
            'Material': 'Steel',
            'Weight': '680g',
            'Length': '280mm',
            'Load Capacity': '250 kg',
            'Finish': 'Black powder coat',
            'Spring Tension': '45 N',
            'Compatibility': 'All KTM Duke & RC Models',
            'Warranty': '1 year'
        }
    },

    // ========== SUSPENSION & STEERING ==========
    {
        id: '401',
        name: 'Front Fork - WP USD',
        category: 'Suspension & Steering',
        subcategory: 'Front Suspension',
        model: 'Duke 390, RC 390',
        price: 18500,
        originalPrice: 22000,
        rating: 4.9,
        reviews: 56,
        image: '401',
        inStock: true,
        description: 'WP upside-down front fork for Duke 390 and RC 390. Premium suspension with adjustable compression and rebound. 43mm diameter for excellent rigidity.',
        features: [
            'WP premium suspension',
            'Adjustable compression',
            'Adjustable rebound',
            '43mm diameter',
            'Hard-anodized sliders',
            'Sealed cartridge design'
        ],
        specifications: {
            'Diameter': '43mm',
            'Travel': '142mm',
            'Spring Rate': '9.0 N/mm',
            'Oil Capacity': '520ml per leg',
            'Weight': '4.2 kg',
            'Adjustment': 'Compression & Rebound',
            'Compatibility': 'Duke 390, RC 390',
            'Warranty': '1 year'
        }
    },
    {
        id: '402',
        name: 'Triple Clamp Upper',
        category: 'Suspension & Steering',
        subcategory: 'Steering',
        model: 'Duke 390',
        price: 3500,
        originalPrice: 4200,
        rating: 4.7,
        reviews: 43,
        image: '402',
        inStock: true,
        description: 'Upper triple clamp for Duke 390. CNC-machined aluminum for precision and strength. Includes steering stem and bearings.',
        features: [
            'CNC-machined aluminum',
            'Precision fitment',
            'Includes steering bearings',
            'Lightweight design',
            'OEM specifications',
            'Anodized finish'
        ],
        specifications: {
            'Material': 'Aluminum 7075-T6',
            'Weight': '850g',
            'Offset': '25mm',
            'Stem Diameter': '25mm',
            'Bearing Type': 'Tapered roller',
            'Finish': 'Black anodized',
            'Compatibility': 'Duke 390',
            'Warranty': '1 year'
        }
    },
    {
        id: '403',
        name: 'Rear Shock Absorber - WP',
        category: 'Suspension & Steering',
        subcategory: 'Rear Suspension',
        model: 'All Models',
        price: 12500,
        originalPrice: 15000,
        rating: 4.8,
        reviews: 89,
        image: '403',
        inStock: true,
        description: 'WP rear shock absorber for all KTM models. Adjustable preload for different rider weights and riding styles. Nitrogen-charged for consistent performance.',
        features: [
            'WP premium quality',
            'Adjustable preload',
            'Nitrogen-charged',
            'Progressive damping',
            'Sealed design',
            'Long service life'
        ],
        specifications: {
            'Type': 'Mono-shock',
            'Travel': '150mm',
            'Spring Rate': '85 N/mm',
            'Gas Pressure': '10 bar',
            'Weight': '2.8 kg',
            'Adjustment': 'Preload',
            'Compatibility': 'All KTM Duke & RC Models',
            'Warranty': '1 year'
        },
        featured: true,
    },
    {
        id: '404',
        name: 'Swingarm Assembly',
        category: 'Suspension & Steering',
        subcategory: 'Rear Suspension',
        model: 'Duke 200, Duke 250',
        price: 8900,
        originalPrice: 10500,
        rating: 4.6,
        reviews: 34,
        image: '404',
        inStock: false,
        description: 'Swingarm assembly for Duke 200 and Duke 250. Lightweight aluminum construction for reduced unsprung weight. Precision-machined pivot points.',
        features: [
            'Lightweight aluminum',
            'Precision pivot points',
            'Chain adjusters included',
            'Powder-coated finish',
            'OEM geometry',
            'Pre-drilled for all mounts'
        ],
        specifications: {
            'Material': 'Aluminum alloy',
            'Weight': '3.5 kg',
            'Length': '580mm',
            'Pivot Diameter': '15mm',
            'Axle Diameter': '20mm',
            'Finish': 'Black powder coat',
            'Compatibility': 'Duke 200, Duke 250',
            'Warranty': '1 year'
        }
    },
    {
        id: '405',
        name: 'Handlebar - OEM',
        category: 'Suspension & Steering',
        subcategory: 'Steering',
        model: 'Duke 200',
        price: 2200,
        originalPrice: 2800,
        rating: 4.5,
        reviews: 112,
        image: '405',
        inStock: true,
        description: 'OEM handlebar for Duke 200. Comfortable riding position with optimal reach. Steel construction with chrome finish.',
        features: [
            'OEM specifications',
            'Comfortable position',
            'Steel construction',
            'Chrome finish',
            'Pre-drilled for controls',
            'Standard 22mm diameter'
        ],
        specifications: {
            'Material': 'Steel',
            'Diameter': '22mm',
            'Width': '780mm',
            'Rise': '85mm',
            'Sweep': '5°',
            'Weight': '1.2 kg',
            'Compatibility': 'Duke 200',
            'Warranty': '1 year'
        }
    },

    // ========== BRAKES & WHEELS ==========
    {
        id: '501',
        name: 'Front Brake Caliper - Bybre',
        category: 'Brakes & Wheels',
        subcategory: 'Brakes',
        model: 'Duke 200, Duke 250',
        price: 3800,
        originalPrice: 4500,
        rating: 4.7,
        reviews: 156,
        image: '501',
        inStock: true,
        description: 'Bybre front brake caliper for Duke 200 and Duke 250. Radial-mount 4-piston design for excellent stopping power. Includes brake pads.',
        features: [
            'Radial-mount design',
            '4-piston configuration',
            'Excellent stopping power',
            'Brake pads included',
            'Corrosion-resistant',
            'Easy installation'
        ],
        specifications: {
            'Piston Count': '4',
            'Piston Diameter': '27mm',
            'Material': 'Aluminum body',
            'Weight': '580g',
            'Mounting': 'Radial',
            'Pad Type': 'Semi-metallic',
            'Compatibility': 'Duke 200, Duke 250',
            'Warranty': '1 year'
        }
    },
    {
        id: '502',
        name: 'Front Brake Disc - 320mm',
        category: 'Brakes & Wheels',
        subcategory: 'Brakes',
        model: 'Duke 390, RC 390',
        price: 2800,
        originalPrice: 3200,
        rating: 4.8,
        reviews: 198,
        image: '5',
        inStock: true,
        description: 'Front brake disc for Duke 390 and RC 390. 320mm diameter for maximum stopping power. Stainless steel construction resists corrosion.',
        features: [
            '320mm diameter',
            'Maximum stopping power',
            'Stainless steel construction',
            'Corrosion-resistant',
            'Precision-machined',
            'OEM specifications'
        ],
        specifications: {
            'Diameter': '320mm',
            'Thickness': '5mm',
            'Material': 'Stainless Steel',
            'Weight': '1.1 kg',
            'Mounting': '6-bolt',
            'Finish': 'Polished',
            'Compatibility': 'Duke 390, RC 390',
            'Warranty': '2 years'
        },
        featured: true,
    },
    {
        id: '503',
        name: 'Rear Brake Disc - 230mm',
        category: 'Brakes & Wheels',
        subcategory: 'Brakes',
        model: 'All Models',
        price: 2200,
        originalPrice: 2800,
        rating: 4.7,
        reviews: 167,
        image: '503',
        inStock: true,
        description: 'Rear brake disc for all KTM models. 230mm diameter provides balanced braking. Lightweight and durable stainless steel construction.',
        features: [
            '230mm diameter',
            'Balanced braking',
            'Stainless steel',
            'Lightweight design',
            'Corrosion-resistant',
            'OEM fitment'
        ],
        specifications: {
            'Diameter': '230mm',
            'Thickness': '4mm',
            'Material': 'Stainless Steel',
            'Weight': '650g',
            'Mounting': '5-bolt',
            'Finish': 'Polished',
            'Compatibility': 'All KTM Duke & RC Models',
            'Warranty': '2 years'
        }
    },
    {
        id: '504',
        name: 'Front Brake Pads - Performance',
        category: 'Brakes & Wheels',
        subcategory: 'Brakes',
        model: 'Duke 200, Duke 250',
        price: 1500,
        originalPrice: 1800,
        rating: 4.8,
        reviews: 324,
        image: '1',
        inStock: true,
        featured: true,
        description: 'High-performance front brake pads engineered for superior stopping power and durability. These premium brake pads offer excellent bite, consistent performance in all weather conditions, and reduced brake fade during aggressive riding. Perfect for both street and track use.',
        features: [
            'Enhanced stopping power - 20% better than stock',
            'Low dust formula keeps wheels cleaner',
            'Minimal brake fade under hard use',
            'Quiet operation with reduced squeal',
            'Excellent wet weather performance',
            'Long-lasting compound - 30% more life',
            'Direct OEM fitment - no modifications needed'
        ],
        specifications: {
            'Material': 'Semi-Metallic Compound',
            'Friction Rating': 'HH (Highest)',
            'Operating Temperature': '-20°C to 650°C',
            'Thickness': '7.5mm',
            'Width': '42mm',
            'Length': '85mm',
            'Weight': '180g (set)',
            'Bedding Required': 'Yes - 200km gentle braking',
            'Compatibility': 'Duke 200, Duke 250',
            'Caliper Type': 'Bybre 4-Piston'
        }
    },
    {
        id: '505',
        name: 'Rear Brake Pads',
        category: 'Brakes & Wheels',
        subcategory: 'Brakes',
        model: 'All Models',
        price: 1200,
        originalPrice: 1500,
        rating: 4.6,
        reviews: 278,
        image: '505',
        inStock: true,
        description: 'Rear brake pads for all KTM models. Organic compound for smooth braking and low noise. Long service life with consistent performance.',
        features: [
            'Organic compound',
            'Smooth braking',
            'Low noise operation',
            'Long service life',
            'Consistent performance',
            'Easy installation'
        ],
        specifications: {
            'Material': 'Organic Compound',
            'Friction Rating': 'FF',
            'Operating Temp': '-10°C to 400°C',
            'Thickness': '6.5mm',
            'Width': '38mm',
            'Weight': '120g (set)',
            'Compatibility': 'All KTM Duke & RC Models',
            'Service Life': '15,000-20,000 km'
        }
    },
    {
        id: '506',
        name: 'Front Brake Lever - Adjustable',
        category: 'Brakes & Wheels',
        subcategory: 'Controls',
        model: 'Duke 390, RC 390',
        price: 1800,
        originalPrice: 2200,
        rating: 4.7,
        reviews: 145,
        image: '506',
        inStock: true,
        description: 'Adjustable front brake lever for Duke 390 and RC 390. CNC-machined aluminum with multiple reach positions. Foldable design prevents breakage.',
        features: [
            'CNC-machined aluminum',
            '6 reach positions',
            'Foldable design',
            'Anodized finish',
            'Comfortable grip',
            'Easy installation'
        ],
        specifications: {
            'Material': 'Aluminum 6061',
            'Positions': '6 adjustable',
            'Weight': '95g',
            'Length': '165mm',
            'Finish': 'Anodized',
            'Pivot': 'Sealed bearing',
            'Compatibility': 'Duke 390, RC 390',
            'Warranty': '1 year'
        }
    },
    {
        id: '507',
        name: 'Front Wheel - 17" Alloy',
        category: 'Brakes & Wheels',
        subcategory: 'Wheels',
        model: 'Duke 390',
        price: 8500,
        originalPrice: 10000,
        rating: 4.9,
        reviews: 67,
        image: '507',
        inStock: true,
        description: '17-inch front alloy wheel for Duke 390. Lightweight design reduces unsprung weight. Includes bearings and spacers.',
        features: [
            'Lightweight alloy construction',
            'Reduces unsprung weight',
            'Bearings included',
            'Spacers included',
            'OEM specifications',
            'Powder-coated finish'
        ],
        specifications: {
            'Diameter': '17 inches',
            'Width': '3.5 inches',
            'Material': 'Aluminum alloy',
            'Weight': '3.8 kg',
            'Spoke Count': '5',
            'Finish': 'Black powder coat',
            'Compatibility': 'Duke 390',
            'Warranty': '1 year'
        }
    },
    {
        id: '508',
        name: 'Rear Wheel - 17" Alloy',
        category: 'Brakes & Wheels',
        subcategory: 'Wheels',
        model: 'Duke 390',
        price: 9200,
        originalPrice: 11000,
        rating: 4.9,
        reviews: 62,
        image: '508',
        inStock: true,
        description: '17-inch rear alloy wheel for Duke 390. Wider design for better traction. Includes bearings, spacers, and sprocket carrier.',
        features: [
            'Wider design for traction',
            'Lightweight alloy',
            'Bearings included',
            'Sprocket carrier included',
            'OEM specifications',
            'Powder-coated finish'
        ],
        specifications: {
            'Diameter': '17 inches',
            'Width': '5.5 inches',
            'Material': 'Aluminum alloy',
            'Weight': '4.2 kg',
            'Spoke Count': '5',
            'Finish': 'Black powder coat',
            'Compatibility': 'Duke 390',
            'Warranty': '1 year'
        }
    },
    {
        id: '509',
        name: 'Front Axle Assembly',
        category: 'Brakes & Wheels',
        subcategory: 'Wheels',
        model: 'All Models',
        price: 1200,
        originalPrice: 1500,
        rating: 4.6,
        reviews: 89,
        image: '509',
        inStock: true,
        description: 'Front axle assembly for all KTM models. Hardened steel construction for strength. Includes spacers and axle nut.',
        features: [
            'Hardened steel construction',
            'High strength',
            'Spacers included',
            'Axle nut included',
            'Precision-machined',
            'OEM specifications'
        ],
        specifications: {
            'Diameter': '25mm',
            'Length': '215mm',
            'Material': 'Hardened Steel',
            'Weight': '420g',
            'Thread': 'M25 x 1.5',
            'Torque Spec': '45 Nm',
            'Compatibility': 'All KTM Duke & RC Models',
            'Warranty': '1 year'
        }
    },
    {
        id: '510',
        name: 'Metzeler Tire - Front 110/70',
        category: 'Brakes & Wheels',
        subcategory: 'Tires',
        model: 'Duke 390, RC 390',
        price: 4500,
        originalPrice: 5200,
        rating: 4.8,
        reviews: 234,
        image: '510',
        inStock: true,
        description: 'Metzeler front tire 110/70-17 for Duke 390 and RC 390. Excellent grip in wet and dry conditions. Long-lasting compound.',
        features: [
            'Excellent wet/dry grip',
            'Long-lasting compound',
            'Stable handling',
            'Low rolling resistance',
            'Proven performance',
            'Street-focused design'
        ],
        specifications: {
            'Size': '110/70-17',
            'Load Index': '54',
            'Speed Rating': 'W (270 km/h)',
            'Tread Pattern': 'Sportec M5',
            'Weight': '4.2 kg',
            'Recommended Pressure': '2.5 bar',
            'Compatibility': 'Duke 390, RC 390',
            'Expected Life': '10,000-12,000 km'
        }
    },

    // ========== SERVICE PARTS ==========
    {
        id: '601',
        name: 'Engine Oil Filter - Premium',
        category: 'Service Parts',
        subcategory: 'Filters',
        model: 'All Models',
        price: 850,
        originalPrice: 1000,
        rating: 4.9,
        reviews: 456,
        image: '2',
        inStock: true,
        featured: true,
        description: 'Premium quality engine oil filter designed to provide maximum protection for your KTM engine. Features advanced filtration media that captures 99% of harmful contaminants while maintaining optimal oil flow. Essential for regular maintenance and engine longevity.',
        features: [
            'OEM-quality construction and materials',
            '99% filtration efficiency for particles >20 microns',
            'High-capacity pleated filter media',
            'Anti-drainback valve prevents dry starts',
            'Silicone anti-drainback valve - won\'t harden',
            'Heavy-duty canister resists bursting',
            'Recommended replacement every 5,000-6,000 km'
        ],
        specifications: {
            'Filter Type': 'Spin-On Cartridge',
            'Thread Size': 'M20 x 1.5',
            'Outer Diameter': '76mm',
            'Height': '85mm',
            'Filtration Rating': '20 microns',
            'Filter Media': 'Synthetic Blend',
            'Bypass Valve': '12-15 PSI',
            'Anti-Drainback Valve': 'Yes - Silicone',
            'Flow Rate': '8-10 L/min',
            'Compatibility': 'All KTM Duke, RC Models',
            'Service Interval': '5,000-6,000 km'
        }
    },
    {
        id: '602',
        name: 'Air Filter - High Flow',
        category: 'Service Parts',
        subcategory: 'Filters',
        model: 'Duke 390',
        price: 1200,
        originalPrice: 1500,
        rating: 4.6,
        reviews: 267,
        image: '4',
        inStock: true,
        description: 'High-flow air filter for Duke 390. Washable and reusable for long-term savings. Improves airflow for better throttle response.',
        features: [
            'Washable and reusable',
            'High-flow design',
            'Improved throttle response',
            'Long service life',
            'Easy to clean',
            'OEM fitment'
        ],
        specifications: {
            'Material': 'Cotton gauze',
            'Flow Rate': '+15% over stock',
            'Filter Area': '180 cm²',
            'Weight': '180g',
            'Service Interval': 'Clean every 10,000 km',
            'Lifespan': '100,000+ km',
            'Compatibility': 'Duke 390',
            'Warranty': '1 year'
        }
    },
    {
        id: '603',
        name: 'Fuel Filter',
        category: 'Service Parts',
        subcategory: 'Filters',
        model: 'All Models',
        price: 650,
        originalPrice: 800,
        rating: 4.7,
        reviews: 189,
        image: '603',
        inStock: true,
        description: 'Fuel filter for all KTM models. Removes contaminants from fuel for clean combustion. Essential for fuel system maintenance.',
        features: [
            'Removes fuel contaminants',
            'Protects fuel injectors',
            'Easy installation',
            'OEM specifications',
            'Long service life',
            'Corrosion-resistant housing'
        ],
        specifications: {
            'Filtration': '10 micron',
            'Flow Rate': '150 L/hr',
            'Material': 'Paper element',
            'Housing': 'Plastic',
            'Weight': '45g',
            'Service Interval': '10,000 km',
            'Compatibility': 'All KTM Duke & RC Models',
            'Warranty': '6 months'
        }
    },
    {
        id: '604',
        name: 'Chain Slider Kit',
        category: 'Service Parts',
        subcategory: 'Chain',
        model: 'Duke 200, Duke 250',
        price: 450,
        originalPrice: 600,
        rating: 4.5,
        reviews: 156,
        image: '604',
        inStock: true,
        description: 'Chain slider kit for Duke 200 and Duke 250. Reduces chain wear and noise. Includes upper and lower sliders.',
        features: [
            'Reduces chain wear',
            'Quieter operation',
            'Upper and lower sliders',
            'Durable material',
            'Easy installation',
            'OEM specifications'
        ],
        specifications: {
            'Material': 'UHMW Plastic',
            'Pieces': '2 (upper + lower)',
            'Weight': '120g',
            'Thickness': '8mm',
            'Service Life': '15,000-20,000 km',
            'Compatibility': 'Duke 200, Duke 250',
            'Mounting': 'Bolt-on',
            'Warranty': '6 months'
        }
    },
    {
        id: '605',
        name: 'Chain & Sprocket Kit - DID',
        category: 'Service Parts',
        subcategory: 'Chain',
        model: 'RC 390',
        price: 4500,
        originalPrice: 5200,
        rating: 4.8,
        reviews: 189,
        image: '3',
        inStock: true,
        description: 'DID chain and sprocket kit for RC 390. Premium quality for long life and smooth operation. Includes front sprocket, rear sprocket, and chain.',
        features: [
            'Complete kit - chain + sprockets',
            'DID premium quality',
            'Long service life',
            'Smooth operation',
            'Gold-colored chain',
            'Pre-lubricated'
        ],
        specifications: {
            'Chain Size': '520',
            'Chain Links': '118',
            'Front Sprocket': '15T',
            'Rear Sprocket': '45T',
            'Material': 'Hardened steel',
            'Weight': '2.8 kg (complete)',
            'Compatibility': 'RC 390',
            'Service Life': '25,000-30,000 km'
        }
    },
    {
        id: '606',
        name: 'Clutch Cable',
        category: 'Service Parts',
        subcategory: 'Cables',
        model: 'Duke 200',
        price: 350,
        originalPrice: 450,
        rating: 4.6,
        reviews: 234,
        image: '606',
        inStock: true,
        description: 'Clutch cable for Duke 200. Smooth operation with minimal friction. Includes cable adjuster and end fittings.',
        features: [
            'Smooth operation',
            'Low friction',
            'Cable adjuster included',
            'End fittings included',
            'OEM length',
            'Weather-resistant'
        ],
        specifications: {
            'Length': '1050mm',
            'Material': 'Stainless steel inner',
            'Outer': 'PVC coated',
            'Weight': '120g',
            'Adjustment Range': '15mm',
            'Service Life': '20,000-25,000 km',
            'Compatibility': 'Duke 200',
            'Warranty': '6 months'
        }
    },
    {
        id: '607',
        name: 'Fork Oil Seal Kit',
        category: 'Service Parts',
        subcategory: 'Seals',
        model: 'Duke 200, Duke 250',
        price: 950,
        originalPrice: 1100,
        rating: 4.7,
        reviews: 178,
        image: '6',
        inStock: true,
        description: 'Fork oil seal kit for Duke 200 and Duke 250. Prevents oil leaks for consistent suspension performance. Includes dust seals.',
        features: [
            'Prevents oil leaks',
            'Consistent performance',
            'Dust seals included',
            'OEM quality',
            'Easy installation',
            'Long service life'
        ],
        specifications: {
            'Seal Diameter': '37mm',
            'Material': 'Nitrile rubber',
            'Pieces': '4 (2 oil + 2 dust)',
            'Weight': '80g',
            'Service Life': '20,000-25,000 km',
            'Operating Temp': '-40°C to 120°C',
            'Compatibility': 'Duke 200, Duke 250',
            'Warranty': '6 months'
        }
    },
    {
        id: '608',
        name: 'O-Ring Set - Complete',
        category: 'Service Parts',
        subcategory: 'Seals',
        model: 'All Models',
        price: 550,
        originalPrice: 700,
        rating: 4.5,
        reviews: 123,
        image: '608',
        inStock: true,
        description: 'Complete O-ring set for all KTM models. Includes all engine and transmission O-rings. Essential for rebuilds and leak prevention.',
        features: [
            'Complete O-ring set',
            'All engine seals included',
            'Prevents oil leaks',
            'OEM specifications',
            'Heat-resistant',
            'Chemical-resistant'
        ],
        specifications: {
            'Piece Count': '45',
            'Material': 'Nitrile rubber (NBR)',
            'Temperature Range': '-40°C to 150°C',
            'Weight': '150g (complete set)',
            'Hardness': '70 Shore A',
            'Compatibility': 'All KTM Duke & RC Models',
            'Storage Life': '5 years',
            'Warranty': '6 months'
        }
    },

    // ========== POWERPARTS / ACCESSORIES ==========
    {
        id: '701',
        name: 'Crash Protector Set',
        category: 'PowerParts/Accessories',
        subcategory: 'Protection',
        model: 'Duke 390, RC 390',
        price: 3200,
        originalPrice: 3800,
        rating: 4.8,
        reviews: 145,
        image: '701',
        inStock: true,
        description: 'Crash protector set for Duke 390 and RC 390. Protects frame and engine in case of a fall. CNC-machined aluminum with nylon sliders.',
        features: [
            'Frame and engine protection',
            'CNC-machined aluminum',
            'Nylon sliders',
            'Easy installation',
            'Minimal modification',
            'Anodized finish'
        ],
        specifications: {
            'Material': 'Aluminum + Nylon',
            'Pieces': '2 (left + right)',
            'Weight': '450g',
            'Slider Diameter': '60mm',
            'Finish': 'Black anodized',
            'Mounting': 'Frame-mounted',
            'Compatibility': 'Duke 390, RC 390',
            'Warranty': '1 year'
        }
    },
    {
        id: '702',
        name: 'Frame Sliders - Carbon',
        category: 'PowerParts/Accessories',
        subcategory: 'Protection',
        model: 'Duke 200, Duke 250',
        price: 2500,
        originalPrice: 3000,
        rating: 4.7,
        reviews: 189,
        image: '702',
        inStock: true,
        description: 'Carbon frame sliders for Duke 200 and Duke 250. Protects fairings and frame from damage. Lightweight carbon fiber construction.',
        features: [
            'Carbon fiber construction',
            'Protects fairings and frame',
            'Lightweight design',
            'Easy installation',
            'No cutting required',
            'Sleek appearance'
        ],
        specifications: {
            'Material': 'Carbon Fiber',
            'Pieces': '2 (left + right)',
            'Weight': '180g',
            'Length': '100mm',
            'Diameter': '40mm',
            'Mounting': 'Frame-mounted',
            'Compatibility': 'Duke 200, Duke 250',
            'Warranty': '1 year'
        }
    },
    {
        id: '703',
        name: 'Saddle Bag Stand Kit',
        category: 'PowerParts/Accessories',
        subcategory: 'Luggage',
        model: 'Duke 390',
        price: 4500,
        originalPrice: 5200,
        rating: 4.6,
        reviews: 78,
        image: '703',
        inStock: false,
        description: 'Saddle bag support kit for Duke 390. Allows installation of soft or hard luggage. Powder-coated steel construction.',
        features: [
            'Supports soft/hard luggage',
            'Powder-coated steel',
            'Easy installation',
            'Includes mounting hardware',
            'Weight capacity 15kg',
            'Removable design'
        ],
        specifications: {
            'Material': 'Steel',
            'Weight': '2.2 kg',
            'Load Capacity': '15 kg',
            'Finish': 'Black powder coat',
            'Mounting': 'Subframe-mounted',
            'Compatibility': 'Duke 390',
            'Includes': 'All hardware',
            'Warranty': '1 year'
        }
    },
    {
        id: '704',
        name: 'Handlebar Grips - Premium',
        category: 'PowerParts/Accessories',
        subcategory: 'Controls',
        model: 'All Models',
        price: 850,
        originalPrice: 1100,
        rating: 4.5,
        reviews: 267,
        image: '704',
        inStock: true,
        description: 'Premium handlebar grips for all KTM models. Soft rubber compound for comfort. Diamond pattern for excellent grip.',
        features: [
            'Soft rubber compound',
            'Diamond grip pattern',
            'Comfortable feel',
            'Vibration dampening',
            'Easy installation',
            'Universal fit'
        ],
        specifications: {
            'Material': 'Rubber',
            'Length': '120mm',
            'Inner Diameter': '22mm',
            'Outer Diameter': '32mm',
            'Weight': '95g (pair)',
            'Pattern': 'Diamond',
            'Compatibility': 'All KTM Duke & RC Models',
            'Warranty': '6 months'
        }
    },
    {
        id: '705',
        name: 'Clutch Lever Assembly - Adjustable',
        category: 'PowerParts/Accessories',
        subcategory: 'Controls',
        model: 'Duke 390',
        price: 1350,
        originalPrice: 1600,
        rating: 4.7,
        reviews: 134,
        image: '8',
        inStock: true,
        description: 'Adjustable clutch lever assembly for Duke 390. CNC-machined with 6 reach positions. Foldable design prevents breakage in falls.',
        features: [
            'CNC-machined aluminum',
            '6 reach positions',
            'Foldable design',
            'Comfortable grip',
            'Anodized finish',
            'Easy installation'
        ],
        specifications: {
            'Material': 'Aluminum 6061',
            'Positions': '6 adjustable',
            'Weight': '92g',
            'Length': '160mm',
            'Finish': 'Anodized',
            'Pivot': 'Sealed bearing',
            'Compatibility': 'Duke 390',
            'Warranty': '1 year'
        }
    },
];

// Get featured products for homepage
export const getFeaturedProducts = (): Product[] => {
    return allProducts.filter(product => product.featured === true);
};

// Get products by category
export const getProductsByCategory = (category: string): Product[] => {
    return allProducts.filter(product => product.category === category);
};

// Get all unique categories
export const getCategories = (): string[] => {
    const categories = allProducts.map(product => product.category);
    return Array.from(new Set(categories));
};

// Get product by ID
export const getProductById = (id: string): Product | undefined => {
    return allProducts.find(product => product.id === id);
};
