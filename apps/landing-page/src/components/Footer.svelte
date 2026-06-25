<script lang="ts">
	import { Etherscan, Opensea } from '../lib/assets/brands';
	import { M3terBond } from '../config/smart-contracts/M3terBond/M3terBond';
	import { MyToken } from '../config/smart-contracts/MyToken/MyToken';
	import { TRS } from '../config/smart-contracts/TRS/TRS';

	const contractAddresses = [
		{
			label: 'TRS',
			contractAddress: TRS.address,
			links: [
				{ href: 'https://opensea.io/', src: Opensea, alt: 'Opensea' },
				{ href: 'https://etherscan.io/', src: Etherscan, alt: 'Etherscan' }
			]
		},
		{
			label: 'M3ter',
			contractAddress: MyToken.address,
			links: [
				{ href: 'https://opensea.io/', src: Opensea, alt: 'Opensea' },
				{ href: 'https://etherscan.io/', src: Etherscan, alt: 'Etherscan' }
			]
		},
		{
			label: 'M3terBond',
			contractAddress: M3terBond.address,
			links: [
				{ href: 'https://opensea.io/', src: Opensea, alt: 'Opensea' },
				{ href: 'https://etherscan.io/', src: Etherscan, alt: 'Etherscan' }
			]
		}
	];
</script>

<footer
	class="py-12 px-6 border-t border-surface-container-high bg-background flex flex-col items-center gap-8"
>
	<!-- Trust Badge -->
	<div class="flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
		<span class="material-symbols-outlined text-3xl">bolt</span>
		<span class="font-label text-xs uppercase tracking-[0.2em] text-on-surface">
			Powered by the M3tering Protocol
		</span>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-4 w-[90%]">
		<!-- Left -->
		<div class="block col-span-1 border-[0.5px] border-surface-container-high p-4">
			<h3 class="text-lg font-medium text-primary-container uppercase">Resources</h3>
			<ul class="space-y-2 mt-3">
				<li>
					<a
						href="https://google.com"
						target="_blank"
						rel="noopener noreferrer"
						class="text-sm text-on-surface/70 transition-colors hover:text-on-surface"
					>
						Documentation
					</a>
				</li>
				<li>
					<a
						href="https://google.com"
						target="_blank"
						rel="noopener noreferrer"
						class="text-sm text-on-surface/70 transition-colors hover:text-on-surface"
					>
						FAQ
					</a>
				</li>
				<li>
					<a
						href="https://google.com"
						target="_blank"
						rel="noopener noreferrer"
						class="text-sm text-on-surface/70 transition-colors hover:text-on-surface"
					>
						GitHub
					</a>
				</li>
			</ul>
		</div>

		<div class="block col-span-1 border-[0.5px] border-surface-container-high p-4">
			<h3 class="text-lg font-medium text-primary-container uppercase">Legal</h3>
			<ul class="space-y-2 mt-3">
				<li>
					<a
						href="https://google.com"
						target="_blank"
						rel="noopener noreferrer"
						class="text-sm text-on-surface/70 transition-colors hover:text-on-surface"
					>
						Terms & Conditions
					</a>
				</li>
				<li>
					<a
						href="https://google.com"
						target="_blank"
						rel="noopener noreferrer"
						class="text-sm text-on-surface/70 transition-colors hover:text-on-surface"
					>
						Privacy Policy
					</a>
				</li>
				<li>
					<a
						href="https://google.com"
						target="_blank"
						rel="noopener noreferrer"
						class="text-sm text-on-surface/70 transition-colors hover:text-on-surface"
					>
						Security
					</a>
				</li>
			</ul>
		</div>

		<!-- Right -->
		<div class="md:col-span-2 col-span-full border-[0.5px] border-surface-container-high p-4">
			<h3 class="text-lg font-medium text-primary-container uppercase">Smart Contracts</h3>
			<div class="space-y-2 mt-3">
				{#each contractAddresses as contract (contract.contractAddress)}
					<div class="inline-flex items-center space-x-1">
						<code
							class="mt-1 block overflow-hidden text-wrap md:w-auto w-45 text-ellipsis whitespace-nowrap font-mono text-xs text-on-surface/70 md:text-sm"
						>
							{contract.contractAddress}
						</code>
						<p class="font-semibold text-on-surface">{contract.label}</p>
						<div class="flex items-center gap-2 shrink-0">
							{#each contract.links as link (link.href)}
								<a
									href={link.href}
									target="_blank"
									rel="noopener noreferrer external"
									class="transition-transform hover:scale-110"
								>
									<img src={link.src} alt={link.alt} class="h-6 w-6 rounded-full" />
								</a>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div class="mt-1 h-px w-full bg-surface-container-high/50"></div>

	<p class="text-xs text-on-surface/40">
		Because the M3TRS protocol is built using smart contracts, it's possible that undiscovered bugs
		or vulnerabilities in these contracts could be exploited, resulting in loss of user funds.
		Accordingly, the protocol's contracts undergo regular and rigorous security audits.
	</p>

	<div
		class="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-on-surface/40 pt-8 border-t border-surface-container-high/50"
	>
		<p>© 2026 M3TRS Interface. All rights reserved.</p>
		<div class="flex gap-6">
			<a
				class="hover:text-primary-container transition-colors"
				href="https://google.com"
				rel="external">TERMS</a
			>
			<a
				class="hover:text-primary-container transition-colors"
				href="https://google.com"
				rel="external">PRIVACY</a
			>
		</div>
	</div>
</footer>
