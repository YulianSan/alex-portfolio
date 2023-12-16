<script setup lang="ts">
const lightTheme = useTheme()
const menuIsOpen = useMenu()
</script>

<template>
	<MoleculeHeader>
		<template #top-header>
			<AtomBlockHeader icon="icon-park-outline:eagle">
				<div class="py-2">
					<h1 class="font-bold text-xl">
						Águia Vitrais
					</h1>
					<span>Alex Gui. A. Acero</span>
				</div>
			</AtomBlockHeader>
		</template>
		<template #default>
			<nav>
				<ul class="flex flex-col gap-y-2">
					<li>
						<AtomLink href="/">
							<AtomBlockHeader icon="uil:home">
								Home
							</AtomBlockHeader>
						</AtomLink>
					</li>
					<li>
						<AtomLink href="/about">
							<AtomBlockHeader icon="ri:information-line">
								Sobre nós
							</AtomBlockHeader>
						</AtomLink>
					</li>
					<li>
						<AtomLink href="/works">
							<AtomBlockHeader icon="ri:pencil-ruler-2-line">
								Obras de Arte
							</AtomBlockHeader>
						</AtomLink>
					</li>
					<li>
						<AtomLink href="/contact">
							<AtomBlockHeader icon="ri:contacts-line">
								Contato
							</AtomBlockHeader>
						</AtomLink>
					</li>
				</ul>
			</nav>
		</template>
		<template #bottom-header>
			<label >
				<AtomBlockHeader icon="heroicons-solid:sun">
					<div class="flex w-full justify-between flex-1">
						<span>Modo Claro</span>
						<AtomSwitch v-model="lightTheme" />
					</div>
				</AtomBlockHeader>
			</label>
			<label class="sm:block hidden">
				<AtomBlockHeader icon="icomoon-free:menu">
					Menu
					<input type="checkbox" v-model="menuIsOpen" class="hidden">
				</AtomBlockHeader>
			</label>
		</template>
	</MoleculeHeader>
</template>
