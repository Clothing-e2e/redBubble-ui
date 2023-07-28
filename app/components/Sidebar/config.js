const SIDEBAR_CATEGORIES = [
    { 
        category: 'Mens', 
        subCategories: [
            { name: 'T-shirts', filter: ['men', 'tshirt'] },
            { name: 'Shirts', filter: ['men', 'shirt'] },
            { name: 'Jeans', filter: ['men', 'jeans'] },
            { name: 'Pants', filter: ['men', 'pants'] },
            { name: 'Sweatshirts', filter: ['men', 'sweatshirt'] },
            { name: 'Hoodies', filter: ['men', 'hoodie'] },
            { name: 'View all', filter: ['men'] },
        ] 
    },
    {
        category: 'Womens', 
        subCategories: [
            { name: 'T-shirts', filter: ['women', 'tshirt'] },
            { name: 'Dresses', filter: ['women', 'dress'] },
            { name: 'Kurtas', filter: ['women', 'jeans'] },
            { name: 'Jeans', filter: ['women', 'pants'] },
            { name: 'Sweatshirts', filter: ['women', 'sweatshirt'] },
            { name: 'Hoodies', filter: ['women', 'hoodie'] },
            { name: 'View all', filter: ['women'] },
        ] 
    },
];

export default { SIDEBAR_CATEGORIES };