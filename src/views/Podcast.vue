<template>
  <div class="podcast-details">
    <div class="cover-wrapper">
      <img
        src="https://picsum.photos/400/600"
        alt="Lorem ipsum dolor sit amet"
      />
    </div>
    <div class="info-wrapper">
      <h1 class="title">Lorem ipsum dolor sit amet</h1>
      <span class="author">John Doe</span>
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh
        nibh, tempus eu commodo ut, vehicula et magna. Proin non metus in neque
        tincidunt tempor nec vitae ex. Aliquam scelerisque sollicitudin nisi.
        Sed blandit sed est sed eleifend. Nam ante nibh, eleifend eu orci nec,
        commodo ultrices mi. Nulla volutpat, lorem euismod molestie elementum,
        felis arcu aliquam arcu, eu euismod justo dolor non urna. Nullam ac
        dapibus nisl. Nullam sagittis vulputate sem, nec viverra elit lobortis
        sit amet. Aliquam accumsan nisl ac aliquet viverra. Sed vitae
        condimentum odio, cursus ultricies metus. Maecenas eu vulputate ante.
        Morbi et posuere mi. Vivamus consequat blandit aliquet. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Pellentesque gravida nec magna quis cursus.
      </p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.podcast-details {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  .info-wrapper {
    .author {
      color: var(--text-light);
      margin-bottom: 20px;
      display: block;
    }
  }
  .description {
    line-height: 1.4;
  }
}
</style>