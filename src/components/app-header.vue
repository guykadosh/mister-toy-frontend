<template>
  <header class="header full main-layout">
    <div class="flex items-center justify-between">
      <div class="header__logo-box">
        <div class="header__logo">
          <span>mister</span>
          <span>T</span>
          <span>oy</span>
        </div>
      </div>
      <nav class="nav-bar">
        <ul class="nav-bar__links clean-list flex items-center justify-between">
          <li>
            <router-link
              class="nav-bar__link flex items-center justify-between"
              to="/"
            >
              <font-awesome-icon icon="fa-solid fa-house" />
              <span>Home</span>
            </router-link>
          </li>
          <li>
            <router-link class="nav-bar__link flex items-center" to="/toy">
              <font-awesome-icon icon="fa-solid fa-children" />
              <span>Toys</span>
            </router-link>
          </li>
          <li>
            <router-link
              class="nav-bar__link flex items-center"
              to="/toy/dashboard"
            >
              <font-awesome-icon icon="fa-solid fa-chart-line" />
              <span>Dashboard</span>
            </router-link>
          </li>
          <li>
            <router-link class="nav-bar__link flex items-center" to="/about">
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
