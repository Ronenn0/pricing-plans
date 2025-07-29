import { Plan } from "./script.js";

export let plans;

export function loadPlans() {
    plans = [{
        mostPopular: false,
        icon: 'rocket',
        title: 'Basic',
        price: 9,
        sentence: 'Perfect for individuals and small projects',
        content: {
            checkedList: [
                '5 Projects',
                '20GB Storage',
                'Basic Support',
                'Email Notifications',
            ],
            uncheckedList: [
                'Advanced Analytics',
                'Custom Domain'
            ]
        }
    }, {
        mostPopular: true,
        icon: 'gem',
        title: 'Pro',
        price: 29,
        sentence: 'Great for growing buisnesses and teams',
        content: {
            checkedList: [
                '20 Projects',
                '50GB Storage',
                'Priority Support',
                'Email Notifications',
                'Advanced Analytics'
            ],
            uncheckedList: [
                'Custom Domain'
            ]
        }
    }, {
        mostPopular: false,
        icon: 'building',
        title: 'Enterprise',
        price: 79,
        sentence: 'For large companies and organizations',
        content: {
            checkedList: [
                'Unlimited Projects',
                '200GB Storage',
                '24/7 Premium Support',
                'Email Notifications',
                'Advanced Analytics',
                'Custom Domain'
            ],
            uncheckedList: []
        }
    }].map(plan => new Plan(plan));
}