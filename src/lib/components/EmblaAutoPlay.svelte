<script>
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import Autoplay from 'embla-carousel-autoplay';

  import hero from "$lib/assets/hero.png";

  let options = { loop: true,  }
  let plugins = [Autoplay()]
</script>

<div class="overflow-hidden" use:emblaCarouselSvelte="{{ options, plugins }}">
  <div class="flex h-]">
    <div class="embla__slide">
      <img src={hero} alt="slide-1" class="aspect-video w-full max-w-md md:max-w-3xl lg:max-w-4xl mx-auto object-cover rounded-lg" loading="lazy">
    </div>
    <div class="embla__slide">
      <img src={hero} alt="slide-1" class="aspect-video w-full max-w-md md:max-w-3xl lg:max-w-4xl mx-auto object-contain rounded-lg" loading="lazy">
    </div>
    <div class="embla__slide">
      <img src={hero} alt="slide-1" class="aspect-video w-full max-w-md md:max-w-3xl lg:max-w-4xl mx-auto object-cover rounded-lg" loading="lazy">
    </div>
  </div>
</div>


<style>

  .embla__slide {
    flex: 0 0 100%;
    width: 20rem;

  }
</style>