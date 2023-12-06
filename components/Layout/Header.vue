<script setup lang="ts">
const lightTheme = useTheme()
const menuIsOpen = useMenu()
</script>
<template>
	<header class="w-full transition-all h-screen dark:bg-zinc-950 py-8 bg-zinc-100 
		p-4 flex flex-col overflow-x-hidden"
		:class="[
			{ 'max-w-xs': menuIsOpen }, 
			{ 'max-w-[5.5rem]': !menuIsOpen },
		]">
		<div class="mb-12 flex gap-x-4 border-b dark:border-zinc-700 py-2">
			<BaseBlockHeader icon="icon-park-outline:eagle">
				<div class="py-2">
					<h1 class="font-bold text-xl">
						Águia Vitrais
					</h1>
					<span>Alex Gui. A. Acero</span>
				</div>
			</BaseBlockHeader>
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
		<div class="mt-auto border-t py-4 dark:border-zinc-700">
			<label >
				<BaseBlockHeader icon="heroicons-solid:sun">
					<div class="flex w-full justify-between flex-1">
						<span>Modo Claro</span>
						<BaseSwitch v-model="lightTheme" />
					</div>
				</BaseBlockHeader>
			</label>
			<label>
				<BaseBlockHeader icon="icomoon-free:menu">
					Menu
					<input type="checkbox" v-model="menuIsOpen" class="hidden">
				</BaseBlockHeader>
			</label>
		</div>
	</header>
</template>
