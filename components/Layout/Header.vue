<script setup lang="ts">
const lightTheme = useTheme()
</script>
<template>
	<header class="w-full max-w-xs h-screen dark:bg-zinc-950 bg-zinc-100 rounded-2xl p-4 flex flex-col">
		<div class="mb-12 flex gap-x-4">
			<div class="bg-purple-800 w-16 h-16 rounded-md"></div>
			<div class="py-2">
				<h1 class="font-bold text-xl">
					Águia Vitrais
				</h1>
				<span>Alex Gui. A. Acero</span>
			</div>
		</div>
		<nav>
			<ul class="flex flex-col gap-y-2">
				<li>
					<BaseLink href="/">
						<BaseBlockHeader icon="uil:home">
							Home
						</BaseBlockHeader>
					</BaseLink>
				</li>
				<li>
					<BaseLink href="/about">
						<BaseBlockHeader icon="material-symbols:info">
							Sobre nós
						</BaseBlockHeader>
					</BaseLink>
				</li>
				<li>
					<BaseLink href="/works">
						<BaseBlockHeader icon="material-symbols:info">
							Obras de Arte
						</BaseBlockHeader>
					</BaseLink>
				</li>
				<li>
					<BaseLink href="/contact">
						<BaseBlockHeader icon="material-symbols:info">
							Contato
						</BaseBlockHeader>
					</BaseLink>
				</li>
			</ul>
		</nav>
		<div class="mt-auto">
			<BaseBlockHeader icon="heroicons-solid:sun">
				<label class="flex justify-between flex-1">
					Modo Claro
					<BaseSwitch v-model="lightTheme" />
				</label>
			</BaseBlockHeader>
		</div>
	</header>
</template>
