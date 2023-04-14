<script setup lang="ts">
    import { useIntersectionObserver } from '~/composables/onItersectionObserver';

    onMounted(() => {
        useIntersectionObserver(document.querySelectorAll<HTMLElement>(`.description-wrapper`), 0.3);
    })
</script>

<template>
   <div class="description-wrapper">
			<div :class="['description-wrapper__description', {'light-mode': $colorMode.preference === 'light'}]">
				<p>
					<small>{{ $t('contact.description.two_first_lines', 1) }} </small>
					<small> {{ $t('contact.description.two_first_lines', 2) }} </small>
					<small> {{ $t('contact.description.two_last_lines', 1) }} </small>
					<small>{{ $t('contact.description.two_last_lines', 2) }} </small>
				</p>
			</div>
		</div>
</template>


<style lang="scss" scoped>
    .description-wrapper {
		position: absolute;
		right: 0px;
		width: 330px;
		height: 120px;
		overflow: hidden;
		direction: ltr;
		// @include animation-on-scroll(0, translateX(250px));

		&__description {
			width: 100%;
			height: 100%;
			background-color: var(--color-text-icon);
			transform: skewX(-40deg);
			position: absolute;
			left: 50px;
			padding-right: 2rem;
			transition: background .6s;
			@include flexbox();
			
			p {
				@include flexbox($align-items: flex-end, $flex-direction: column);
				transform: skew(40deg);
				color: var(--color-page-background);
				transition: color .6s;

				small {
					font-size: 1rem;
				}
			}
		}

		&__description.light-mode {
			background-color:  var(--color-page-background) !important;

			p {
				color: var(--color-text-icon) !important;
			}
		}
	}
    .description-wrapper.show {
        @include animation-on-scroll(1, translateX(0px));
    }
</style>