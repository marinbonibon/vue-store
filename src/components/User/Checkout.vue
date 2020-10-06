<template>
  <v-container>
    <v-layout row>
      <v-flex sx12 sm6 offset-sm-3>
        <h1 class="text-secondary mb-3">Orders</h1>
        <v-list-item-group
          multiple
        >
          <v-list-item v-for="(order, i) of orders" :key="i">
            <template>
              <v-list-item-action>
                <v-checkbox
                  color="cyan"
                  :input-value="order.done"
                  @change="markDone"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{order.name}}</v-list-item-title>
                <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
              </v-list-item-content>
              <v-btn color="cyan" dark :to="`/product/${order.productId}`">Open</v-btn>
            </template>
          </v-list-item>
        </v-list-item-group>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      orders: [{
        id: 'test',
        name: 'Marina',
        phone: '12-23-34',
        productId: '1',
        done: false,
      }],
    };
  },
  methods: {
    markDone(order) {
      // eslint-disable-next-line no-param-reassign
      order.done = true;
    },
  },
};
</script>
