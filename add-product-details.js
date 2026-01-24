const fs = require('fs');
const path = require('path');

// Product details data
const productDetails = {
    // Engine & Transmission
    '101': {
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
        }
    },
    '102': {
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
    '103': {
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
        }
    },
    '104': {
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
    '105': {
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
    '106': {
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
    '107': {
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
    '108': {
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
    '110': {
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

    // Electrical & Lighting
    '201': {
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
    '202': {
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
    '203': {
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
    '204': {
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
    '205': {
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
    '206': {
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
    '207': {
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
    '208': {
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

    // Frame & Body
    '301': {
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
    '302': {
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
    '303': {
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
    '304': {
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
    '305': {
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
    '306': {
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
    '307': {
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

    // Suspension & Steering
    '401': {
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
    '402': {
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
    '403': {
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
        }
    },
    '404': {
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
    '405': {
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

    // Brakes & Wheels
    '501': {
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
    '502': {
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
        }
    },
    '503': {
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
    '505': {
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
    '506': {
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
    '507': {
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
    '508': {
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
    '509': {
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
    '510': {
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

    // Service Parts
    '602': {
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
    '603': {
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
    '604': {
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
    '605': {
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
    '606': {
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
    '607': {
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
    '608': {
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

    // PowerParts/Accessories
    '701': {
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
    '702': {
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
    '703': {
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
    '704': {
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
    '705': {
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
    }
};

// Read the current products.ts file
const productsPath = path.join(__dirname, 'src', 'lib', 'products.ts');
let content = fs.readFileSync(productsPath, 'utf8');

// Function to add details to a product
function addProductDetails(productId, details) {
    const pattern = new RegExp(`(id:\\s*'${productId}',[\\s\\S]*?inStock:\\s*(?:true|false),)`, 'g');

    const replacement = `$1
        description: '${details.description}',
        features: [
${details.features.map(f => `            '${f}'`).join(',\n')}
        ],
        specifications: {
${Object.entries(details.specifications).map(([k, v]) => `            '${k}': '${v}'`).join(',\n')}
        }`;

    content = content.replace(pattern, replacement);
}

// Add details for all products
Object.entries(productDetails).forEach(([id, details]) => {
    console.log(`Adding details for product ${id}...`);
    addProductDetails(id, details);
});

// Write the updated content back
fs.writeFileSync(productsPath, content, 'utf8');

console.log('\n✅ Successfully added details to all products!');
console.log(`Updated file: ${productsPath}`);
