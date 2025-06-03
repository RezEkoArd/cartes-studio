
<script>
  import emblaCarouselSvelte from "embla-carousel-svelte";
  import AutoScroll from 'embla-carousel-auto-scroll';
  import port1 from '$lib/assets/portofolio/treedimension/port1.png';
  import port2 from '$lib/assets/portofolio/treedimension/port2.png';
  import port3 from '$lib/assets/portofolio/treedimension/port3.png';
  import port4 from '$lib/assets/portofolio/treedimension/port4.png';
  import port5 from '$lib/assets/portofolio/treedimension/port5.png';
  import port6 from '$lib/assets/portofolio/treedimension/port6.png';
  import port7 from '$lib/assets/portofolio/treedimension/port7.png';
  import port8 from '$lib/assets/portofolio/treedimension/port8.png';
  import port9 from '$lib/assets/portofolio/treedimension/port9.png';

  

  const portofolio = {
    items : [
      {
        image: port1,
      },
      {
        image: port2,
      },
      {
        image: port3,
      },
      {
        image: port4,
      },
      {
        image: port5,
      },
      {
        image: port6,
      },
      {
        image: port7,
      },
      {
        image: port8,
      },
      {
        image: port9,
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
          
          <figure class="group relative block h-[500px] overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
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
                  3D Production Example
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