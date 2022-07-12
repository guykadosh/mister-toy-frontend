<template>
  <header class="header">
    <div class="header__inner flex justify-between items-center">
      <div class="header__logo-box">
        <img class="header__logo-img" src="@/assets/logo.png" alt="" />
      </div>
      <nav class="nav-bar">
        <ul class="nav-bar__links clean-list">
          <li class="nav-bar__link">
            <router-link class="flex items-center" to="/">
              <font-awesome-icon icon="fa-solid fa-house" />
              <span>Home</span>
            </router-link>
          </li>
          <li class="nav-bar__link">
            <router-link class="flex items-center" to="/toy">
              <font-awesome-icon icon="fa-solid fa-children" />
              <span>Toys</span>
            </router-link>
          </li>
          <li class="nav-bar__link">
            <router-link class="flex items-center" to="/toy/dashboard">
              <font-awesome-icon icon="fa-solid fa-chart-line" />
              <span>Dashboard</span>
            </router-link>
          </li>
          <li class="nav-bar__link">
            <router-link class="flex items-center" to="/about">
              <font-awesome-icon icon="fa-solid fa-address-card" />
              <span>About</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
export default {}
</script>

<style></style>
