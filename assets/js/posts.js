const posts = [
  {
    image: './assets/images/recent-post-one.jpg',
    title: ' As a veterinarian and lover of animals',
    lastUpdated: '3 mins ago',
    description:
      'Lorem Ipsum available, but the majo rity have suffered alteration in some words which look.',
  },
  {
    image: './assets/images/recent-post-two.jpg',
    title: ' As a veterinarian and lover of animals',
    lastUpdated: '3 mins ago',
    description:
      'Lorem Ipsum available, but the majo rity have suffered alteration in some words which look.',
  },
  {
    image: './assets/images/recent-post-three.jpg',
    title: ' As a veterinarian and lover of animals',
    lastUpdated: '3 mins ago',
    description:
      'Lorem Ipsum available, but the majo rity have suffered alteration in some words which look.',
  },
];

const postsContainer = document.getElementById('postsContainer');

postsContainer.innerHTML = posts
  .map(
    (post) => `
    <div class="card text-start">
    <img
      src="${post.image}"
      class="card-img-top"
      alt="${post.title}"
    />
    <div class="card-body d-flex flex-column gap-3">
      <h4 class="card-title fw-semibold">
        ${post.title}
      </h4>
      <p
        class="card-text caption"
        style="color: var(--secondary-color)"
      >
        Last updated ${post.lastUpdated}
      </p>
      <p class="card-text caption">${post.description}</p>
      <button
        type="button"
        class="btn bg-transparent text-start p-0 subtitle1 fw-500"
        style="color: var(--secondary-color)"
      >
        Read More+
      </button>
    </div>
  </div>
`
  )
  .join('');
