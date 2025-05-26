
<script>
    import emblaCarouselSvelte from "embla-carousel-svelte";
    import AutoScroll from 'embla-carousel-auto-scroll';
    import client1 from '$lib/assets/logo-partner/Ultrajaya.svg';
    import client2 from '$lib/assets/logo-partner/GBK-logo.jpeg';
    import client3 from '$lib/assets/logo-partner/peavolk.jpeg';
    import client4 from '$lib/assets/logo-partner/dAlba.jpeg';
    
  
    const portofolio = {
      items : [
        {
          image: client1,
        },
        {
          image: client2,
        },
        {
          image: client3,
        },
        {
          image: client4,
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
      <div class="embla__container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center w-full">
        {#each portofolio.items as item}
          <div class="embla__slide 
            flex-[0_0_90%] 
            sm:flex-[0_0_45%] 
            md:flex-[0_0_35%] 
            lg:flex-[0_0_30%] 
            xl:flex-[0_0_25%]
            min-w-0 pl-4">
            
            <img 
                src={item.image}
                alt="Portfolio showcase"
                class="w-40 h-auto object-contain"
                loading="lazy"
              />
            
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