import {
    facebook,
    instagram,
    support,
    shieldTick,
    truckFast,
    twitter
} from '../assets/icons/index';

import {
    bigShoe1,
    bigShoe2,
    bigShoe3,
    customer1,
    customer2,
    shoe4,
    shoe5,
    shoe6,
    shoe7,
    shoe8,
    thumbnailShoe1,
    thumbnailShoe2,
    thumbnailShoe3
} from '../assets/images/index';

export const navLinks = [
    { id: 1, href: "#home", label: "Home" },
    { id: 2, href: "#about-us", label: "About Us" },
    { id: 3, href: "#products", label: "Products" },
    { id: 4, href: "#contact-us", label: "Contact Us" },
    { id: 5, href: "https://samrat2k03.github.io/Portfolio/", label: "Creator" }
];

export const shoes = [
    {
        id: 1,
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        id: 2,
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        id: 3,
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { id: 1, value: '5k+', label: 'Brands' },
    { id: 2, value: '1000+', label: 'Shops' },
    { id: 3, value: '2500k+', label: 'Customers' },
];

export const products = [
    {
        id: 1,
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        rating: "(4.5)",
        price: "₹2,000",
    },
    {
        id: 3,
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        rating: "(4.3)",
        price: "₹2,100",
    },
    {
        id: 4,
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        rating: "(4.2)",
        price: "₹3,200",
    },
    {
        id: 5,
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        rating: "(5)",
        price: "₹2,230",
    },
    {
        id: 2,
        imgURL: shoe8,
        name: "Nike Air Jordan-01",
        rating: "(4.5)",
        price: "₹2,000",
    },
];

export const services = [
    {
        id: 1,
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        id: 2,
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        id: 3,
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        id: 1,
        imgURL: customer1,
        customerName: 'Samrat',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        id: 2,
        imgURL: customer2,
        customerName: 'Gwen Stacy',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];

export const footerLinks = [
    {
        id: 1,
        title: "Products",
        links: [
            { id: 1, name: "Air Force 1", link: "/" },
            { id: 2, name: "Air Max 1", link: "/" },
            { id: 3, name: "Air Jordan 1", link: "/" },
            { id: 4, name: "Air Force 2", link: "/" },
            { id: 5, name: "Nike Waffle Racer", link: "/" },
            { id: 6, name: "Nike Cortez", link: "/" },
        ],
    },
    {
        id: 2,
        title: "Help",
        links: [
            { id: 1, name: "About us", link: "/" },
            { id: 2, name: "FAQs", link: "/" },
            { id: 3, name: "How it works", link: "/" },
            { id: 4, name: "Privacy policy", link: "/" },
            { id: 5, name: "Payment policy", link: "/" },
        ],
    },
    {
        id: 3,
        title: "Get in touch",
        links: [
            { id: 1, name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { id: 2, name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { id: 1, src: facebook, alt: "facebook logo" },
    { id: 2, src: twitter, alt: "twitter logo" },
    { id: 3, src: instagram, alt: "instagram logo" },
];
