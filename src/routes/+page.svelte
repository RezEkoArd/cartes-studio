<script>
    import AnimatedNumber from '$lib/components/AnimatedNumber.svelte';
	import {ChevronsDown} from '@lucide/svelte';
    import {reveal} from 'svelte-reveal';
    import EmblaAutoScroll from '$lib/components/EmblaAutoScroll.svelte';
    import Hero from "$lib/assets/hero.png";
</script>

<!-- Hero Section -->
<section class="bg-linear-to-t from-primary-dark to-deep-400">
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
            <img src={Hero} alt="hero-page" class="w-full rounded-lg shadow-lg sr__hide" use:reveal>
        </div>
    </div>
</section>


<!-- About me -->
<section class="bg-accent">
    <div class="max-w-screen-xl flex flex-col gap-10 px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
        <h1 class="font-extrabold text-4xl text-primary">About Cartes ID</h1>

        <EmblaAutoScroll class="bg-primary-light w-full h-20"/>

        <p class="font-normal text-xl lg:text-justify lg:text-4xl leading-6 lg:leading-relaxed text-gray-900 antialiased">We help your brands maximize sales and brand visibility through expert-led TikTok & Shopee affiliate creators and live shopping experiences. Drive engagement, conversions, and sustainable growth with our performance-based creator strategies.</p>

       
    </div>
</section>

