<template>
	<div v-on:click="expandDetail" class="animal">
		<div class="feature-content">
			<div class="image" :data-background="gender">
				<img :src="require('@/assets/images/' + image)">
			</div>
			<div class="pop-up-detail">
				<div class="inner">
					<div class="name">{{ name }}</div>
					<div class="breed">{{ breed }}</div>
					<div class="distance">Distance: {{ distance }}</div>
					<div :class="'gender ' + gender"><span>{{ gender }}</span></div>
				</div>
			</div>
			<div class="extended-detail">
				<div class="inner">
					<div class="owner">
						<div class="avatar">
							<img :src="require('@/assets/images/' + userAvatar)" :alt="userName + 'Profile Image'">
						</div>
						<div class="detail">
							<div class="row">
								<div class="name">{{ userName }}</div>
								<div class="attribute">{{ date }}</div>
							</div>
							<div class="attribute">{{ userRole }}</div>
						</div>
					</div>
					<div class="description">
						<p>{{ description }}</p>
					</div>
				</div>
			</div>
			<div class="back-arrow"></div>
		</div>
		<div class="sliding-detail">
			<div class="inner">
				<div class="name">{{ name }}</div>
				<div class="breed">{{ breed }}</div>
				<div class="age">{{ age }} years old</div>
				<div class="distance">Distance: {{ distance }}</div>
				<div :class="'gender ' + gender"><span>{{ gender }}</span></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Animal',
	props: {
		image: String,
		name: String,
		breed: String,
		age: String,
		distance: String,
		gender: String,
		userName: String,
		userAvatar: String,
		userRole: String,
		date: String,
		description: String,
	},
	mounted() {
		document.body.classList.add = 'ready';
	},
	methods: {
		expandDetail: function (event) {
			const currentTarget = event.currentTarget;
			if ( !currentTarget.classList.contains('open') ) {
				const browserHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
				const scrollPosition = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
				anime({
					targets: currentTarget.childNodes[0],
					top: scrollPosition - currentTarget.offsetTop + 20,
					height: ( browserHeight > 600 ? browserHeight - 40 : 560 ),
					width: 350,
					duration: 550,
					easing: 'easeInOutBack',
					begin: function(anim) {
						currentTarget.classList.add('open');
						currentTarget.style.zIndex = 800;
					},
				});
			} else {
				anime({
					targets: currentTarget.childNodes[0],
					top: 0,
					height: 200,
					width: 175,
					duration: 550,
					easing: 'easeInOutQuart',
					begin: function(anim) {
						currentTarget.classList.remove('open');
					},
					complete: function(anim) {
						currentTarget.style.zIndex = 20;
					},
				});
			}
		},
	}
}
</script>

