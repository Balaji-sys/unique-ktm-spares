export interface Review {
    id: string;
    userName: string;
    userImage?: string;
    rating: number;
    date: string;
    title: string;
    content: string;
    verifiedPurchase: boolean;
    helpfulCount: number;
}

export interface ProductReviews {
    productId: string;
    averageRating: number;
    totalReviews: number;
    ratingDistribution: {
        5: number;
        4: number;
        3: number;
        2: number;
        1: number;
    };
    reviews: Review[];
}

// Helper to generate random date within last year
const getRandomDate = () => {
    const start = new Date(2023, 0, 1);
    const end = new Date();
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

export const reviewsData: Record<string, ProductReviews> = {
    '101': {
        productId: '101',
        averageRating: 4.8,
        totalReviews: 45,
        ratingDistribution: {
            5: 38,
            4: 5,
            3: 2,
            2: 0,
            1: 0,
        },
        reviews: [
            {
                id: 'r1',
                userName: 'Sandeep Kumar',
                rating: 5,
                date: getRandomDate(),
                title: 'Original Part context',
                content: 'Received genuine KTM packaging. The finish is perfect and fits my Duke 390 (2018) seamlessly. Highly satisfied with the delivery speed too.',
                verifiedPurchase: true,
                helpfulCount: 12,
            },
            {
                id: 'r2',
                userName: 'Amit Singh',
                rating: 5,
                date: getRandomDate(),
                title: 'Perfect fit',
                content: 'No issues with installation. Mechanic confirmed it is an original spare. Good pricing compared to offline dealers.',
                verifiedPurchase: true,
                helpfulCount: 8,
            },
            {
                id: 'r3',
                userName: 'Rohan Deshmukh',
                rating: 4,
                date: getRandomDate(),
                title: 'Good product but shipping delayed',
                content: 'The product itself is excellent, brand new and authentic. However, the courier took 2 days longer than expected. Hence 4 stars.',
                verifiedPurchase: true,
                helpfulCount: 3,
            }
        ]
    },
    '102': {
        productId: '102',
        averageRating: 4.8,
        totalReviews: 42,
        ratingDistribution: {
            5: 35,
            4: 6,
            3: 1,
            2: 0,
            1: 0,
        },
        reviews: [
            {
                id: 'r4',
                userName: 'Vivek Mehta',
                rating: 5,
                date: getRandomDate(),
                title: 'Must buy from here',
                content: 'Authentic part. My mechanic was surprised effectively got it online. Works perfectly on my RC 390.',
                verifiedPurchase: true,
                helpfulCount: 5,
            }
        ]
    }
};

// Default empty review structure for products without specific mock data
export const getReviewsForProduct = (productId: string): ProductReviews => {
    return reviewsData[productId] || {
        productId,
        averageRating: 0,
        totalReviews: 0,
        ratingDistribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
        reviews: []
    };
};
