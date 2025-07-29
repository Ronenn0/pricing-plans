import { plans, loadPlans } from './plans.js'

export class Plan {
    mostPopular;
    icon;
    title;
    price;
    sentence;
    content = {
        checkedList: ['', ''],
        uncheckedList: ['', '']
    };
    constructor(planDetails) {
        this.icon = planDetails.icon;
        this.title = planDetails.title;
        this.price = planDetails.price;
        this.sentence = planDetails.sentence;
        this.content = planDetails.content;
        this.mostPopular = planDetails.mostPopular;
    }
    getCardHTML() {
        return `
        <div class="card">
                ${this.mostPopular ? '<span class="most-popular">Most Popular</span>' : ''}
                <i class="fas fa-${this.icon}"></i>
                <h3 class="plan-title">${this.title}</h3>
                <h3 class="price">${this.price}</h3>
                <h4 class="explaination">${this.sentence}</h4>
                <ul class="plan-content">
                    ${this.getPlanContent()}
                </ul>
                <button class="get-started">Get Started</button>
            </div>
        `;
    }
    getPlanContent() {
        let listItemsHTML = '';

        this.content.checkedList.forEach(item => {
            listItemsHTML += `
            <li>
                    <i class="fas fa-check"></i>
                    <span>${item}</span>
                </li>
            `;
        });
        this.content.uncheckedList.forEach(item => {
            listItemsHTML += `
            <li>
                    <i class="fas fa-times"></i>
                    <span>${item}</span>
                </li>
            `;
        });
        return listItemsHTML;
    }
    static displayAll() {
        const cardsContainer = document.querySelector('.cards');
        cardsContainer.innerHTML = '';

        const cardsHTML = plans.reduce((html, plan) => html + plan.getCardHTML(), '');
        cardsContainer.innerHTML = cardsHTML;
    }
}

loadPlans();
Plan.displayAll();