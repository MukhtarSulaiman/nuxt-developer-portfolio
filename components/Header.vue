@format

<script setup lang="ts">
     import { useI18n } from 'vue-i18n';
     
     const { locale } = useI18n();
     const navOpen = ref(false);
     const lang = ref();

     onMounted(() => {
          window.addEventListener('resize', toggleNavbar);
          toggleNavbar();
          handleLanguage();
     });
     onUnmounted(() => {
          window.removeEventListener('resize', toggleNavbar);
     }); 
     function toggleNavbar() {
          window.innerWidth >= 1024 ? navOpen.value = true : navOpen.value = false;
     }

     function toggleMode(mode: string) {
           useColorMode().preference = mode;
     }
     
     function handleLanguage() {
          lang.value = localStorage.getItem('lang');
          if (lang.value) {
               locale.value = lang.value;
          } else {
               lang.value = localStorage.setItem('lang', locale.value);
          }
          document.documentElement.lang = locale.value;
     }
     function updateLangue(e: any) {
          lang.value = localStorage.setItem('lang', e.target.value);
          document.documentElement.lang = locale.value;
     }

</script>

<template>
     <header>
          <div id="logo">
               <NuxtLink to="/">
                    <img
                         src="~assets/images/logo/logo-zool-developer.svg"
                         :alt="$t('logo_img_desc')" />
               </NuxtLink>
          </div>
          <button
               @click="navOpen = !navOpen"
               :class="['navbar-toggler', {active: !navOpen, 'light-mode': $colorMode.preference === 'light'}]"
               type="button"
               aria-label="toggle navigation">
               <span class="navbar-toggler__bar navbar-toggler__bar--top"></span>
               <span class="navbar-toggler__bar navbar-toggler__bar--middle"></span>
               <span class="navbar-toggler__bar navbar-toggler__bar--bottom"></span>
          </button>
          <nav  :class="['navbar ', { active: navOpen }]">
               <ul>
                    <li><NuxtLink :to="$t('home_path')">{{ $t('home_title') }}</NuxtLink></li>
                    <li><NuxtLink :to="$t('skills_path')">{{ $t('skills_title') }}</NuxtLink></li>
                    <li><NuxtLink :to="$t('portfolio_path')">{{ $t('portfolio_title') }}</NuxtLink></li>
                    <li><NuxtLink :to="$t('education_path')">{{ $t('education_title') }}</NuxtLink></li>
                    <li><NuxtLink :to="$t('contact_path')">{{ $t('contact_title') }}</NuxtLink></li>
                    <li class="navbar__color-switcher">
                         <i v-if="$colorMode.preference === 'dark'" @click="toggleMode('light')" role="button">
                              <Icon name="sun" id="sun"/>
                         </i>
                         <i v-if="$colorMode.preference === 'light'" @click="toggleMode('dark')">
                              <Icon name="moon" id="moon"/>
                         </i>
                    </li>
                    <li class="navbar__lang-switcher">
                         <select @change="updateLangue($event)" v-model="$i18n.locale" id="languages" name="language">
                              <option value="fr">FR</option>
                              <option value="en">EN</option>
                              <option value="ar">Ar</option>
                         </select>
                    </li>
               </ul>
          </nav>
     </header>
</template>

