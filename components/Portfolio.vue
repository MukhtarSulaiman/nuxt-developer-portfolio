<script setup lang="ts">
</script>


<template>
    <section id="portfolio">
        <h2>Portfolio</h2>
        <div class="portfolio-container">
            <div class="portfolio-container__project-holder">
                <div 
                    class="portfolio-container__img-preview" 
                    :style="{ backgroundImage: `url('/images/projects/previews/socialmedia.jpg')`}">
                    <div class="portfolio-container__project-details">
                        <h3>Groupomania</h3>
                        <div class="portfolio-container__sub-heading-description">
                            <h4>Social media</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ratione velit natus nemo deleniti vitae!.</p>
                        </div>
                        <button>En savoir plus</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

    section {
        margin-top: 10rem;
    }

    .portfolio-container {
        @include flexbox;
        flex-wrap: wrap;
        gap: 2rem;

        &__project-holder {
            width: 410px;
            height: 340px;
            position: relative;
        }

        &__img-preview {
            width: 60%;
            height:inherit;            
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 30% 20%;
        }

        &__project-details {
            position: absolute;
            top: 0;
            right: 0;
            transform: translateY(15%);
            width: 150px;
            @include flexbox(space-between, left, $flex-direction: column);

            h3 {
                font-family:  'Raleway', sans-serif;
                font-size: 1.5rem;
                font-weight:900;
                text-transform: uppercase;
            }
        }

        &__sub-heading-description {
            margin: 2rem 0;

            h4 {
                margin-bottom: .3rem;
            }

            p {
                font-weight: 300;
            }
        }

        button {
            @include custom-btn();
            font-weight: 200;
            border-radius: 10px;
            background: $color-brand-secondary;
            background-size: 200%;
        }

        @media screen and (min-width: 576px) {
            &__project-details {
                width: 180px !important;
            }
        }
    }

</style>