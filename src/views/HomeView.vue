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
          <BaseButton variant="primary" href="" as="a">Get Started</BaseButton>
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
          <div class="pricing-card">
            <h2 class="pricing-card__title">Basic</h2>
            <div class="pricing-card__inner">
              <div class="pricing-card__price-block">
                <p class="pricing-card__price">Free</p>
                <p class="pricing-card__users">Up to 5 users for free</p>
              </div>
              <div class="pricing-card__attributes">
                <p class="pricing-card__attribute">Basic document collaboration</p>
                <p class="pricing-card__attribute">2 GB storage</p>
                <p class="pricing-card__attribute">Great security and support</p>
              </div>
            </div>
            <BaseButton variant="ghost" href="" as="a">Try for Free</BaseButton>
          </div>
          <div class="pricing-card pricing-card--highlighted">
            <h2 class="pricing-card__title">Pro</h2>
            <div class="pricing-card__inner">
              <div class="pricing-card__price-block">
                <p class="pricing-card__price">$9.99</p>
                <p class="pricing-card__users">Per user, billed monthly</p>
              </div>
              <div class="pricing-card__attributes">
                <p class="pricing-card__attribute">All essential integrations</p>
                <p class="pricing-card__attribute">50 GB storage</p>
                <p class="pricing-card__attribute">More control and insights</p>
              </div>
            </div>
            <BaseButton variant="inverse" href="" as="a">Try for Free</BaseButton>
          </div>
          <div class="pricing-card">
            <h2 class="pricing-card__title">Ultimate</h2>
            <div class="pricing-card__inner">
              <div class="pricing-card__price-block">
                <p class="pricing-card__price">$19.99</p>
                <p class="pricing-card__users">Per user, billed monthly</p>
              </div>
              <div class="pricing-card__attributes">
                <p class="pricing-card__attribute">Robust work management</p>
                <p class="pricing-card__attribute">100 GB storage</p>
                <p class="pricing-card__attribute">VIP support</p>
              </div>
            </div>
            <BaseButton variant="ghost" href="" as="a">Try for Free</BaseButton>
          </div>
        </div>
        <div class="plans__footer">
          <Cutdown variant="dark" />
          <BaseButton variant="primary" href="" as="a">Get Started</BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Cutdown from '@/components/Cutdown.vue';
import BaseButton from '@/components/BaseButton.vue';
</script>
