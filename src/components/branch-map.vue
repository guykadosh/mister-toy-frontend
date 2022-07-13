<template>
  <div class="branch-stores my-2">
    <h2 class="m-2">Our Stores</h2>
    <span
      class="btn mx-1"
      v-for="marker in markers"
      :key="marker"
      @click="center = marker.position"
      >{{ marker.location }}</span
    >
  </div>
  <GMapMap
    :center="center"
    :zoom="11"
    map-type-id="terrain"
    style="width: 500px; height: 300px"
  >
    <GMapCluster>
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        @click="center = m.position"
      />
    </GMapCluster>
  </GMapMap>
</template>
<script>
export default {
  name: 'map',
  data() {
    return {
      center: { lat: 32.088179, lng: 34.790144 },
      markers: [
        {
          position: {
            lat: 32.07446846,
            lng: 34.791617341,
          },
          location: 'Tel-aviv',
        },
        {
          position: {
            lat: 29.549795,
            lng: 34.95463,
          },
          location: 'Eilat',
        },
        {
          position: {
            lat: 32.65971,
            lng: 35.10516,
          },
          location: "Yokne'am",
        },
      ],
    }
  },
}
</script>
