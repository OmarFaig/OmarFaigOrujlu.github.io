const container = document.getElementById('container');
const flashlight = document.querySelector('.flashlight');

const followMouseFlashlight = ({ clientX, clientY }) => {
    const { left, top } = container.getBoundingClientRect();
    flashlight.style.left = `${clientX - left - 175}px`; // Adjust to center the light
    flashlight.style.top = `${clientY - top - 175}px`;  // Adjust to center the light
};

container.addEventListener('mousemove', followMouseFlashlight);
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
