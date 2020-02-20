<template>
	<nav id="nav" class="steps-navigation">
		<router-link to="/" class="router-link cats"><div class="icon"></div><div class="label">Cats</div></router-link>
		<router-link to="/dogs" class="router-link dogs"><div class="icon"></div><div class="label">Dogs</div></router-link>
		<router-link to="/misc" class="router-link misc"><div class="icon"></div><div class="label">Misc</div></router-link>
	</nav>
</template>

<script>
export default {
	name: 'StepsNavigation',
}
</script>

<style scoped lang="scss">
	.steps-navigation {
		display: flex;
		justify-content: center;
		padding: 3.5rem 0 0;
	}
	.router-link {
		margin: 0 1rem;
		text-align: center;
		&.cats {
			.icon {
				&:before {
					content: '\e901';
				}
			}
		}
		&.dogs {
			.icon {
				&:before {
					content: '\e902';
				}
			}
		}
		&.misc {
			.icon {
				&:before {
					content: '\e903';
				}
			}
		}
		&.router-link-exact-active {
			.icon {
				background: $color__teal;
				&:before {
					color: #fff;
				}
			}
		}
		&:hover {
			.icon {
				box-shadow: 0 0.4rem 1.6rem rgba($color__black, 0.3);
			}
			.label {
				color: $color__dark-grey;
			}
		}
		.icon {
			height: 6.6rem;
			width: 6.6rem;
			background: #fff;
			position: relative;
			border-radius: 2rem;
			box-shadow: 0 0.4rem 1.6rem rgba($color__black, 0.15);
			transition: background 0.2s, box-shadow 0.2s;
			&:before {
				position: absolute;
				top: 50%;
				left: 50%;
				font-family: 'icomoon';
				font-size: 3.6rem;
				color: $color__light-grey;
				transform: translate(-50%, -50%);
				transition: color 0.2s;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
			}
		}
		.label {
			@include sofia-pro;
			font-size: 1.6rem;
			color: $color__medium-grey;
			margin: 1.2rem 0 0;
			transition: color 0.2s;
		}
	}
</style>
