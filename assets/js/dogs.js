const dogs = [
  {
    image: './assets/images/dog-two.png',
    price: '50',
    discountedPrice: '30',
    name: 'Dog',
  },
  {
    image: './assets/images/dog-three.png',
    price: '40',
    discountedPrice: '25',
    name: 'Dog 1',
  },
  {
    image: './assets/images/dog-four.png',
    price: '45',
    discountedPrice: '20',
    name: 'Dog 2',
  },
];

const dogsContainer = document.getElementById('dogsContainer');

dogsContainer.innerHTML = dogs
  .map(
    (dog) => `
    <div class="d-flex flex-column gap-3">
    <img src="${dog.image}" alt="${dog.name}" />
    <div class="mt-3 d-flex flex-column gap-3 align-items-center">
      <h3 class="d-flex flex-row gap-3 text-white fw-semibold">
        <del>$50</del>
        <span>$30</span>
      </h3>
      <a href="#" class="btn text-white subtitle1 rounded-pill d-flex align-items-center justify-content-center" style="width:200px; height:60px; background-color:var(--secondary-color);">Buy Now</a>
    </div>
  </div>
`
  )
  .join('');
