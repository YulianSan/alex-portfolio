<script setup lang="ts">
import { useMenuStore } from '@/stores/useMenuStore' 
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
		<template #top-header>
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
							<MoleculeBlockMenu icon="uil:home">
								Home
							</MoleculeBlockMenu>
						</AtomLink>
					</li>
					<li>
						<AtomLink href="/about">
							<MoleculeBlockMenu icon="ri:information-line">
								Sobre nós
							</MoleculeBlockMenu>
						</AtomLink>
					</li>
					<li>
						<AtomLink href="/works">
							<MoleculeBlockMenu icon="ri:pencil-ruler-2-line">
								Obras de Arte
							</MoleculeBlockMenu>
						</AtomLink>
					</li>
					<li>
						<AtomLink href="/contact">
							<MoleculeBlockMenu icon="ri:contacts-line">
								Contato
							</MoleculeBlockMenu>
						</AtomLink>
					</li>
				</ul>
			</nav>
		</template>
		<template #bottom-header>
			<div class="flex flex-col gap-y-2">
				<label>
					<MoleculeBlockMenu icon="heroicons-solid:sun">
						<div class="flex w-full justify-between flex-1">
							<span>Modo Claro</span>
							<AtomSwitch v-model="themeStore.isLight" />
						</div>
					</MoleculeBlockMenu>
				</label>
				<label class="sm:block hidden">
					<MoleculeBlockMenu icon="icomoon-free:menu">
						Menu
						<input type="checkbox" v-model="menuStore.state" class="hidden">
					</MoleculeBlockMenu>
				</label>
			</div>
		</template>
	</OrganismMenu>
</template>
