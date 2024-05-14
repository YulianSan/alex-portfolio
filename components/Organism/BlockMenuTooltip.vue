<script setup lang="ts">
interface PropsLinkIcon {
    icon: string
    label: string
}
defineProps<PropsLinkIcon>()
const menuStore = useMenuStore()
</script>
<template>
    <MoleculeTooltip position="RIGHT" :can-show="menuStore.state">
        <MoleculeBlockMenu :icon="$props.icon">
            <slot />
        </MoleculeBlockMenu>
        <template #tooltip>
            {{ $props.label }}
        </template>
    </MoleculeTooltip>
</template>
