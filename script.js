const words = [
    "Abundance", "Bravery", "Creativity", "Dynamism", "Elegance", "Freedom", "Gratitude", "Harmony", "Insight", "Joy",
    "Kindness", "Luminous", "Majesty", "Nurture", "Optimism", "Passion", "Quantum", "Resilience", "Serenity", "Tranquil",
    "Uplift", "Vibrant", "Wisdom", "Xenon", "Yield", "Zenith", "Aura", "Bliss", "Cosmic", "Delight", "Ethereal", "Flora",
    "Glow", "Haven", "Infinite", "Jubilee", "Karma", "Lyric", "Mystic", "Nebula", "Oceanic", "Pure", "Quaint", "Radiant",
    "Solace", "Theory", "Unity", "Vortex", "Wander", "Youth", "Zephyr"
];

function generateWords() {
    const count = parseInt(document.getElementById('word-count').value) || 1;
    const output = document.getElementById('word-output');
    const list = document.getElementById('word-list');
    
    const selected = [];
    for (let i = 0; i < count; i++) {
        selected.push(words[Math.floor(Math.random() * words.length)]);
    }

    if (count === 1) {
        output.textContent = selected[0];
        output.style.display = 'block';
        list.innerHTML = '';
    } else {
        output.style.display = 'none';
        list.innerHTML = selected.map(w => `<span class="word-tag">${w}</span>`).join('');
    }
    
    // Re-trigger animation
    output.style.animation = 'none';
    output.offsetHeight; // trigger reflow
    output.style.animation = null;
}
