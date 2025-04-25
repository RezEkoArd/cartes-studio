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
<section class="bg-accent flex flex-col items-center justify-center">
    <div class="max-w-screen-xl flex flex-col gap-10 px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
        <h1 class="font-extrabold text-4xl text-primary" use:reveal={{preset: 'fade',y: 100, duration: '2000'}}>Why us</h1>

        <div use:reveal={{preset: 'fade',y: 100, duration: '2000'}}>
            <EmblaAutoScroll class="bg-primary-light w-full h-20"/>
        </div>

        <p class="font-normal text-xl lg:text-center lg:text-3xl leading-6 lg:leading-10 lg:font-medium text-gray-900 antialiased" use:reveal={{preset: 'fade',x: 100, duration: '2000'}}>Cartes.id adalah partner strategis brand Anda dalam membangun, mengelola, dan mengembangkan
            aset digital mulai dari live streaming, produksi konten, manajemen media sosial, hingga foto produk untuk mendorong pertumbuhan jangka panjang di era digital</p>
    </div>

    <div class="w-full flex flex-col items-center justify-center content-center gap-3 lg:flex-row lg:gap-10 mb-10" use:reveal={{preset: 'fade',y: 100, duration: '2000'}}>
        <AnimatedNumber
        target={50}
        label="Toko Aktif"
        content="Creators +"
        duration={1500}
        classes="mx-auto" />

        <AnimatedNumber
        target={1000}
        label="Toko Aktif"
        content="Creators +"
        duration={1500}
        classes="mx-auto" />

        <AnimatedNumber
        target={500}
        label="Toko Aktif"
        content="Creators +"
        duration={1500}
        classes="mx-auto" />
    </div>
</section>

