<script setup lang="ts">
    import { schoolLevels } from '../content/db';
</script>

<template>
     <div class="education">
        <div class="education__img-wrapper"><div></div></div>
        <div class="education__school-level-wrapper">
            <div v-for="schoolLevel in schoolLevels" :key="schoolLevel.id">
                <div  v-if="schoolLevel.id !== 3"  class="education__school-level">
                    <h3>{{ $t(schoolLevel.institution) }}</h3>
                    <p>{{ $t(schoolLevel.degree) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .education {
		padding-top: 2rem;
		direction: ltr;

		&__img-wrapper {
			width: 100%;
			height: 380px;
			padding: 0;
			position: relative;
			overflow: hidden;
			box-shadow: 10px 10px 2px 1px lighten($color-text-inverted, 30%);

			div:first-child {
				width: 100%;
				height: 100%;
				background-image: url('~/assets/images/backgrounds/bulding-bg.webp');
				background-repeat: no-repeat;
				background-size: cover;
				background-position: 30% 20%;
				transition: all 1s;
				&:hover {
					transform: scale(1.3);
				}
			}
		}

		&__school-level-wrapper {
			margin-top: 4rem;
		}

		&__school-level {
			position: relative;
			min-width: 309px;
			height: 70px;
			margin: 20px 0;

			&::before {
				@include line(15%, 3px, 0, $bottom: 13px);
				@include gradient;
			}

			&:hover::before {
				@include animation(1s) {
					0% {
						width: 15%;
					}
					50% {
						width: 0%;
					}
					100% {
						width: 15%;
					}
				}
			}

			p {
				position: absolute;
				left: 20%;
				top: 46px;
				opacity: 0.6;
			}
		}

		@media screen and (min-width: 768px) {
			@include flexbox();
			gap: 2rem;

			&__img-wrapper {
				max-width: 290px !important;
				margin-right: 2rem !important;
				margin-left: 1.5rem;
			}

			&__school-level-wrapper {
				margin-top: 0 !important;
				@include flexbox($justify-content: space-between, $align-items: flex-start, $flex-direction: column);
			}
		}
	}
</style>