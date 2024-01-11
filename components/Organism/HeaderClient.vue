<script setup lang="ts">
const lightTheme = useTheme()
const menuIsOpen = useMenu()
</script>

<template>
	<OrganismHeader>
		<template #top-header>
			<MoleculeBlockHeader icon="icon-park-outline:eagle">
				<div class="py-2">
					<h1 class="font-bold text-xl">
						Águia Vitrais
					</h1>
					<span>Alex Gui. A. Acero</span>
				</div>
			</MoleculeBlockHeader>
		</template>
		<template #default>
			<nav>
				<ul class="flex flex-col gap-y-2">
					<li>
						<AtomLink href="/">
							<MoleculeBlockHeader icon="uil:home">
								Home
							</MoleculeBlockHeader>
						</AtomLink>
					</li>
					<li>
						<AtomLink href="/about">
							<MoleculeBlockHeader icon="ri:information-line">
								Sobre nós
							</MoleculeBlockHeader>
						</AtomLink>
					</li>
					<li>
						<AtomLink href="/works">
							<MoleculeBlockHeader icon="ri:pencil-ruler-2-line">
								Obras de Arte
							</MoleculeBlockHeader>
						</AtomLink>
					</li>
					<li>
						<AtomLink href="/contact">
							<MoleculeBlockHeader icon="ri:contacts-line">
								Contato
							</MoleculeBlockHeader>
						</AtomLink>
					</li>
				</ul>
			</nav>
		</template>
		<template #bottom-header>
			<div class="flex flex-col gap-y-2">
				<label>
					<MoleculeBlockHeader icon="heroicons-solid:sun">
						<div class="flex w-full justify-between flex-1">
							<span>Modo Claro</span>
							<AtomSwitch v-model="lightTheme" />
						</div>
					</MoleculeBlockHeader>
				</label>
				<label class="sm:block hidden">
					<MoleculeBlockHeader icon="icomoon-free:menu">
						Menu
						<input type="checkbox" v-model="menuIsOpen" class="hidden">
					</MoleculeBlockHeader>
				</label>
			</div>
		</template>
	</OrganismHeader>
</template>
