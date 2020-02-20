<template>
	<div class="location-name">
		<span class="label">Location</span>
		<h1 class="place">
			<span class="city">{{ city }},</span>
			<span class="country">{{ country }}</span>
		</h1>
	</div>
</template>

<script>
export default {
	name: 'Location',
	props: {
		city: String,
		country: String,
	},
}
</script>

<style scoped lang="scss">
	.location-name {
		text-align: center;
		padding: 4.5rem 0 2.8rem;
		.label {
			@include sofia-pro;
			font-size: 1.6rem;
			color: $color__light-grey;
			display: inline-block;
			margin: 0 0 0.6rem;
		}
		.place {
			&:before {
				content: '\e904';
				font-family: 'icomoon';
				font-size: 2.4rem;
				color: $color__teal;
				vertical-align: text-bottom;
				display: inline-block;
				margin: 0 0.4rem 0 0;
			}
		}
		.city {
			@include sofia-pro-bold;
			font-size: 2.2rem;
			color: $color__dark-grey;
			margin: 0 0.4rem 0 0;
		}
		.country {
			@include sofia-pro;
			font-size: 2.2rem;
			color: $color__medium-grey;
		}
	}
</style>