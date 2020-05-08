const changePhotoTeam = () => {
    const photos = document.querySelectorAll('.command__photo');

    photos.forEach((photo) => {
        let src = photo.getAttribute('src');

        photo.addEventListener('mouseenter', (e) => {
            event.target.src = event.target.dataset.img;
        });
        photo.addEventListener('mouseleave', (e) => {
            event.target.src = src;
        });
    });
};

export default changePhotoTeam;