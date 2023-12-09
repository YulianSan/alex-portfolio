<script setup lang="ts">
const lightTheme = useTheme()
const menuIsOpen = useMenu()
</script>

<template>
	<LayoutMenuHamburger />
	<LayoutHeader>
		<template #top-header>
			<BaseBlockHeader icon="icon-park-outline:eagle">
				<div class="py-2">
					<h1 class="font-bold text-xl">
						Águia Vitrais
					</h1>
					<span>Alex Gui. A. Acero</span>
				</div>
			</BaseBlockHeader>
		</template>
		<template>
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
							<BaseBlockHeader icon="ri:information-line">
								Sobre nós
							</BaseBlockHeader>
						</BaseLink>
					</li>
					<li>
						<BaseLink href="/works">
							<BaseBlockHeader icon="ri:pencil-ruler-2-line">
								Obras de Arte
							</BaseBlockHeader>
						</BaseLink>
					</li>
					<li>
						<BaseLink href="/contact">
							<BaseBlockHeader icon="ri:contacts-line">
								Contato
							</BaseBlockHeader>
						</BaseLink>
					</li>
				</ul>
			</nav>
		</template>
		<template #bottom-header>
			<label >
				<BaseBlockHeader icon="heroicons-solid:sun">
					<div class="flex w-full justify-between flex-1">
						<span>Modo Claro</span>
						<BaseSwitch v-model="lightTheme" />
					</div>
				</BaseBlockHeader>
			</label>
			<label class="sm:block hidden">
				<BaseBlockHeader icon="icomoon-free:menu">
					Menu
					<input type="checkbox" v-model="menuIsOpen" class="hidden">
				</BaseBlockHeader>
			</label>
		</template>
	</LayoutHeader>
</template>
