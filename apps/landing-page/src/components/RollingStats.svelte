<script lang="ts">
	import NumberFlow, { continuous, type Format } from '@number-flow/svelte';
	import { onMount, onDestroy } from 'svelte';

	let {
		value,
		prefix,
		class: className
	}: {
		value: number;
		class?: string;
		prefix?: string;
	} = $props();

	let internalValue = $state(0);

	const flowFormat: Format = {
		notation: 'compact',
		compactDisplay: 'short'
	};

	let el = $state<HTMLDivElement | null>(null);
	let observer: IntersectionObserver | null = null;
	let triggered = false;

	onMount(() => {
		if (!el) return;

		observer = new IntersectionObserver(
			(entries) => {
				const entry = entries?.[0];
				if (!entry) return;

				if (entry.isIntersecting && !triggered) {
					triggered = true;

					setTimeout(() => {
						internalValue = value;
					}, 250);

					observer?.disconnect();
				}
			},
			{ threshold: 0.2 }
		);

		observer.observe(el);
	});
	onDestroy(() => {
		observer?.disconnect();
	});
</script>

<div bind:this={el}>
	<NumberFlow
		{prefix}
		value={internalValue}
		format={flowFormat}
		plugins={[continuous]}
		class={className}
	/>
</div>