<style lang="scss" scoped>
     header {
          @include flexbox(space-between);
          width: 100%;
          max-width: 1728px;
          height: 60px;
          padding: 1.2rem;
          position: fixed;
          top: 0;
          z-index: 10;
          @include box-shadow;

          #logo {
               img {
                    width: 30px;
               }
          }

          .navbar-toggler {
               display: block;
               @include flexbox($justify-content: space-around,$flex-direction: column);
               width: 20px;
               height: 20px;
               position: relative;
               border: 0;
               background: none;
               cursor: pointer;
        
               &__bar {
                    width: 100%;
                    height: 1.5px;
                    position: absolute;
                    left: 0;
                    background-color: $color-text-primary;
                    border-radius: 2px;
                    transform: rotate(0deg);
                    transition: 400ms ease-in-out;

                    // When the menu toggler is clicked
                    &--top {
                         margin-top: 0;
                         transform: rotate(135deg);
                    }
                    &--middle {
                         opacity: 0;
                         filter: alpha(opacity=0);
                    }
                    &--bottom {
                         margin-top: 0;
                         transform: rotate(-135deg);
                    }
               }

               .light-mode &__bar {
                    background-color: $color-text-inverted;
               }
                // State when the navbar is collapsed
               &.active {
                    .navbar-toggler__bar {
                         &--top {
                              width: 110%;
                              margin-top: -20px;
                              transform: rotate(0deg);
                         }
                         &--middle {
                              width: 70%;
                              opacity: 1;
                              filter: alpha(opacity=100);
                         }
                         &--bottom {
                              width: 95%;
                              margin-top: 20px;
                              transform: rotate(0deg);
                         }
                    }
               }
          }
          
          .navbar {
               right: 0;
               width: 0;
               height: 0;
               margin: 0;
               padding: 0;
               visibility: hidden;
               position: absolute;
               top: 60px;

               &.active {
                    width: 100%;
                    height: 92vh;
                    display: block;
                    visibility: visible !important;
                    @include animation(.7s) {
                         0% {opacity: 0; transform: translateX(100%);}
                         100% {opacity: 1; transform: translateX(0%);}
                    };

                    ul {
                         height: inherit;
                         @include flexbox($justify-content: space-around,$flex-direction: column);

                         li {
                              margin: 0.6rem;
                              position: relative;
                              opacity: 0;

                              .router-link-active:hover {
                                   &::after {
                                        transform: scaleX(1);
                                   }
                              }
                              .router-link-active::after {
                                   @include line($left: 0, $bottom: 0);
                                   @include gradient;
                                   transform-origin: 0% 50%;
                                   transform: scaleX(0);
                                   transition: transform 350ms linear;
                              }
                              // Review these lines of code!
                              // .active {
                              //      &::after {
                              //           transform: scaleX(1);
                              //      }
                              // }
                              .router-link-active {
                                   font-size: 1.3rem;
                              }

                              @for $i from 1 to 8 {
                                   &:nth-child(#{$i}) {
                                        @include animation(.8s, $i * 0.15s) {
                                             0% { opacity: 0; transform: translateX(300%);}
                                             100% { opacity: 1; transform: translateX(0%);}
                                        }
                                   }
                              }
                         }
                    }
                    .navbar__color-switcher,
                     .navbar__lang-switcher {
                         position: static !important;
                    }
               }

               &__color-switcher,
               &__lang-switcher {
                    position: fixed;
                    z-index: 5;
                    @include animation(3s) {
                         0% {opacity: 0; visibility: hidden;}
                         100% {opacity: 1;  visibility: visible;}
                    }
               }

               &__color-switcher {
                    top: 80vh;
                    right: 17px;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    border: 1px solid $color-brand-secondary;
                    cursor: pointer;
                    @include flexbox;

                    i {
                         background: none;
                    }
               }

               &__lang-switcher {
                    top: 90vh;
                    right: 17px;

                    select {
                         width: 42px;
                         height: 25px;
                         font-size: 1rem;
                         color: $color-text-primary;
                         font-weight: 700;
                         border: none;
                         outline: none;
                         border-radius: 5px;
                         cursor: pointer;
                         @include gradient;
                         @include animation(400ms) {
                              0% {
                                   opacity: 0;
                              }
                              100% {
                                   opacity: 1;
                              }
                         }
                    }
               }
          }

          @media only screen and (min-width: 640px) {
               padding: 0.6rem 4rem !important;
               
               .navbar {
                    &__color-switcher {
                         right: 62px !important;
                    }

                    &__lang-switcher {
                         right: 57px !important;
                    }
               }
          }

          @media screen and (min-width: 1024px) {
               .navbar-toggler {
                    display: none !important;
               }
               .navbar {
                    position:static !important;
                    width: auto !important;
                    height: initial !important;
                    transform: translateX(0%) !important;

                    ul {
                         @include flexbox($justify-content: space-between,$flex-direction: row !important);

                         li {
                              opacity: 1 !important; 
                              transform: translateX(0) !important;
                         }
                    }

                    &__color-switcher {
                         margin-left: 3rem !important;
                         margin-right: 1rem !important;
                    }
               }
          }
     }
</style>
