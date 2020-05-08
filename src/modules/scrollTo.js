const scrollTo = () => {
    let nextSection = document.getElementById('service-block'),
        btn = document.querySelector('a[href="#service-block"]');

    const sectionTo = () => {
        nextSection.scrollIntoView({block: 'center', behavior: 'smooth'});
    }

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        sectionTo();
    });
};

export default scrollTo;