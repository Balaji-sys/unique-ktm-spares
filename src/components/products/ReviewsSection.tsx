import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Arun K',
    location: 'Bangalore',
    review:
      'Ordered engine parts for my KTM Duke. Quality is genuine and delivery was faster than expected. Packaging was solid.',
  },
  {
    name: 'Vignesh R',
    location: 'Chennai',
    review:
      'I was worried about duplicate parts, but these are original KTM spares. Good pricing and responsive support.',
  },
  {
    name: 'Sanjay P',
    location: 'Coimbatore',
    review:
      'Been riding KTM for years. Finally found a reliable spare parts store online. Will definitely order again.',
  },
];

export default function CustomerReviews() {
  return (
    <section className="bg-gray-50 py-14">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Trusted by KTM Riders
          </h2>
          <p className="text-gray-600 mt-2">
            Real feedback from riders across India
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 text-yellow-500 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                “{item.review}”
              </p>

              <div className="text-sm font-semibold text-gray-900">
                {item.name}
              </div>
              <div className="text-xs text-gray-500">
                {item.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
