<script>
  import { cubicOut } from "svelte/easing";
  import { tweened } from "svelte/motion";

    let easing = cubicOut;
    let { label, content, target, duration, classes  } = $props();
    let format = false;

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

<div use:animationScroll class="{classes} border-2 w-[300px] h-[200px] flex justify-center items-center flex-col border-primary-dark rounded-lg p-6 text-center transition-all duration-300 hover:scale-105">
    <p class="text-gray-800 text-md font-medium" class:label> {label} </p>
    <div class="text-6xl font-bold text-primary-dark mb-2">
        {format ? formatter.format(Math.floor($count)) : Math.floor($count)}
    </div>
    <p class="text-slate-800 text-2xl font-semibold">{content}</p>
</div>


<!-- Cara menggunakannya  -->

<!-- <AnimatedNumber
target={50}
label="Toko Aktif"
duration={1500}
class="border-purple-500 text-purple-600"
/> -->