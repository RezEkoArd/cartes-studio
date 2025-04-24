<script>
  import { cubicOut } from "svelte/easing";
  import { tweened } from "svelte/motion";


    export let target = 0;
    export let duration = 2000;
    export let easing = cubicOut;
    export let label = "Total";
    export let format = false;

    const count = tweened(0, {duration, easing});

    function animationScroll(node) {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                        count.set(target);
                }
            },
            { threshold: 0.5 }
        )

        observer.observe(node)

        return {
            destroy() {
                observer.disconnect();
            }
        };
    }

    // Format angka jika diperlukan
    const formatter = new Intl.NumberFormat('id-ID');
</script>

<div use:animationScroll class="border-2 border-blue-500 rounded-lg p-6 text-center transition-all duration-300 hover:scale-105">
    <div class="text-5xl font-bold text-blue-600 mb-2">
        {format ? formatter.format(Math.floor($count)) : Math.floor($count)}
    </div>
    <p class="text-gray-600 text-lg font-medium"> {label} </p>
</div>


<!-- Cara menggunakannya  -->

<!-- <AnimatedNumber
target={50}
label="Toko Aktif"
duration={1500}
class="border-purple-500 text-purple-600"
/> -->