<style scoped lang="scss">
	.animal {
		margin: 0 auto 3rem;
		width: 35rem;
		height: 20rem;
		position: relative;
		z-index: 20;
		&:before {
			content: ' ';
			transition: background 0.55s;
			background: rgba($color__black, 0);
		}
		&.open {
			.back-arrow {
				opacity: 1;
				transform: translateX(0);
				transition: opacity 0.6s 1.2s cubic-bezier(0.860, 0.000, 0.070, 1.000), transform 0.6s 1.2s cubic-bezier(0.860, 0.000, 0.070, 1.000);
				&:before {
					transition: transform 0.6s 1.2s cubic-bezier(0.860, 0.000, 0.070, 1.000);
					transform: rotate(-45deg);
				}
				&:after {
					transition: transform 0.6s 1.2s cubic-bezier(0.860, 0.000, 0.070, 1.000);
					transform: rotate(45deg);
				}
			}
			.image {
				bottom: 25rem;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
				box-shadow: 0 0.4rem 1.6rem transparent, inset 0 0 2rem rgba($color__black, 0.2);
				box-shadow: none;
				transition: border-radius 0.55s, bottom 1s 0.2s cubic-bezier(0.860, 0.000, 0.070, 1.000), box-shadow 0.55s;
				img {
					width: 120%;
				}
			}
			&:before {
				position: fixed;
				top: 0;
				left: 0;
				width: 100vw;
				height: 100vh;
				background: rgba($color__black, 0.7);
			}
			&:hover {
				.image {
					box-shadow: 0 0.4rem 1.6rem transparent, inset 0 0 2rem rgba($color__black, 0.2);
				}
			}
			.extended-detail {
				top: calc(100% - 25rem);
				padding: 5.6rem 0 0;
				.inner {
					transition: opacity 0.55s;
					opacity: 1;
				}
			}
			.sliding-detail {
				.inner {
					transition: transform 0.3s 0.05s cubic-bezier(0.645, 0.045, 0.355, 1.000);
					transform: translateX(-100%);
				}
			}
			.pop-up-detail {
				transform: translateY(50%);
				opacity: 1;
				transition: opacity 0.7s 0.7s, transform 0.7s 0.7s cubic-bezier(0.175, 0.885, 0.320, 1.275);
			}
		}
		&:hover {
			.image {
				box-shadow: 0 0.4rem 1.6rem rgba($color__black, 0.3), inset 0 0 2rem rgba($color__black, 0.2);
			}
			.sliding-detail {
				.inner {
					box-shadow: 0 0.4rem 1.6rem rgba($color__black, 0.3);
				}
			}
		}
	}
	.feature-content {
		position: absolute;
		top: 0;
		left: 0;
		width: 17.5rem;
		height: 20rem;
		cursor: pointer;
		z-index: 10;
	}
	.back-arrow {
		position: absolute;
		opacity: 0;
		top: 5rem;
		left: 2.5rem;
		width: 2.8rem;
		height: 0.2rem;
		border-radius: 0.2rem;
		transform: translateX(-1rem);
		background: $color__black;
		transition: opacity 0.2s, transform 0s 0.2s;
		z-index: 10;
		&:before,
		&:after {
			content: ' ';
			position: absolute;
			top: 0;
			left: 0;
			height: 0.2rem;
			width: 1.8rem;
			background: $color__black;
			border-radius: 0.2rem;
			display: block;
			transform-origin: 0.1rem 0.1rem;
			transition: transform 0s 0.2s;
		}
	}
	.image {
		background: $color__medium-grey;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		border-radius: 2rem;
		box-shadow: 0 0.4rem 1.6rem rgba($color__black, 0.15), inset 0 0 2rem rgba($color__black, 0.2);
		transition: border-radius 0.55s, bottom 0.55s, transform 0.4s 0.3s cubic-bezier(0.190, 1.000, 0.220, 1.000), box-shadow 0.4s;
		z-index: 10;
		&[data-background="male"] {
			background: #ebd2ab;
		}
		&[data-background="female"] {
			background: #ccd5d8;
		}
		img {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -60%);
			width: 160%;
			height: auto;
			user-select: none;
			pointer-events: none;
			transition: width 0.55s cubic-bezier(0.860, 0.000, 0.070, 1.000);
		}
	}
	.sliding-detail {
		position: absolute;
		top: 0;
		right: -2rem;
		padding: 0 2rem 0 0;
		width: 21.5rem;
		height: 20rem;
		display: flex;
		overflow: hidden;
		align-items: center;
		z-index: 5;
		.inner {
			background: #fff;
			width: 100%;
			position: relative;
			padding: 2.2rem 1.6rem 2.2rem 3.6rem;
			border-top-right-radius: 2rem;
			border-bottom-right-radius: 2rem;
			box-shadow: 0 0.4rem 1.6rem rgba($color__black, 0.15);
			transition: transform 0.4s 0.3s cubic-bezier(0.190, 1.000, 0.220, 1.000), box-shadow 0.4s;
			cursor: pointer;
		}
	}
	.pop-up-detail {
		position: absolute;
		bottom: 25rem;
		left: 2.5rem;
		width: 30rem;
		opacity: 0;
		transform: translateY(115%);
		transition: opacity 0.2s, transform 0s 0.2s;
		z-index: 20;
		.inner {
			background: #fff;
			border-radius: 2rem;
			padding: 2rem 1.6rem;
			box-shadow: 0 0.4rem 1.6rem rgba($color__black, 0.15);
		}
	}
	.extended-detail {
		position: absolute;
		top: 100%;
		overflow: hidden;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 0;
		border-bottom-left-radius: 2rem;
		border-bottom-right-radius: 2rem;
		background: #fff;
		display: flex;
		align-items: center;
		z-index: 5;
		transition: top 0.55s, padding 0.55s;
		.inner {
			opacity: 0;
			width: 100%;
			padding: 0 2.5rem;
			transition: opacity 0.2s;
		}
	}
	.name {
		@include sofia-pro-bold;
		font-size: 2.4rem;
		color: $color__black;
		margin: 0 0 1rem;
	}
	.breed {
		@include sofia-pro;
		font-size: 1.5rem;
		color: $color__black;
		margin: 0 0 1rem;
	}
	.age {
		@include sofia-pro;
		font-size: 1.3rem;
		color: $color__light-grey;
		margin: 0 0 1rem;
	}
	.distance {
		@include sofia-pro;
		font-size: 1.4rem;
		color: $color__medium-grey;
		&:before {
			content: '\e904';
			font-family: 'icomoon';
			font-size: 2rem;
			color: $color__teal;
			vertical-align: text-bottom;
			display: inline-block;
			margin: 0 0 0 -0.4rem;
		}
	}
	.gender {
		position: absolute;
		top: 2.4rem;
		right: 2.3rem;
		&:before {
			content: '\e901';
			font-family: 'icomoon';
			font-size: 1.9rem;
			color: $color__light-grey;
		}
		&.male {
			&:before {
				content: '\e906';
			}
		}
		&.female {
			&:before {
				content: '\e905';
			}
		}
		span {
			display: none;
		}
	}
	.owner {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.avatar {
			width: 4rem;
			height: 4rem;
			border-radius: 50%;
			overflow: hidden;
			background: $color__black;
			img {
				width: 100%;
				height: auto;
			}
		}
		.detail {
			width: calc(100% - 5rem);
			.row {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
			.name {
				@include sofia-pro-bold;
				font-size: 1.6rem;
				color: $color__black;
				margin: 0 0 0.5rem;
			}
			.attribute {
				@include sofia-pro;
				font-size: 1.3rem;
				color: $color__light-grey;
			}
		}
	}
	.description {
		margin: 1.5rem 0 0;
		p {
			@include sofia-pro;
			font-size: 1.5rem;
			color: $color__medium-grey;
			line-height: 1.4;
		}
	}
</style>