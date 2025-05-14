<script>
	import { ChevronRight, ChevronLeft, Star } from '@lucide/svelte';
    import emblaCarouselSvelte from 'embla-carousel-svelte';
    import Autoplay from 'embla-carousel-autoplay';
    import { onDestroy } from 'svelte';
    import profile1 from '$lib/assets/profile/profile1.jpg';
    import profile2 from '$lib/assets/profile/profile2.jpg';
    import profile3 from '$lib/assets/profile/profile3.jpg';


    // ... testimonials array sama seperti sebelumnya ...

    let testimonials = [
      {
        name: "Andi Wijaya",
        position: "CEO StartupTech",
        quote: "Layanan yang sangat profesional, timnya cepat tanggap dan hasilnya sangat memuaskan!",
        image: profile1
      },
      {
        name: "Rina Ayu",
        position: "Marketing Manager Shopee",
        quote: "Kami sangat senang bekerja sama, semua kebutuhan desain kami terpenuhi dengan cepat dan tepat.",
        image: profile2
      },
      {
        name: "Dimas Pratama",
        position: "Founder Dims Studio",
        quote: "Sangat recommended untuk pembuatan website maupun branding!",
        image: profile3
      },
      {
        name: "Andi Wijaya",
        position: "CEO StartupTech",
        quote: "Layanan yang sangat profesional, timnya cepat tanggap dan hasilnya sangat memuaskan!",
        image: profile1
      },
      {
        name: "Rina Ayu",
        position: "Marketing Manager Shopee",
        quote: "Kami sangat senang bekerja sama, semua kebutuhan desain kami terpenuhi dengan cepat dan tepat.",
        image: profile2
      },
      {
        name: "Dimas Pratama",
        position: "Founder Dims Studio",
        quote: "Sangat recommended untuk pembuatan website maupun branding!",
        image: profile3
      }
    ];

    let embla;
    const options = { 
        loop: true,
        align: 'start',
        containScroll: 'trimSnaps'
    };
    const plugins = [Autoplay({ delay: 2000 })];

</script>

<div class="embla relative">
    <div class="embla__viewport overflow-hidden" use:emblaCarouselSvelte={{ options, plugins }} bind:this={embla}>
      <div class="embla__container flex">
        {#each testimonials as testimonial}
          <div
            class="embla__slide 
              flex-[0_0_100%] 
              sm:flex-[0_0_50%] 
              lg:flex-[0_0_33.333%] 
              min-w-0 pl-4"
          >
            <div class="bg-primary-dark rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-between h-full">
              <div class="flex gap-1 mb-4 text-yellow-400">
                {#each { length: 5 } as _, i}
                  <Star size={20} class="fill-current" />
                {/each}
              </div>
              
              <p class="text-slate-100 mb-6 italic">"{testimonial.quote}"</p>
              
              <div class="flex items-center gap-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  class="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 class="text-white font-bold">{testimonial.name}</h4>
                  <p class="text-white text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
  
<style >
    /* Pastikan untuk mengimpor CSS Embla */

    .embla__slide {
        padding: 0 10px;
    }
    
    .embla__viewport {
        padding: 20px 0;
    }
</style>