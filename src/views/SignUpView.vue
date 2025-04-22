<template>
  <div>
    <section class="signup">
      <div class="signup__wrapper">
        <div class="signup__content">
          <h1 class="signup__title">Work smarter. Save time.</h1>

          <p class="signup__description">
            Easily manage your projects. Get on the list and receive in-app perks available only to
            early subscribers. We are moving into final development and getting ready for official
            launch soon.
          </p>
          <Cutdown variant="light" />
        </div>
        <div class="signup__form-wrapper">
          <form class="signup__form-box" @submit.prevent="">
            <input
              type="text"
              name="text"
              value=""
              placeholder="Name"
              autocomplete="name"
              class="form__text-field"
            />
            <input
              type="email"
              name="email"
              value=""
              autocomplete="email"
              placeholder="Email Address"
              class="form__text-field"
            />
            <select name="tarif" class="form__select-field">
              <option value="" disabled selected>Basic Pack - Free</option>
              <option value="free">Free</option>
              <option value="pro">Pro</option>
              <option value="ultimate">Ultimate</option>
            </select>
            <input
              type="tel"
              name="phone"
              value=""
              autocomplete="phone"
              placeholder="Phone Number"
              class="form__text-field"
            />
            <input
              type="text"
              name="company"
              value=""
              autocomplete="company"
              placeholder="Company"
              class="form__text-field"
            />
            <BaseButton variant="primary" type="submit">Get on the list</BaseButton>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Cutdown from '@/components/Cutdown.vue';
import BaseButton from '@/components/BaseButton.vue';
</script>
