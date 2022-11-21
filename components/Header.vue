<!-- @format -->

<script setup lang="ts">

     const navOpen = ref(false);
     const links: [string, string][] = [
          ['Accueil', '#intro'],
          ['Compétences', '#skills'],
          ['Portfolio', '#portfolio'],
          ['Formations', '#education'],
          ['Contact', '#contact'],
     ];


     onMounted(() => {
          window.addEventListener('resize', toggleNavbar);
          toggleNavbar();
     });

     onUnmounted(() => {
          window.removeEventListener('resize', toggleNavbar);
     });

     function toggleNavbar() {
          window.innerWidth >= 1024 ? navOpen.value = true : navOpen.value = false;
     }


</script>

<template>
     <header>
          <div id="logo">
               <NuxtLink to="/">
                    <img
                         src="~assets/images/logo/zool-developer.svg"
                         alt="icon zool developer" />
               </NuxtLink>
          </div>
          <button
               @click="navOpen = !navOpen"
               :class="{active: !navOpen}"
               class="navbar-toggler"
               type="button"
               aria-label="toggle navigation">
               <span class="navbar-toggler__bar navbar-toggler__bar--top"></span>
               <span class="navbar-toggler__bar navbar-toggler__bar--middle"></span>
               <span class="navbar-toggler__bar navbar-toggler__bar--bottom"></span>
          </button>
          <nav  :class="['navbar ', { active: navOpen }]">
               <ul>
                    <li v-for="link, index in links" :key="index">
                         <NuxtLink :to="link[1]">{{ link[0] }}</NuxtLink>
                    </li>
                    <li class="navbar__color-switcher">
                         <span role="button">
                              <Icon name="ic:outline-wb-sunny" id="sun"/>
                              <Icon name="ic:baseline-bedtime" id="moon" />
                         </span>
                    </li>
                    <li class="navbar__lang-switcher">
                         <select id="languages" name="language">
                              <option value="French">FR</option>
                              <option value="English">EN</option>
                              <option value="Arabic">AR</option>
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
          height: 60px;
          padding: 1.2rem;
          position: relative;
          z-index: 10;
          color: $color-text-primary;
          background-color: $color-brand-tertiary;
          box-shadow: 0 0.5rem 1rem rgb($color-text-inverted, .15);
          // overflow: hidden;

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
                    background: $color-text-primary;
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
                    background-color: $color-brand-tertiary;
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
                              // Review this line of code!
                              // .active {
                              //      &::after {
                              //           transform: scaleX(1);
                              //      }
                              // }
                              .router-link-active {
                                   color: rgb($color-text-primary, 0.7) !important;
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

               &__lang-switcher {
                    top: 90vh;
                    right: 118px;
               }

               &__color-switcher {
                    top: 80vh;
                    right: 127px;

                    span {
                         color: $color-text-primary !important;
                    }

                     #sun {
                         display: none;
                    }
               }
          }

          @media only screen and (min-width: 640px) {
               padding: 0.6rem 4rem !important;
                .navbar {
                    &__lang-switcher {
                         right: 160px !important;
                    }
                    &__color-switcher {
                         right: 168px !important;
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
                    }

                    &__color-switcher {
                         margin-left: 4rem !important;
                    }
               }
          }
     }
</style>
