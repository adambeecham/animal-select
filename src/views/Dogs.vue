<template>
	<div class="home">
		<ul class="animals">
			<Animal image="dog_afghan.png" name="André" breed="Afghan Hound" age="2.5" distance="4km" gender="male" userName="Alice Chive" userAvatar="avatar_03.jpg" userRole="Caretaker" date="June 21, 2019" description="Delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."/>
			<Animal image="dog_belgianmalinois.png" name="Apollo" breed="Belgian Malinois" age="2" distance="1km" gender="male" userName="Henry White" userAvatar="avatar_02.jpg" userRole="Owner" date="May 29, 2019" description="Culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."/>
			<Animal image="dog_bernesemountain.png" name="Mavis" breed="Bernese Mountain" age="2" distance="8.5km" gender="female" userName="Nguyen Tu" userAvatar="avatar_04.jpg" userRole="Owner" date="January 01, 2019" description="Occaecati cupiditate non provident, similique sunt in et harum quidem rerum facilis est et expedita distinctio."/>
			<Animal image="dog_bostonterrier.png" name="Bo" breed="Boston Terrier" age="1" distance="3km" gender="male" userName="John Wilson" userAvatar="avatar_05.jpg" userRole="Caretaker" date="May 02, 2019" description="Est eligendi optio cumque nihil impedit quo minus id quod maxime placeat."/>
			<Animal image="dog_chowchow.png" name="Lychee" breed="Chow Chow" age="4" distance="4km" gender="female" userName="Yelena Ivanov" userAvatar="avatar_01.jpg" userRole="Owner" date="May 11, 2019" description="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat."/>
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