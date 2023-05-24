@format
<script setup lang="ts">
     import { useRoute } from 'vue-router';
     
     const route = useRoute();
     const isHomePage = ref(true);

     watch(() => route.name, (newValue, oldValue) => {
        if(newValue === 'projects-id' && oldValue !== 'projects-id') {
          isHomePage.value = false;
        }
    }, {immediate: true});

     onMounted(() => {
          window.addEventListener('resize', handleNavbar);
          handleNavbar();
     });

     onUnmounted(() => {
          window.removeEventListener('resize', handleNavbar);
     });
     

     const navOpen = ref(false);

     function handleNavbar(): void {
          const windowInnerWidth = window.innerWidth >= 1024;
          windowInnerWidth ? navOpen.value = true : navOpen.value = false;

          const listItems = document.querySelectorAll<HTMLElement>('ul>li');

          for(let i = 0; i < 4; i++) {
               listItems[i].addEventListener('click', e => {
                    if(!windowInnerWidth) {
                         navOpen.value = false;
                    } else {
                         navOpen.value = true; 
                    }
               });
          }
     }

     function toggleMode(mode: string) {
          useColorMode().preference = mode;
     }
     

     const { locales, locale, setLocale } = useI18n();

     const updateLangue = computed({
          get: () => locale.value,
          set: (value) => {
               setLocale(value);
          },
     });

     function handlMousedown(e: any): void {  
          e.preventDefault();

          const select = e.target;
          const dropdown = document.createElement('ul');
          dropdown.className = 'selector-options';

          [...select.children].forEach(option => {
               const dropdownOptions = document.createElement('li');
               dropdownOptions.textContent = option.textContent;
               dropdown.appendChild(dropdownOptions);

               dropdownOptions.addEventListener('mousedown', event => {
                    e.stopPropagation();
                    select.value = option.value;
                    e.target.parentElement.value = option.value;
                    select.dispatchEvent(new Event('change'));
                    e.target.parentElement.dispatchEvent(new Event('change'));
                    dropdown.remove();
               });
          });

          e.target.parentElement.appendChild(dropdown);
     }

     watchEffect(() => {
          document.documentElement.lang = locale.value;
     });

</script>

<template>
     <header :class="{'lang-ar': locale === 'ar'}">
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
                    <li><NuxtLink :to="$t('home_path')" class="current-section">{{ $t('home_title') }}</NuxtLink></li>
                    <li v-show="isHomePage"><NuxtLink :to="$t('skills_path')">{{ $t('skills_title') }}</NuxtLink></li>
                    <li v-show="isHomePage"><NuxtLink :to="$t('portfolio_path')">{{ $t('portfolio_title') }}</NuxtLink></li>
                    <!-- <li v-show="isHomePage"><NuxtLink :to="$t('education_path')">{{ $t('education_title') }}</NuxtLink></li> -->
                    <li v-show="isHomePage"><NuxtLink :to="$t('contact_path')">{{ $t('contact_title') }}</NuxtLink></li>
                    <li class="navbar__color-switcher">
                         <i v-if="$colorMode.preference === 'dark'" @click="toggleMode('light')" role="button">
                              <Icon name="sun" id="sun"/>
                         </i>
                         <i v-if="$colorMode.preference === 'light'" @click="toggleMode('dark')">
                              <Icon name="moon" id="moon"/>
                         </i>
                    </li>
                    <li class="navbar__lang-switcher">
                         <select @mousedown="handlMousedown($event)" v-model="updateLangue" id="languages" name="language">
                              <option
                                   v-for="item in locales"
                                   :key="typeof item === 'object' ? item.code : item"
                                   :value="typeof item === 'object' ? item.code : item"
                              >
                                   {{ typeof item === "object" ? item.name : item }}
                              </option>
                         </select>
                    </li>
               </ul>
          </nav>
     </header>
</template>

<style lang="scss" scoped>
     header.lang-ar {
          font-family: 'Cairo', sans-serif;
    }
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
                         height: 85%;
                         @include flexbox($justify-content: space-around,$flex-direction: column);

                         li {
                              margin: 0.6rem;
                              position: relative;
                              opacity: 0;
                              font-size: 1.3rem;
                              font-weight: 200;

                              .router-link-active.current-section,
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
                              // &.active {
                              //      &::after {
                              //           transform: scaleX(1);
                              //      }
                              // }
                              // .router-link-active {
                              //      font-size: 1.3rem;
                              // }

                              @for $i from 1 to 8 {
                                   &:nth-child(#{$i}) {
                                        @include animation(.8s, $i * 0.15s) {
                                             0% { opacity: 0; transform: translateX(300%);}
                                             100% { opacity: .7; transform: translateX(0%);}
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
                    top: 85vh;
                    right: 27px;
                    width: 30px;
                    height: 30px;
                    cursor: pointer;
                    @include flexbox;

                    i {
                         background: none;
                         transform: rotate(-45deg);
                    }
               }

               &__lang-switcher {
                    top: 75vh;
                    right: 17px;

                    // position: relative;
                    // display: inline-block;

                    select {
                         width: 55px;
                         height: 25px;
                         font-size: 1rem;
                         color: $color-text-primary;
                         font-weight: 700;
                         border: none;
                         outline: none;
                         border-radius: 5px;  
                         padding: 0 4px;
                         appearance: none;
                         direction: ltr;       
                         cursor: pointer;
                         @include gradient;
                         @include animation(400ms) {
                              0% { opacity: 0; }
                              100% { opacity: 1; }
                         }
                    }

                    &::after {
                         content: '';
                         border-width: 5px;
                         border-style: solid;
                         border-color: transparent;
                         border-top-color: $color-text-primary;
                         display: inline-block;
                         position: absolute;
                         right: 10px;
                         bottom: 5px;
                    }
               }
          }

          @media only screen and (min-width: 640px) {
               padding: 0.6rem 4rem !important;
               
               .navbar {
                    &__color-switcher {
                         right: 67px !important;
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
                              opacity: .7; 
                              transform: translateX(0) !important;
                         }
                    }

                    &__color-switcher {
                         margin-left: 3rem !important;
                         margin-right: 1rem !important;
                    }

                    &__color-switcher,
                    &__lang-switcher {
                         opacity: 1 !important;
                    }
               }
          }
     }
</style>
