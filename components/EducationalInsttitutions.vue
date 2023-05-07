<script setup lang="ts">
       import { SchoolLevel } from '~/types';

	const schoolLevels: SchoolLevel[] = [
		{ id: 1, institution: 'education.level1.institution', degree: 'education.level1.degree' },
		{ id: 2, institution: 'education.level2.institution', degree: 'education.level2.degree' },
		{ id: 3, institution: 'education.level3.institution', degree: 'education.level3.degree' },
		{ id: 4, institution: 'education.level4.institution', degree: 'education.level4.degree' },
	]
</script>

<template>
     <div class="education">
		<div v-for="schoolLevel in schoolLevels" :key="schoolLevel.id">
			<div  v-if="schoolLevel.id !== 3"  class="education__school-level-wrapper">
				<div class="education__animated-square">
					<Icon name='cap' />
					<small>{{ $t(schoolLevel.institution, 1) }}</small>
				</div>
				<div class="education__school-level">
					<h3>{{ $t(schoolLevel.institution, 2) }}</h3>
					<p>{{ $t(schoolLevel.degree) }}</p>
				</div>
			</div>
		</div>
    </div>
</template>

<style lang="scss" scoped>
    .education {
		margin-top: 3rem;
		padding-top: 2rem;
		direction: ltr;

		&__school-level-wrapper {
			@include flexbox(space-between, $flex-direction: column);
			max-width: 350px;
			height: 140px;
			margin: 40px auto;
		}

		&__school-level {
			position: relative;
			
			&::before {
				@include line(60px, 3px, 0, $bottom: 7px);
				@include gradient;
			}

			&:hover::before {
				@include animation(1s) {
					0% { width: 15%; }
					50% { width: 0%; }
					100% { width: 15%; }
				}
			}

			h3 {
				margin-bottom: 1rem;
			}

			p {
				margin-left: 5rem;
				opacity: 0.6;
			}
		}

		&__animated-square {
			@include flexbox($flex-direction: column);
			background: linear-gradient(180deg, $color-brand-primary, $color-brand-secondary);
			height: 70px;
			width: 70px;
			animation: skew 3s infinite;
			transform: skew(20deg);
			animation-direction: alternate;
			opacity: .7;
		}

		@keyframes skew {
			0% { transform: skew(20deg, 20deg); }
			100% { transform: skew(-20deg, -20deg); }
		}

		@media screen and (min-width: 768px) {
			&__school-level-wrapper {
				@include flexbox(flex-start);
				height: 130px;
				max-width: 480px;
				margin: 0px auto !important;
			}

			&__animated-square {
				margin-right: 4em;
				height: 90px !important;
				width: 90px !important;
			}

			&__school-level {
				gap: 10px;
				@include flexbox(center, flex-start, column);
			} 
		}
	}
</style>