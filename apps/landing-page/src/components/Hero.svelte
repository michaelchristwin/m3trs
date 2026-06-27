<script lang="ts">
	import { M3TERS } from '../lib/assets/m3ters';
	import FlipText from './FlipText.svelte';
	import PreviewTRS from './PreviewTRS.svelte';

	const VISIBLE = 9;
	const CENTER_SLOT = Math.floor(VISIBLE / 2);
	const SLOT_OFFSETS = Array.from({ length: VISIBLE }, (_, i) => i - CENTER_SLOT);

	const HOLD_MS = 1400;
	const TRANSITION_MS = 500;

	let viewportRef = $state<HTMLElement | null>(null);
	let trackRef = $state<HTMLElement | null>(null);

	let progress = $state(0);
	let step = $state(304);
	let centerImage = $state(0);
	let animating = $state(false);

	let holdTimer: number | undefined;
	let rafId = 0;
	let ro: ResizeObserver | undefined;

	function easeOutCubic(t: number) {
		return 1 - Math.pow(1 - t, 3);
	}

	function measureStep() {
		if (!trackRef) return;

		const cards = trackRef.querySelectorAll<HTMLElement>('[data-card]');
		if (cards.length < 2) return;

		const a = cards.item(0);
		const b = cards.item(1);
		if (!a || !b) return;

		step = b.getBoundingClientRect().left - a.getBoundingClientRect().left;
	}

	function scheduleNext() {
		if (holdTimer) window.clearTimeout(holdTimer);
		holdTimer = window.setTimeout(startAnimation, HOLD_MS);
	}

	function startAnimation() {
		if (animating) return;
		animating = true;

		const start = performance.now();

		const frame = (now: number) => {
			const t = Math.min((now - start) / TRANSITION_MS, 1);
			progress = easeOutCubic(t);

			if (t < 1) {
				rafId = requestAnimationFrame(frame);
				return;
			}

			animating = false;
			progress = 0;
			centerImage = (centerImage + 1) % M3TERS.length;

			scheduleNext();
		};

		rafId = requestAnimationFrame(frame);
	}

	function opacityFor(dist: number) {
		if (dist <= 0) return 0.67;
		if (dist < 1) return 0.67 - dist * 0.49;
		if (dist < 2) return 0.45 - (dist - 1) * 0.15;
		if (dist < 3) return 0.3 - (dist - 2) * 0.12;
		return 0.18;
	}

	const visibleCards = $derived(
		SLOT_OFFSETS.map((slotOffset) => {
			const imageIndex = (centerImage + slotOffset + M3TERS.length) % M3TERS.length;

			const x = slotOffset - progress;
			const dist = Math.abs(x);
			const isCenter = slotOffset === 0 && progress < 0.5;

			return {
				imageUrl: M3TERS[imageIndex]!,
				opacity: isCenter ? 0.67 : opacityFor(Math.round(dist)),
				background: isCenter
					? 'linear-gradient(rgb(22,22,22) 0%, rgb(62,62,62) 100%)'
					: 'linear-gradient(rgba(22,22,22,0.7) 0%, rgba(62,62,62,0.7) 100%)',
				border: isCenter ? '2px solid rgba(255,255,255,0.3)' : '1px solid rgba(255,255,255,0.1)',
				boxShadow: isCenter ? 'rgb(0,0,0) 0px 0px 77.4px inset' : 'rgb(0,0,0) 0px 0px 0px inset',
				transform: `scale(${isCenter ? 1.03 : 1})`
			};
		})
	);

	const trackStyle = $derived(
		`transform: translateX(${-progress * step}px); will-change: transform;`
	);

	$effect(() => {
		measureStep();

		ro = new ResizeObserver(() => measureStep());

		if (viewportRef) ro.observe(viewportRef);

		scheduleNext();

		return () => {
			if (holdTimer) window.clearTimeout(holdTimer);
			if (rafId) cancelAnimationFrame(rafId);
			ro?.disconnect();
		};
	});
</script>

<section
	class="relative flex h-170 w-full flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
>
	<div
		bind:this={viewportRef}
		class="absolute inset-0 flex items-center justify-center overflow-hidden"
	>
		<div bind:this={trackRef} class="flex items-center gap-4 sm:gap-5 lg:gap-6" style={trackStyle}>
			{#each visibleCards as card, i (i)}
				<div
					data-card
					class="h-fit w-35 shrink-0 sm:w-50 lg:w-70"
					style:opacity={card.opacity}
					style:background={card.background}
					style:border={card.border}
					style:box-shadow={card.boxShadow}
					style:transform={card.transform}
					style:border-radius="38px"
				>
					<PreviewTRS name="" imageUrl={card.imageUrl} meterId="0" />
				</div>
			{/each}
		</div>
	</div>

	<div class="absolute inset-0 flex items-center justify-center bg-background/50"></div>

	<div class="relative z-10 mx-auto max-w-5xl translate-y-35">
		<div class="flex flex-col items-center gap-4 text-center">
			<FlipText pretext="Energy has a Return;" words={['Swap', 'Hodl', 'Earn']} />
			<p
				class="max-w-2xl text-[14px] font-semibold leading-normal text-white/70 md:text-lg lg:max-w-3xl"
			>
				Derive real yield from energy infra on the m3tering protocol
			</p>
		</div>
	</div>
</section>
