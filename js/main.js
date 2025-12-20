document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('sliderTrack');
    const slides = Array.from(track.children);
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const dotsContainer = document.getElementById('dotsContainer');
    
    let currentIndex = 0;

    // 1. Auto-create Dots based on the number of images added
    slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => moveToSlide(i));
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.children);

    // 2. Logic to slide and update active dot
    function moveToSlide(index) {
        // Handle looping back to start or end
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        
        currentIndex = index;
        const amountToMove = -100 * currentIndex;
        track.style.transform = `translateX(${amountToMove}%)`;
        
        // Update dots state
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    // 3. Attach Event Listeners to buttons
    nextBtn.addEventListener('click', () => moveToSlide(currentIndex + 1));
    prevBtn.addEventListener('click', () => moveToSlide(currentIndex - 1));

    toggleSub('single');
});

// 2. Subscription Toggle
function toggleSub(type) {
    const singleContent = document.getElementById('singleContent');
    const doubleContent = document.getElementById('doubleContent');
    const radioS = document.getElementById('radioSingle');
    const radioD = document.getElementById('radioDouble');

    if (type === 'single') {
        singleContent.style.display = 'block';
        doubleContent.style.display = 'none';
        radioS.checked = true;
    } else {
        singleContent.style.display = 'none';
        doubleContent.style.display = 'block';
        radioD.checked = true;
    }
    
    // Logic to update Add to Cart link based on selection
    updateCartLink();
}

function updateCartLink() {
    const isDouble = document.getElementById('radioDouble').checked;
    const btn = document.getElementById('addToCart');
    // Example logic for the link change
    if(isDouble) {
        btn.onclick = () => window.location.href = "dummy-link-double";
    } else {
        btn.onclick = () => window.location.href = "dummy-link-single";
    }
}


