// KTM-specific product images - using genuine local product photos
export const productImages: Record<string, string> = {
    // Original products (featured)
    '1': '/images/products/brake-pads.jpg',
    '2': '/images/products/oil-filter.jpg',
    '3': '/images/products/chain-sprocket.jpg',
    '4': '/images/products/air-filter.jpg',
    '5': '/images/products/brake-disc.jpg',
    '6': '/images/products/Fork-oil-seal-kit.jpg',
    '7': '/images/products/Spark-plug-ngk.jpg',
    '8': '/images/products/Clutch-lever-assembly.jpg',

    // Engine & Transmission (101-110)
    '101': '/images/products/cranckcase.jpg', // Crankcase RH
    '102': '/images/products/cranckcase lh.jpg', // Crankcase LH
    '103': '/images/products/cylinder.jpg', // Cylinder
    '104': '/images/products/piston-kit.jpg', // Piston
    '105': '/images/products/cranckshaft.jpg', // Crankshaft
    '106': '/images/products/clutch-assembly-complete.jpg', // Clutch
    '107': '/images/products/transition-kit.jpg', // Transmission
    '108': '/images/products/balancer-shaft-assembly.jpg', // Balancer shaft
    '109': '/images/products/Spark-plug-ngk.jpg', // Spark plug (reuse)
    '110': '/images/products/throttle-body-assembly.jpg', // Throttle body

    // Electrical & Lighting (201-208)
    '201': '/images/products/wiring-harness.jpg', // Wiring harness
    '202': '/images/products/fuel-pump-assembly.jpg', // Fuel pump
    '203': '/images/products/ignition-coil.jpg', // Ignition coil
    '204': '/images/products/electric-starter-motor.jpg', // Starter motor
    '205': '/images/products/chain-cylinder-assemble.jpg', // Speedometer
    '206': '/images/products/headlight-assembly.jpg', // Headlight
    '207': '/images/products/tail-light-LED.jpg', // Tail light
    '208': '/images/products/indicator-set-4.jpg', // Indicators

    // Frame & Body (301-307)
    '301': '/images/products/main-frame-assembly.jpg', // Frame
    '302': '/images/products/rc-fairing-outer.jpg', // RC Fairing
    '303': '/images/products/front-mudgaurd.jpg', // Front mudguard
    '304': '/images/products/rear-mudguard.jpg', // Rear mudguard
    '305': '/images/products/Belly-Pan-Carbon-Look.jpg', // Belly pan
    '306': '/images/products/seat-assembly.jpg', // Seat
    '307': '/images/products/side-stand.jpg', // Side stand

    // Suspension & Steering (401-405)
    '401': '/images/products/front-fork-assembly.png', // Front fork
    '402': '/images/products/tripple-clamp-upper.jpg', // Triple clamp
    '403': '/images/products/rear-shock-absorber.jpg', // Rear shock
    '404': '/images/products/swingarm-assembly.jpg', // Swingarm
    '405': '/images/products/handlebar-oem.jpg', // Handlebar

    // Brakes & Wheels (501-510)
    '501': '/images/products/front-brake-calimber-assembly.jpg', // Brake caliper
    '502': '/images/products/front-brake-disc-320mm.jpg', // Front brake disc
    '503': '/images/products/rear-brake-disc-230mm.jpg', // Rear brake disc
    '504': '/images/products/brake-pads.jpg', // Front brake pads (reuse)
    '505': '/images/products/brake-pads.jpg', // Rear brake pads (reuse)
    '506': '/images/products/front-brake-lever.jpg', // Brake lever
    '507': '/images/products/front-wheel alloy.jpg', // Front wheel
    '508': '/images/products/rear-wheel-alloy.jpg', // Rear wheel
    '509': '/images/products/front axle.jpg', // Axle
    '510': '/images/products/front-Metzeler-Tire-Front-110-70.jpg', // Tire

    // Service Parts (601-608)
    '601': '/images/products/oil-filter.jpg', // Oil filter (reuse)
    '602': '/images/products/air-filter.jpg', // Air filter (reuse)
    '603': '/images/products/fuel-filter.jpg', // Fuel filter
    '604': '/images/products/chain-sprocket.jpg', // Chain slider (reuse chain image)
    '605': '/images/products/chain-sprocket.jpg', // Chain & sprocket (reuse)
    '606': '/images/products/clutch-cable.jpg', // Clutch cable
    '607': '/images/products/Fork-oil-seal-kit.jpg', // Fork seal (reuse)
    '608': '/images/products/o-ring-set-complete.jpg', // O-rings

    // PowerParts/Accessories (701-705)
    '701': '/images/products/crash-protector-kit.jpg', // Crash protector
    '702': '/images/products/frame-cylinder.jpg', // Frame sliders
    '703': '/images/products/sandle-bag-stand-kit.jpg', // Saddle bag
    '704': '/images/products/Handlebar-grip.jpg', // Grips
    '705': '/images/products/Clutch-lever-assembly.jpg', // Clutch lever (reuse)
};

export const categoryImages: Record<string, string> = {
    'Engine & Transmission': 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80',
    'Electrical & Lighting': 'https://images.unsplash.com/photo-1558618666-ff1da86aa3ef?w=600&q=80',
    'Frame & Body': 'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=600&q=80',
    'Suspension & Steering': 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&q=80',
    'Brakes & Wheels': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    'Service Parts': 'https://images.unsplash.com/photo-1599819177818-6f7a4e4454d2?w=600&q=80',
    'PowerParts/Accessories': 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80',
};


// KTM Duke motorcycles
export const bikeImages = {
    hero: '/images/products/main.jpg',
    duke200: 'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=900&q=80',
    duke390: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=900&q=80',
    rc390: 'https://images.unsplash.com/photo-1558980663-3685c1d673c4?w=900&q=80',
    adventure: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=900&q=80',
};

// Background patterns and textures
export const backgrounds = {
    hexPattern: 'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M30 0l25.98 15v30L30 60 4.02 45V15z" fill="none" stroke="%23FF6600" stroke-width="0.5" opacity="0.1"/%3E%3C/svg%3E',
    gridPattern: 'data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h40v40H0z" fill="none"/%3E%3Cpath d="M0 20h40M20 0v40" stroke="%23FF6600" stroke-width="0.3" opacity="0.1"/%3E%3C/svg%3E',
};
