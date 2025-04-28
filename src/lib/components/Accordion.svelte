<script>
  import { CirclePlus } from "@lucide/svelte";
  import { slide } from "svelte/transition";
  
  export let entry;
  export let index;
  export let activeIndex;
  
  const { title, content, image } = entry;
  
  const toggle = () => {
    activeIndex = activeIndex === index ? -1 : index;
  };
  
  $: isOpen = activeIndex === index;


</script>

<div class="w-full lg:w-full lg:flex-1">
  <button
    class="w-full flex justify-between items-center py-4 text-left text-lg font-semibold text-primary-dark p-5 hover:bg-deep-500 hover:text-accent transition duration-700"
    on:click={toggle}
    aria-expanded={isOpen}
    aria-controls={`accordion-${index}`}
  >
    {title}
    <span class="text-primary-dark">
      <CirclePlus
        color="#ffffe7"
        class="transition-transform duration-500 {isOpen ? 'rotate-45' : ''}"
      />
    </span>
  </button>

  <div id={`accordion-${index}`}>
    {#if isOpen}
      <div
        class="w-full grid grid-cols-1 lg:grid-cols-5 gap-5 bg-primary-dark px-4 pb-4 text-gray-700 text-base items-start"
        transition:slide={{ duration: 500 }}
      >
        <div class="w-full col-span-1 lg:col-start-1 lg:row-start-1 lg:col-span-3">
          {@html content}
        </div>
        <div class="w-full col-span-1 ">
          <img
            src={image}
            alt={title}
            class="w-full h-auto rounded-lg shadow-xl object-cover "
            loading="lazy"
          />
        </div>
      </div>
    {/if}
  </div>
</div>

<!-- {#if index === 0 && activeIndex === -1}
  <div class="hidden lg:block lg:w-1/2 lg:flex-1 lg:pl-8 lg:sticky lg:top-20">
    <img
      src={entry.image}
      alt={entry.title}
      class="w-full h-auto rounded-lg shadow-xl object-cover"
      loading="eager"
    />
  </div>
{/if} -->

