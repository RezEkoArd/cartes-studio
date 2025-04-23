<script>
  import AnimatedNumber from '$lib/components/AnimatedNumber.svelte';
	import {ChevronsDown} from '@lucide/svelte';
    import {reveal} from 'svelte-reveal';
</script>


<section class="bg-primary-dark">
    <div class="max-w-screen-xl flex flex-col-reverse gap-10 px-4 py-16 mx-auto lg:flex-row lg:items-center lg:justify-between">
        <div class="lg:mb-0 lg:max-w-xl sr__hide" use:reveal={{preset: 'fade', duration: '2000'}}>
            <h1 class="text-4xl font-extrabold leading-tight tracking-tight text-white dark:text-white sm:text-5xl">
                Clarity in Every Creation
            </h1>
            <p class="mt-6 text-lg text-gray-300">
                Agency digital yang siap membawa brand kamu ke level berikutnya dengan strategi dan desain yang impactful.
            </p>
            <div class="mt-10 lg:mt-40 flex flex-wrap gap-1 text-white text-2xl">
                <span class="animate-bounce">
                    <ChevronsDown size="25"/>
                </span> 
                <p class="animate-bounce ">ScrollDown</p>
              </div>
        </div>

        <div class="lg:w-1/2 " >
            <img src="hero.png" alt="hero-page" class="w-full rounded-lg shadow-lg sr__hide" use:reveal>
        </div>
    </div>
</section>

<section class="">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AnimatedNumber
          target={50}
          label="Toko Aktif"
          duration={1500}
          class="border-purple-500 text-purple-600"
        />
        
        <AnimatedNumber
          target={1500}
          label="Pelanggan"
          duration={2000}
          format
          class="border-green-500 text-green-600"
        />
        
        <AnimatedNumber
          target={95}
          label="Rating"
          duration={2500}
          class="border-orange-500 text-orange-600"
        />
      </div>
</section>

