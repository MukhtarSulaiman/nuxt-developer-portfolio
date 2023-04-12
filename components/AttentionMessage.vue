<script setup lang="ts">
    import { useIntersectionObserver } from '~/composables/onItersectionObserver';

    onMounted(() => {
        useIntersectionObserver(document.querySelectorAll<HTMLElement>(`.discription-wrapper`), 0.3);
    })
</script>

<template>
   <div class="discription-wrapper">
			<div class="discription-wrapper__discription">
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
    .discription-wrapper {
		position: absolute;
		right: 0px;
		width: 330px;
		height: 120px;
		overflow: hidden;
		direction: ltr;
		@include animation-on-scroll(0, translateX(250px));

		&__discription {
			width: 100%;
			height: 100%;
			background-color: var(--color-text-icon);
			transform: skewX(-40deg);
			position: absolute;
			left: 50px;
			padding-right: 2rem;
			@include flexbox();
			
			p {
				@include flexbox($align-items: flex-end, $flex-direction: column);
				transform: skew(40deg);
				color: var(--color-page-background) !important;

				small {
					font-size: 1rem;
				}
			}
		}
	}
    .discription-wrapper.show {
        @include animation-on-scroll(1, translateX(0px));
    }
</style>