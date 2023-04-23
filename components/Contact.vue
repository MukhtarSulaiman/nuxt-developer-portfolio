<script setup lang="ts">

import { PersonalInfo } from '~/types';

	const { locale } = useI18n();

	const personalInfos: PersonalInfo[] = [
		{ id: 1, icon: 'phone', content: '+ 33 7 67 73 99 78', link: 'tel:+33767739978' },
		{ id: 2, icon: 'mail', content: 'contact@zooldeveloper.com', link: 'mailto:contact@zooldeveloper.com'},
		{ id: 3, icon: 'home', content: '44300 Nantes, France', link: 'https://goo.gl/maps/XhRmup31zFzmJwbRA', target: true}
	]
</script>

<template>
	<section id="contact">
		<h2>{{ $t('contact.title.main') }}</h2>
		<AttentionMessage />
		<div class="contact">
			<FormContact class="contact__form-contact" />
			<div class="contact__contact-network-wrapper">
				<div class="contact-__network-profiles">
					<h3 :class="{'current-language-ar': locale === 'ar'}">{{ $t('contact.title.social_media') }} :</h3>
					<SocialNetwork classElement="contact__row-layout" />
				</div>
				<div class="contact__contact-info">
					<a v-for="personalInfo in personalInfos" :key="personalInfo.id" :href="personalInfo.link" :target="personalInfo.target ? '_blank': ''">
						<div class="contact__contact-group">
							<div class="contact__icon-wrapper">
								<i><Icon :name="personalInfo.icon" /></i>
							</div>
							<small>{{ personalInfo.content }}</small>
						</div>
					</a>
				</div>
			</div>
			<DownloadButton bottom="-0px"/>
		</div>
	</section>
</template>

<style lang="scss" scoped>

section {
	position: relative ;

	.contact {
		padding: 11rem 0 8rem;
		position: relative;


		&__contact-network-wrapper {
			height: inherit;
			min-height: 350px;
			font-family: "Lora", serif;
			font-size: 1.3rem;
			@include flexbox(space-between, flex-start, column);

			h3 {
				@include border-gradient(0);
				width: fit-content;
				border-bottom: 3px solid;
				border-left: 3px solid;
				margin-bottom: 3rem;
				padding: 0 0 .6rem .6rem;
			}

			h3.current-language-ar {
				border-left: none !important;
				border-right: 3px solid !important;
				padding-right: .6rem !important;
			}
		}

		&__contact-info {
			width: 300px;
			min-height: 140px;
			@include flexbox(space-between, flex-start, column);
		}

		&__contact-group {
			@include flexbox(space-between);
			gap: 1rem;
			@include contact-and-network-icon($selector: ".contact__icon-wrapper", $transform: scale(1));

			&:hover i {
				@include animation(500ms) {
					0% { transform: rotate(0deg); }
					33% { transform: rotate(-30deg); }
					66% { transform: rotate(60deg); }
					100% { transform: rotate(0deg); }
				}
			}

			small {
				font-style: italic;
				direction: ltr;
			}
		}

		@media screen and (min-width: 768px) {
			padding-bottom: 5rem !important;
			@include flexbox(space-between, flex-start);

			&__form-contact {
				width: 50% !important;
				order: 2;
			}

			&__contact-network-wrapper {
				width: 50% !important;
				min-height: 470px !important;
				order: 1;
			}
		}
	}
}

</style>
