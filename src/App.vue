<template>
	<div id="app">
		<Location city="Kyiv" country="Ukraine" />
		<div class="page-content">
			<CategoryNavigation/>
			<router-view/>
		</div>
	</div>
</template>

<script>
import Location from '@/components/Location.vue'
import CategoryNavigation from '@/components/CategoryNavigation.vue'

export default {
	name: 'app',
	components: {
		Location,
		CategoryNavigation
	}
}
</script>

<style lang="scss">
	#app {
		overflow: hidden;
	}
	.page-content {
		background: #f6f6f6;
		border-top-left-radius: 2rem;
		border-top-right-radius: 2rem;
	}
</style>
