
<script>
  import emblaCarouselSvelte from "embla-carousel-svelte";
  import AutoScroll from 'embla-carousel-auto-scroll';
  import live1 from '$lib/assets/portofolio/livestream/live1.png';
  import live2 from '$lib/assets/portofolio/livestream/live2.png';
  import live3 from '$lib/assets/portofolio/livestream/live3.png';
  import live4 from '$lib/assets/portofolio/livestream/live4.png';
  import live5 from '$lib/assets/portofolio/livestream/live5.png';
  import live6 from '$lib/assets/portofolio/livestream/live6.png';
  import live7 from '$lib/assets/portofolio/livestream/live7.png';
  import live8 from '$lib/assets/portofolio/livestream/live8.png';
  import live9 from '$lib/assets/portofolio/livestream/live9.png';
  import live10 from '$lib/assets/portofolio/livestream/live10.png';
  import live11 from '$lib/assets/portofolio/livestream/live11.png';
  import live12 from '$lib/assets/portofolio/livestream/live12.png';
  

  const portofolio = {
    items : [
      {
        image: live1,
      },
      {
        image: live2,
      },
      {
        image: live3,
      },
      {
        image: live4,
      },
      {
        image: live5,
      },
      {
        image: live6,
      },
      {
        image: live7,
      },
      {
        image: live8,
      },
      {
        image: live9,
      },
      {
        image: live10,
      },
      {
        image: live11,
      },
      {
        image: live12,
      },
    ]
  }

  let embla;
  const options = {
    speed: 1,
    stopOnInteraction: true,
    stopOnMouseEnter: true,
    reset: true,
  }
  
  
  const plugins = [AutoScroll({ options})];
</script>

<div class="embla relative py-12">
  <div class="embla__viewport overflow-hidden" use:emblaCarouselSvelte={{ options, plugins }} bind:this={embla}>
    <div class="embla__container flex">
      {#each portofolio.items as item}
        <div class="embla__slide 
          flex-[0_0_90%] 
          sm:flex-[0_0_45%] 
          md:flex-[0_0_35%] 
          lg:flex-[0_0_30%] 
          xl:flex-[0_0_25%]
          min-w-0 pl-4">
          
          <figure class="group relative block h-[400px] overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <img 
              src={item.image}
              alt="Portfolio showcase"
              class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            
            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <figure class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <figcaption class="text-sm font-medium">
                  Live Production Example
                </figcaption>
              </figure>
            </div>
          </figure>
          
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .embla__slide {
    padding: 0 10px;
  }
  
  .embla__viewport {
    padding: 20px 0;
  }
</style>