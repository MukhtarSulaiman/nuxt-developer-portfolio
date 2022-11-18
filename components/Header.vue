<!-- @format -->

<script setup lang="ts">

     const navOpen = ref(false);

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
          <nav  :class="{ active: navOpen }" id="navbarNav">
               <ul>
                    <li class="nav-item nav-item-border active"><NuxtLink to="#intro">Accueil</NuxtLink></li>
                    <li class="nav-item nav-item-border"><NuxtLink to="#skills">Compétences</NuxtLink></li>
                    <li class="nav-item nav-item-border"><NuxtLink to="#portfolio">Portfolio</NuxtLink></li>
                    <li class="nav-item nav-item-border"><NuxtLink to="#education">Formations</NuxtLink></li>
                    <li class="nav-item nav-item-border"><NuxtLink to="#contact">Contact</NuxtLink></li>
                    <li class="nav-item nav-item-mode-switch me-4">
                         <span class="dark-mode-toggle fs-3" role="button">
                              <!-- <Icon name="ic:outline-wb-sunny" id="sun"/> -->
                              <Icon name="ic:baseline-bedtime" id="moon" />
                         </span>
                    </li>
                    <li class="nav-item nav-item-lang">
                         <select id="site-language" name="language">
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
          nav {
               position: absolute;
               top: 60px;
               right: 0;
               width: 100%;
               height: 92vh;
               background-color: $color-brand-tertiary;
               transition: all .7s;
               transform: translateX(100%);

                &.active {
                    display: block;
                    transform: translateX(0%);
               }
               
               ul {
                    height: inherit;
                    @include flexbox($justify-content: space-around,$flex-direction: column);
                    
                    li {
                         margin: 0.6rem;
                         position: relative;
                         &:hover {
                              &::after {
                                   transform: scaleX(1);
                              }
                         }
                         &::after {
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
                    }

                    .nav-item-mode-switch {
                         position: relative;
                         margin-left: 2rem;

                         span {
                              color: $color-text-primary !important;
                         }
                         #moon,
                         #sun {
                              position: absolute;
                              left: -27px;
                              top: -13px;
                         }
                    }

                    #sun {
                         display: none;
                    }
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

          @media only screen and (min-width: 640px) {
               padding: 0.6rem 4rem !important;
          }

          @media only screen and (min-width: 768px) { }

          @media only screen and (min-width: 992px) {}

          @media screen and (min-width: 1024px) {
               nav {
                    position:static !important;
                    width: auto !important;
                    height: initial !important;
                    transform: translateX(0%) !important;
               }
               ul {
                    @include flexbox($justify-content: space-between, $flex-direction: row !important);
               }
                .navbar-toggler {
                    display: none !important;
               }
               .nav-item-mode-switch {
                    margin-left: 4rem !important;
               }
          }
     }
</style>
