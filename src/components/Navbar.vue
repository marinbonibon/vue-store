<template>
  <div>
    <v-navigation-drawer app temporary v-model="sideNav">
      <v-list>
        <v-list-item v-for="(link, i) in links" :key="i" :to="link.url">
          <v-list-item-icon>
            <v-icon color="cyan" left>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app dark color="pink lighten-4">
      <v-app-bar-nav-icon @click="sideNav = !sideNav" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link
          :to="'/'"
          tag="h2"
          class="store_title"
        >
          Online Store
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text small dark
             class="hidden-sm-and-down"
             v-for="(link, i) of links"
             :key="i"
             :to="link.url">
        <v-icon left color="cyan">{{ link.icon }}</v-icon>
        {{ link.title }}
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false,
      links: [
        {
          title: 'Login',
          icon: 'mdi-account-circle',
          url: '/login',
        },
        {
          title: 'Register',
          icon: 'mdi-face',
          url: '/register',
        },
        {
          title: 'Cart',
          icon: 'mdi-cart-arrow-down',
          url: '/checkout',
        },
        {
          title: 'New Product',
          icon: 'mdi-plus-thick',
          url: '/new',
        },
        {
          title: 'My products',
          icon: 'mdi-format-list-bulleted-type',
          url: '/list',
        },
      ],
    };
  },
};
</script>

<style scoped>
.store_title {
  cursor: pointer;
}
</style>
