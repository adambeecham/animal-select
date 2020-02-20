<template>
	<div class="home">
		<ul class="animals">
			<Animal image="cat_abyssinian.png" name="Sola" breed="Abyssinia Cat" age="2" distance="3.6km" gender="female" userName="Maya Berkovskaya" userAvatar="avatar_01.jpg" userRole="Owner" date="May 02, 2019" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati alias neque ratione, tempora atque non."/>
			<Animal image="cat_bobtail.png" name="Noah" breed="American Bobtail" age="3" distance="1.2km" gender="male" userName="Tom O'Keefe" userAvatar="avatar_02.jpg" userRole="Owner" date="May 03, 2019" description="Amet, nam dolor quaerat enim iure, consequuntur assumenda autem."/>
			<Animal image="cat_bengal.png" name="Aaditri" breed="Bengal" age="2" distance="1.2km" gender="male" userName="Leila Rajabi" userAvatar="avatar_03.jpg" userRole="Owner" date="July 13, 2019" description="Sed ut perspiciatis unde omnis iste natus error sit quo voluptas nulla pariatur?" />
			<Animal image="cat_bombay.png" name="Marcy" breed="Bombay" age="2.5" distance="4km" gender="female" userName="Su Tong" userAvatar="avatar_04.jpg" userRole="Caretaker" date="October 19, 2019" description="Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et."/>
			<Animal image="cat_britishshorthair.png" name="Francis" breed="British Shorthair" age="1" distance="4km" gender="female" userName="Adrian Smith" userAvatar="avatar_05.jpg" userRole="Caretaker" date="June 04, 2019" description="Quasi architecto beatae vitae dicta sunt explicabo. voluptatem. Ut enim ad minima veniam."/>
			<Animal image="cat_sphinx.png" name="Ayeisha" breed="Sphinx" age="1" distance="4km" gender="female" userName="Ran Merkazy" userAvatar="avatar_06.jpg" userRole="Owner" date="May 03, 2019" description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut."/>
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