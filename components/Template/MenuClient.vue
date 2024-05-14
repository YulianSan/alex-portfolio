<script setup lang="ts">
import { useThemeStore } from '@/stores/useThemeStore' 

const themeStore = useThemeStore()
const menuStore = useMenuStore()
</script>

<template>
	<MoleculeHamburger v-model="menuStore.state" />
	<OrganismMenu :class="[
		{ 'sm:max-w-xs translate-x-0': menuStore.state }, 
		{ 'sm:max-w-[5.5rem]': !menuStore.state },
	]">
		<template #top-menu>
			<MoleculeBlockMenu icon="icon-park-outline:eagle">
				<div class="py-2">
					<h1 class="font-bold text-xl">
						Águia Vitrais
					</h1>
					<span>Alex Gui. A. Acero</span>
				</div>
			</MoleculeBlockMenu>
		</template>
		<template #default>
			<nav>
				<ul class="flex flex-col gap-y-2">
					<li>
						<AtomLink href="/">
							<OrganismBlockMenuTooltip icon="uil:home" label="Home">
								Home
							</OrganismBlockMenuTooltip>
						</AtomLink>
					</li>
					<li>
						<AtomLink href="/about">
							<OrganismBlockMenuTooltip icon="ri:information-line" label="Sobre">
								Sobre nós
							</OrganismBlockMenuTooltip>
						</AtomLink>
					</li>
					<li>
						<AtomLink href="/works">
							<OrganismBlockMenuTooltip icon="ri:pencil-ruler-2-line" label="Obras">
								Obras de Arte
							</OrganismBlockMenuTooltip>
						</AtomLink>
					</li>
					<li>
						<AtomLink href="/contact">
							<OrganismBlockMenuTooltip icon="ri:contacts-line" label="Contato">
								Contato
							</OrganismBlockMenuTooltip>
						</AtomLink>
					</li>
				</ul>
			</nav>
		</template>
		<template #bottom-menu>
			<div class="flex flex-col gap-y-2">
				<label>
					<OrganismBlockMenuTooltip icon="heroicons-solid:sun" label="Tema">
						<div class="flex w-full justify-between flex-1">
							<span>Modo Claro</span>
							<AtomSwitch v-model="themeStore.isLight" />
						</div>
					</OrganismBlockMenuTooltip>
				</label>
				<label class="sm:block hidden">
					<OrganismBlockMenuTooltip icon="icomoon-free:menu" label="Abrir">
						Menu
						<input type="checkbox" v-model="menuStore.state" class="hidden">
					</OrganismBlockMenuTooltip>
				</label>
			</div>
		</template>
	</OrganismMenu>
</template>
