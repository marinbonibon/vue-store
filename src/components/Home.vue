<template>
  <div>
    <v-container class="carousel_wrapper" fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel :show-arrows="false">
            <v-carousel-item
              v-for="product in products"
              :key="product.id"
              :src="product.imgSrc"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="products_container">
      <v-layout :class="`justify-lg-space-around`" wrap>
        <v-card
          class="mx-auto product"
          max-width="300"
          v-for="product of products"
          :key="product.id"
        >
          <router-link :to="`/product/${product.id}`">
            <v-img
              :src="product.imgSrc"
              height="200px"
            ></v-img>
          </router-link>

          <v-card-title>
            {{ product.title }}
          </v-card-title>

          <v-card-text class="text--primary">
            <p>{{ product.description.substring(0, 60) }}...</p>
            <p class="product_price">Price:{{ product.price }} $</p>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="cyan lighten-2"
              text
              :to="`/product/${product.id}`">
              Description
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              color="cyan lighten-2"
              text
            >
              Add to cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [
        {
          id: '1',
          title: 'ASUS X509JP-EJ067',
          vendor: 'Asus',
          color: 'Blue',
          material: 'plastic',
          description: 'An all-in-one entry-level laptop that combines stylish design and modern technology. It offers the user the full power of an Intel® Core ™ processor paired with discrete graphics and up to 16GB of DDR4-2400 RAM. The laptop features an anti-reflective, thin-bezel NanoEdge display with 178 ° wide viewing angles.',
          price: 880,
          promo: false,
          imgSrc: 'https://nsv.by/upload/image_resize/1c2/927/18c0157e9122391d93ac6fc8d208971e.jpg',
        },
        {
          id: '2',
          title: 'Lenovo Yoga C640',
          vendor: 'Lenovo',
          color: 'Iron Grey',
          material: 'plastic',
          description: 'Ideal for students and professionals on-the-go, the Lenovo Yoga C640 13.3-inch i5-10210U/8GB/256GB SSD 2 in 1 Device can be easily configured as a laptop or a tablet to meet different requirements.',
          price: 1200,
          promo: true,
          imgSrc: 'https://www.lenovo.com/medias/Yoga-C640-gallery.jpg?context=bWFzdGVyfGltYWdlc3w3MjQyMXxpbWFnZS9qcGVnfGltYWdlcy9oMzEvaDY1LzEwOTcxNzQyNTAyOTQyLmpwZ3w2NTYxNGQzNTEzOGQwNTYwOThkMTA4NDNkMjNhY2QyMWM3YTg5MTNkMDAxMWVjNWZjM2U5YjM4MWFjMGNiNWJl',
        },
        {
          id: '3',
          title: 'Dell Inspiron 15 5501-3318',
          vendor: 'Dell',
          color: 'Silver',
          material: 'metal',
          description: `10th Generation Intel® Core™ i3-10110U Processor (4MB Cache, up to 4.1 GHz)
                        Windows 10 Home Single Language, English
                        Intel® UHD Graphics with shared graphics memory
                        4GB, onboard, DDR4, 2666MHz
                        1 TB 5400 RPM 2.5-inch SATA Hard Drive
                        Ports & Slots`,
          price: 1300,
          promo: true,
          imgSrc: 'https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/inspiron_notebooks/15_5590/pdp/laptops-inspiron-15-5590-pdp-mod1-silver.jpg?fmt=jpg',
        },
      ],
    };
  },
};
</script>
<style scoped>
.products_container {
  max-width: 1000px;
}

.carousel_wrapper {
  padding: 0;
}

.product {
  margin-top: 15px;
}

.product_price {
  color: #ba1212;
}
</style>
