<template>
  <div>
    <section class="hero">
      <div class="hero__wrapper">
        <div class="hero__content">
          <h1 class="hero__title">A simple solution to complex tasks is coming soon</h1>
          <p class="hero__description">
            Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is
            the new collaboration platform built with an intuitive interface to improve
            productivity.
          </p>
          <a href="" class="button hero__cta">Get Started</a>
        </div>
        <picture>
          <source srcset="@/assets/images/hero-graphics-desktop.svg" media="(min-width: 1120px)" />
          <source srcset="@/assets/images/hero-graphics-tablet.svg" media="(min-width: 768px)" />
          <img
            src="@/assets/images/hero-graphics-mobile.svg"
            aria-hidden="true"
            alt="Hero graphics"
            class="hero__graphics"
          />
        </picture>
      </div>
    </section>
    <section class="plans">
      <div class="plans__wrapper">
        <div class="plans__items">
          <div class="plans__item">
            <h2 class="plans__item-title">Basic</h2>
            <p class="plans__item-price">Free</p>
            <p class="plans__item-users">Up to 5 users for free</p>
            <div class="plans__item-attributes">
              <p class="plans__item-attribute">Basic document collaboration</p>
              <p class="plans__item-attribute">2 GB storage</p>
              <p class="plans__item-attribute">Great security and support</p>
            </div>
            <a href="" class="button plans__item-cta">Try for Free</a>
          </div>
          <div class="plans__item plans__item--highlighted">
            <h2 class="plans__item-title">Pro</h2>
            <p class="plans__item-price">$9.99</p>
            <p class="plans__item-users">Per user, billed monthly</p>
            <div class="plans__item-attributes">
              <p class="plans__item-attribute">All essential integrations</p>
              <p class="plans__item-attribute">50 GB storage</p>
              <p class="plans__item-attribute">More control and insights</p>
            </div>
            <a href="" class="button plans__item-cta">Try for Free</a>
          </div>
          <div class="plans__item">
            <h2 class="plans__item-title">Ultimate</h2>
            <p class="plans__item-price">$19.99</p>
            <p class="plans__item-users">Per user, billed monthly</p>
            <div class="plans__item-attributes">
              <p class="plans__item-attribute">Robust work management</p>
              <p class="plans__item-attribute">100 GB storage</p>
              <p class="plans__item-attribute">VIP support</p>
            </div>
            <a href="" class="button plans__item-cta">Try for Free</a>
          </div>
        </div>
        <div class="plans__footer">
          <Cutdown variant="dark" />
          <a href="" class="button cutdown__cta">Get Started</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Cutdown from '@/components/Cutdown.vue';
</script>