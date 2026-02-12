// Pets Data
const pets = [
    {
        id: 1,
        type: "Dog",
        name: "Luna",
        age: "2 years",
        gender: "Female",
        personality: ["Calm", "Friendly", "Playful"],
        image: "images/p5.jpg"
    },
    {
        id: 2,
        type: "Dog",
        name: "Simba",
        age: "1 year",
        gender: "Male",
        personality: ["Energetic", "Curious", "Loving"],
        image: "images/p2.jpg"
    },
    {
        id: 3,
        type: "Cat",
        name: "Bella",
        age: "3 years",
        gender: "Female",
        personality: ["Gentle", "Quiet", "Affectionate"],
        image: "images/p3.jpg"
    },
    {
        id: 4,
        type: "Dog",
        name: "Max",
        age: "6 months",
        gender: "Male",
        personality: ["Playful", "Active", "Social"],
        image: "images/p4.jpg"
    },
    {
        id: 5,
        type: "Dog",
        name: "Milo",
        age: "1 year",
        gender: "Male",
        personality: ["Sweet", "Cuddly", "Shy"],
        image: "images/p1.jpg"
    },
    {
        id: 6,
        type: "Dog",
        name: "Daisy",
        age: "2 years",
        gender: "Female",
        personality: ["Loyal", "Protective", "Gentle"],
        image: "images/luna.jpg"
    },
    {
        id: 7,
        type: "Dog",
        name: "Oliver",
        age: "4 years",
        gender: "Male",
        personality: ["Independent", "Smart", "Loving"],
        image: "images/p5.jpg"
    },
    {
        id: 8,
        type: "Dog",
        name: "Rocky",
        age: "3 years",
        gender: "Male",
        personality: ["Brave", "Friendly", "Active"],
        image: "images/p2.jpg"
    }
];

const stories = [
    {
        id: 1,
        image: "images/p5.jpg",
        caption: "Luna was rescued from the streets, now she has a loving home"
    },
    {
        id: 2,
        image: "images/p2.jpg",
        caption: "Simba recovered from injuries and found his forever family"
    },
    {
        id: 3,
        image: "images/p3.jpg",
        caption: "Bella was starving, now she's healthy and happy"
    },
    {
        id: 4,
        image: "images/p4.jpg",
        caption: "Max was abandoned as a puppy, now he's thriving"
    },
    {
        id: 5,
        image: "images/p1.jpg",
        caption: "Milo found safety and warmth after living on cold streets"
    },
    {
        id: 6,
        image: "images/luna.jpg",
        caption: "Daisy was rescued and now brings joy to her new family"
    },
    {
        id: 7,
        image: "images/p5.jpg",
        caption: "Oliver overcame fear and now trusts humans again"
    },
    {
        id: 8,
        image: "images/p2.jpg",
        caption: "Rocky found his forever home after months on the streets"
    }
];

// Render Featured Pets on Home
function renderFeaturedCats() {
    const grid = document.getElementById('cats-grid');
    if (!grid) return;
    
    grid.innerHTML = pets.slice(0, 4).map(pet => `
        <div class="card cat-card">
            <img src="${pet.image}" alt="${pet.name}">
            <h3 class="cat-name">${pet.name}</h3>
            <p class="cat-info">${pet.type} • ${pet.age} • ${pet.gender}</p>
            <div class="cat-tags">
                ${pet.personality.map(trait => `<span class="cat-tag">${trait}</span>`).join('')}
            </div>
            <a href="#adopt" class="btn btn-outline btn-full">Adopt Me</a>
        </div>
    `).join('');
}

// Render Adoption Pets
function renderAdoptCats() {
    const grid = document.getElementById('adopt-grid');
    if (!grid) return;
    
    grid.innerHTML = pets.map(pet => `
        <div class="card cat-card">
            <img src="${pet.image}" alt="${pet.name}">
            <h3 class="cat-name">${pet.name}</h3>
            <p class="cat-info">${pet.type} • ${pet.age} • ${pet.gender}</p>
            <div class="cat-tags">
                ${pet.personality.map(trait => `<span class="cat-tag">${trait}</span>`).join('')}
            </div>
            <button class="btn btn-primary btn-full" onclick="showAdoptForm('${pet.name}')">Adopt ${pet.name}</button>
        </div>
    `).join('');
}

// Show Adoption Form
function showAdoptForm(petName) {
    const form = document.getElementById('adoption-form');
    const selectedCat = document.getElementById('selected-cat');
    selectedCat.textContent = petName;
    form.classList.remove('hidden');
    form.scrollIntoView({ behavior: 'smooth' });
}

// Handle Adoption Form Submit
document.addEventListener('DOMContentLoaded', () => {
    const adoptForm = document.getElementById('adopt-form');
    if (adoptForm) {
        adoptForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const petName = document.getElementById('selected-cat').textContent;
            const formData = new FormData(e.target);
            const name = formData.get('name') || e.target[0].value;
            const email = formData.get('email') || e.target[1].value;
            const phone = formData.get('phone') || e.target[2].value;
            const city = formData.get('city') || e.target[3].value;
            const reason = formData.get('reason') || e.target[4].value;
            
            const mailtoLink = `mailto:yogesh2808e@gmail.com?subject=Adoption Request for ${petName}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0ACity: ${city}%0D%0AReason: ${reason}`;
            window.location.href = mailtoLink;
            
            adoptForm.reset();
            document.getElementById('adoption-form').classList.add('hidden');
        });
    }
});

// Render Stories
function renderStories() {
    const grid = document.getElementById('stories-grid');
    if (!grid) return;
    
    grid.innerHTML = stories.map(story => `
        <div class="story-card">
            <img src="${story.image}" alt="${story.caption}">
            <p class="story-caption">${story.caption}</p>
        </div>
    `).join('');
}

// Donation Amount Selection
let selectedAmount = '';
let customAmount = '';

document.addEventListener('DOMContentLoaded', () => {
    const amountBtns = document.querySelectorAll('.amount-btn');
    const customInput = document.getElementById('custom-amount');
    const donateBtn = document.getElementById('donate-btn');
    
    amountBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            amountBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedAmount = btn.dataset.amount;
            if (customInput) customInput.value = '';
            customAmount = '';
        });
    });
    
    if (customInput) {
        customInput.addEventListener('input', (e) => {
            customAmount = e.target.value;
            selectedAmount = '';
            amountBtns.forEach(b => b.classList.remove('active'));
        });
    }
    
    if (donateBtn) {
        donateBtn.addEventListener('click', () => {
            const amount = customAmount || selectedAmount;
            if (amount) {
                alert(`Thank you for your donation of ${amount}!`);
            } else {
                alert('Please select or enter an amount');
            }
        });
    }
    
    const paymentBtns = document.querySelectorAll('.payment-btn');
    paymentBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const amount = customAmount || selectedAmount;
            if (amount) {
                alert(`Thank you for your donation of ${amount}!`);
            } else {
                alert('Please select or enter an amount');
            }
        });
    });
});

// Contact Form
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const name = formData.get('name') || e.target[0].value;
            const email = formData.get('email') || e.target[1].value;
            const message = formData.get('message') || e.target[2].value;
            
            const mailtoLink = `mailto:yogesh2808e@gmail.com?subject=Contact from ${name}&body=From: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
            window.location.href = mailtoLink;
            
            contactForm.reset();
        });
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedCats();
    renderAdoptCats();
    renderStories();
});
