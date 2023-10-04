const services = [
  {
    image: './assets/images/service-one.jpg',
    title: 'Veterinarian',
    description:
      'Lorem Ipsum available, but\nthe majority have suffered\nalteration in some.',
  },
  {
    image: './assets/images/service-two.jpg',
    title: 'Veterinarian Care',
    description:
      'Lorem Ipsum available, but\nthe majority have suffered\nalteration in some.',
  },
  {
    image: './assets/images/service-three.jpg',
    title: 'Dental Care',
    description:
      'Lorem Ipsum available, but\nthe majority have suffered\nalteration in some.',
  },
];

const servicesContainer = document.getElementById('servicesContainer');

servicesContainer.innerHTML = services
  .map(
    (service) => `
    <div class="d-flex flex-column gap-3">
    <img src="${service.image}" alt="${service.title}" />
    <div class="mt-3 d-flex flex-column gap-3 align-items-center">
    <h3 class="d-flex flex-row gap-3 text-white fw-semibold">
     ${service.title}
    </h3>
    <p class="h4 text-white fw-normal" style="white-space:pre-wrap">${service.description}</p>
  </div>
  </div>
`
  )
  .join('');
