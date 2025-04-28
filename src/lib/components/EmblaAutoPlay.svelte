<script>
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import Autoplay from 'embla-carousel-autoplay';

  import slide1 from "$lib/assets/img1.jpg";
  import slide2 from "$lib/assets/img2.jpg";
  import slide3 from "$lib/assets/img6.jpg";

  let options = { loop: true,  }
  let plugins = [Autoplay()]
</script>

<div class="overflow-hidden" use:emblaCarouselSvelte="{{ options, plugins }}">
  <div class=" flex">
    <div class="embla__slide">
      <img src={slide1} alt="slide-1" class="aspect-video w-full max-w-md md:max-w-3xl lg:max-w-4xl mx-auto object-cover rounded-lg" loading="lazy">
    </div>
    <div class="embla__slide">
      <img src={slide2} alt="slide-1" class="aspect-video w-full max-w-md md:max-w-3xl lg:max-w-4xl mx-auto object-contain rounded-lg" loading="lazy">
    </div>
    <div class="embla__slide">
      <img src={slide3} alt="slide-1" class="aspect-video w-full max-w-md md:max-w-3xl lg:max-w-4xl mx-auto object-cover rounded-lg" loading="lazy">
    </div>
  </div>
</div>


<style>

  .embla__slide {
    flex: 0 0 100%;
    min-width: 20rem;

  }
</style>