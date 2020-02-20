<template>
	<div class="home">
		<ul class="animals">
			<Animal image="misc_snail.png" name="Sonic" breed="Giant Snail" age="0.5" distance="1km" gender="male" userName="Brigi Rafini" userAvatar="avatar_01.jpg" userRole="Owner" date="May 16, 2019" description="Facere architecto maiores dolores ullam provident tempora."/>
			<Animal image="misc_dodo.png" name="Rebekah" breed="Dodo" age="3" distance="2km" gender="female" userName="Amy Katz" userAvatar="avatar_03.jpg" userRole="Owner" date="May 29, 2019" description="Aspernatur unde consequatur recusandae libero rem voluptates beatae optio ut animi! Dolore eligendi, ad quas."/>
			<Animal image="misc_minotaur.png" name="Cupcake" breed="Minotaur" age="250" distance="0.1km" gender="male" userName="King Minos" userAvatar="avatar_06.jpg" userRole="Owner" date="January 19, 2019" description="Quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae."/>
		</ul>
	</div>
</template>

<script>
import Animal from '@/components/Animal.vue'

export default {
	name: 'Home',
	components: {
		Animal,
	}
}
</script>

<style scoped lang="scss">
	.animals {
		background: #f6f6f6;
		padding: 4rem 0 20rem;
	}
</style>