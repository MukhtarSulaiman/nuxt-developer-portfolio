<!-- @format -->

<script setup lang="ts">

 	const { locale } = useI18n();

	const isAdditionalDescActive = ref(false);
</script>

<template>
	<section id="hero">
		<div class="hero-section hero-section__container">
			<SocialNetwork classElement="hero__column-layout" />
			<div :class="[ 'hero-section__intro ', { 'lang-ar' : locale === 'ar' }]">
				<h1 class="hero-section__main-heading">
						<span>{{ $t('main_heading.static_desc', 0) }}</span>{{ $t('main_heading.static_desc', 1) }}
						<span>{{ $t('main_heading.static_desc', 2) }}</span>
						<span  :class="{ 'lang-ar' : locale === 'ar' }">
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
							<Icon :name="isAdditionalDescActive ? 'arrow-back' : 'arrow-forward'"/>
						</i>
					</button>
				</div>
			</div>
			<div class="hero-section__hero-img ">
				<img :class="{ 'lang-ar' : locale === 'ar' }" src="~/assets/images/backgrounds/personal-image.png" :alt="$t('hero_img_desc')" />
			</div>
		</div>
		<NuxtLink to="#skills" :aria-label="$t('arrow_navigation_to_bottom')">
			<div class="hero-section__scroll-container">
				<div class="arrow"></div>
				<div class="arrow"></div>
				<div class="arrow"></div>
			</div>
		</NuxtLink>
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
			transform: scale(1);
			@include top-level-animation($translate: 60px);
	
			img {
				width: 85%;
				max-width: 600px;
			}
		}

		&__main-heading {
			margin-top: 1.5rem;
			margin-bottom: 3rem;
			font-weight: 300;
			@include top-level-animation($translate: -150px);

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

			span:nth-child(3).lang-ar .static-description {
				margin-right: 0;
				margin-left: 5px;
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

			span:nth-child(3).lang-ar .dynamic-description {
				&::before {
					padding-left: 0 !important;
					border-left: none !important;
					border-right: 2px solid $color-brand-secondary !important;
					@include animation(4s) {
						40%,
						60% {
							left: calc(-100% + -5px);
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
			font-weight: 200;
		}

		&__main-description {
			word-spacing: 2px;
			font-size: 1.1rem;
			opacity: 0.8 !important;
			@include top-level-animation($translate: 150px);
		}

		&__additional-description {
			max-height: 0;
			margin-top: 2rem;
			font-size: 0.9rem;
			word-spacing: 3px;
			opacity: 0.8 ;
			overflow: hidden;
			transition: max-height 1s;

			span:nth-child(1) {
				color: $color-brand-primary;
				font-size: 1.4rem;
				font-weight: 700;
			}
		}

		&__description-container.active &__additional-description {
			max-height: 215px !important;
		}

		&__btn-more-info {
			@include custom-btn(161px);
			border: none;
			font-size: 1rem;
			font-weight: 300;
			margin-top: 1.5rem;
			transform: translateY(0px);
			// transition: transform .5s;
			opacity: 0;
			@include top-level-animation(1.7s, $dely: 2s,  $axe: translateY(150px));

			i {
				color: var(--color-text-icon);
				background-color: transparent;
			}
		}

		&__scroll-container {
			@include flexbox($flex-direction: column);
			margin-top: 4rem;

			.arrow {
				@include arrow-indicator;
			}

			:nth-child(2) {
				@include animation(2s, 200ms) {
						0% {
							transform: translateY(-15px) rotate(-45deg);
							opacity: 1;
						}
						100% {
							transform: translateY(17px) rotate(-45deg);
							opacity: 0;
						}
				}
			}

			:nth-child(3) {
				@include animation(2s) {
						0% {
							transform: translateY(-30px) rotate(-45deg);
							opacity: 1;
						}
						100% {
							transform: translateY(15px) rotate(-45deg);
							opacity: 0;
						}
				}
			}
		}

		@media screen and (min-width: 768px) {
			&__description-container.active &__additional-description {
				max-height: 120px !important;
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

			&__description-container.active &__additional-description {
				max-height: 150px !important;
			}

			&__intro {
				order: 1;
				width: 50%;
				margin-left: 5rem;
			}

			&__intro.lang-ar {
				margin-left: 0rem;
				margin-right: 5rem;
			}

			&__hero-img {
				order: 2;
				width: 50%;
				height: inherit;
				@include flexbox(flex-end);

				img.lang-ar {
					transform: scaleX(-1);
				}
			}

			&__scroll-container {
				margin-top: 0rem !important;
			}
		}

		@media screen and (min-width: 1280px) {
			&__description-container.active &__additional-description {
				max-height: 110px !important;
			}
		}
	}
</style>
