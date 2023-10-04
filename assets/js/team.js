const teamMembers = [
  {
    image: './assets/images/team-one.jpg',
    name: 'Jennifer Mullen',
    job: 'VETERINARY',
  },
  {
    image: './assets/images/team-two.jpg',
    name: 'Sheeren Collins',
    job: 'ADMINISTRATION',
  },
  {
    image: './assets/images/team-three.jpg',
    name: 'Jennifer Mullen',
    job: 'Dental VETERINARY',
  },
  {
    image: './assets/images/team-one.jpg',
    name: 'Jennifer Mullen',
    job: 'VETERINARY',
  },
  {
    image: './assets/images/team-two.jpg',
    name: 'Sheeren Collins',
    job: 'ADMINISTRATION',
  },
  {
    image: './assets/images/team-three.jpg',
    name: 'Jennifer Mullen',
    job: 'Dental VETERINARY',
  },
];

const teamContainer = document.getElementById('teamContainer');

teamContainer.innerHTML = teamMembers
  .map(
    (teamMember) => `
    <div class="swiper-slide d-flex flex-column gap-3">
      <img src="${teamMember.image}" alt="${teamMember.name}" />
      <div class="mt-3 d-flex flex-column gap-3 align-items-center">
        <h3 class="d-flex flex-row gap-3 fw-semibold">
        ${teamMember.name}
        </h3>
        <span class="text-uppercase h4 fw-normal">${teamMember.job}</span>
        <div class="d-flex flex-row gap-3">
          <i class="ph ph-instagram-logo text-white p-1 rounded-circle" style="font-size:30px; background-color:var(--bs-primary-dark)"></i>
          <i class="ph-fill ph-facebook-logo text-white p-1 rounded-circle" style="font-size:30px; background-color:var(--bs-primary-dark)"></i>
          <i class="ph ph-twitter-logo text-white p-1 rounded-circle" style="font-size:30px;  background-color:var(--bs-primary-dark)"></i>
          <i class="ph ph-whatsapp-logo text-white p-1 rounded-circle" style="font-size:30px; background-color:var(--bs-primary-dark)"></i>
        </div>
      </div>
    </div>
`
  )
  .join('');

var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
