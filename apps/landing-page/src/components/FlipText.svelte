<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
	import { PUBLIC_APP_URL } from '$env/static/public';

	interface FlipTextProps {
		words: string[];
		interval?: number;
		pretext: string;
	}

	let { words, interval = 2000, pretext }: FlipTextProps = $props();

	let currentIndex = $state(0);
	let currentWord = $derived(words[0]);
	let isFlipping = $state(false);
	let flipWidth = $state(120);

	function measureWidth() {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		ctx.font = '500 28px sans-serif';
		flipWidth = Math.ceil(words.reduce((m, w) => Math.max(m, ctx.measureText(w).width), 0)) + 8;
	}

	function flip() {
		isFlipping = true;
		setTimeout(() => {
			currentIndex = (currentIndex + 1) % words.length;
			currentWord = words[currentIndex];
			isFlipping = false;
		}, 500);
	}

	$effect(() => {
		measureWidth();
		const timer = setInterval(flip, interval);
		return () => clearInterval(timer);
	});
</script>

<h1
	class="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-6 font-headline font-black text-2xl md:text-5xl lg:text-6xl text-center md:text-start tracking-tighter text-on-surface uppercase leading-[0.9]"
>
	{pretext}
	<span class="inline-block perspective-[600px] md:h-[1.4em] h-auto" style:width="{flipWidth}px">
		<button
			onclick={() => window.open(PUBLIC_APP_URL, '_blank')}
			class="w-fit p-3 bg-primary-container text-on-primary-container font-headline font-bold text-lg rounded-lg tracking-wider uppercase cursor-pointer select-none shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:brightness-105 active:scale-[0.98] active:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
		>
			<div class="inline-flex justify-center items-center">
				<span
					class="flex items-center justify-center whitespace-nowrap transform-3d transition-transform duration-1000 ease-in-out text-glow"
					class:transform-[rotateX(90deg)]={isFlipping}
				>
					{currentWord}
				</span>
				<ArrowRight size={18} />
			</div>
		</button>
	</span>
</h1>
