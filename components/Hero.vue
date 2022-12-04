<!-- @format -->

<script setup lang="ts">
	const isAdditionalDescActive = ref(false);
</script>

<template>
	<section>
		<div class="hero-section hero-section__container">
			<SocialNetwork />
			<div class="hero-section__intro">
				<h1 class="hero-section__main-heading">
						<span>{{ $t('main_heading.static_desc', 0) }}</span>{{ $t('main_heading.static_desc', 1) }}
						<span>{{ $t('main_heading.static_desc', 2) }}</span>
						<span>
							<span class="static-description">{{$t('main_heading.dynamic_desc', 1)}}</span>
							<span class="dynamic-description">{{$t('main_heading.dynamic_desc', 2)}}</span>
						</span>
				</h1>
				<div :class="['hero-section__description-container', {active: isAdditionalDescActive}]">
					<p class="hero-section__main-description">{{ $t('description_info.main') }}</p>
					<p class="hero-section__additional-description">
							<span class="text-primary fs-4 fw-bold">{{$t('description_info.additional', 1)}}</span>
							{{ $t('description_info.additional', 2) }}
					</p>
					<button @click="(isAdditionalDescActive = !isAdditionalDescActive)"  class="hero-section__btn-more-info" type="button"> 
						{{ isAdditionalDescActive ? $t('description_info.button', 0) : $t('description_info.button', 1) }}
						<i>
							<Icon :name="isAdditionalDescActive ? 'ic:baseline-arrow-back-ios' : 'ic:baseline-arrow-forward-ios'"/>
						</i>
					</button>
				</div>
			</div>
			<div class="hero-section__hero-img ">
				<img src="~/assets/images/backgrounds/personal-image.png" :alt="$t('hero_img_desc')" />
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>

	section {
		margin-top: 7rem;
		text-align: center;
	}
	.hero-section {
		
		&__container {
			@include flexbox($flex-direction: column);
		}

		&__intro {
			order: 2;
		}

		&__hero-img {
			order: 1;
			img {
				width: 85%;
				max-width: 600px;
			}
		}

		&__main-heading {
			margin-top: 1.5rem;
			margin-bottom: 3rem;
			font-weight: 500;

			span {
				display: block;
			}

			span:nth-child(1) {
				font-size: 1.2rem;
				opacity: 0.7;
			}

			span:nth-child(2) {
				display: inline;
				font-weight: 700;
				color: $color-brand-primary;
			}

			span:nth-child(3) {
				padding-top: 2rem;
				font-size: 1.3rem;
				font-weight: 500;
			}

			span:nth-child(3) .static-description {
				margin-right: 5px;
			}

			span:nth-child(3) .dynamic-description {
				position: relative;
				color: $color-brand-secondary;
				&::before {
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						padding-left: 5px;
						font-size: 2rem;
						z-index: 1;
						background-color: inherit;
						border-left: 2px solid $color-brand-secondary;
						animation: steps(15) infinite;
						@include flexbox(left);
						@include animation(4s) {
							40%,
							60% {
								left: calc(100% + 5px);
							}
							100% {
								left: 0;
							}
						}
				}
			}
		}

		&__description-container {
			text-align: initial;
		}

		&__main-description {
			font-weight: 400;
			word-spacing: 2px;
			opacity: 0.8;

		}

		&__additional-description {
			max-height: 0;
			margin-top: 2rem;
			font-size: 0.9rem;
			font-weight: 200;
			word-spacing: 3px;
			opacity: 0;
			transition: all .6s;

			span:nth-child(1) {
				color: $color-brand-primary;
				font-size: 1.4rem;
				font-weight: 700;
			}
		}

		&__description-container.active &__additional-description {
			opacity: 0.8 ;
			max-height: fit-content;
		}

		&__btn-more-info {
			@include custom-btn(161px);
			border: none;
			font-size: 1rem;
			font-weight: 300;
			margin-top: 1.5rem;
			transform: translateY(0px);
			transition: transform .6s;
			
			i {
				color: var(--color-text-icon);
				background-color: transparent;
			}
		}

		@media screen and (min-width: 1024px) {
			margin-top: 9rem;
			&__container {
				width: fit-content;
				height: 500px;
				text-align: initial;
				@include flexbox(center, flex-start, $flex-direction: row);
			}

			&__main-heading {
				font-size: 2rem;

				span:nth-child(3) :nth-child(1) {
						display: inline !important;
				}
			}

			&__intro {
				order: 1;
				width: 50%;
				margin-left: 5rem;
			}

			&__hero-img {
				order: 2;
				width: 50%;
				height: inherit;
				@include flexbox(flex-end);
			}
		}
	}
</style>
