<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Animation state (controls fade/slide in)
const isVisible = ref(false);
const sectionRef = ref<HTMLElement | null>(null);

// Track current feature index
const currentIndex = ref(0);

// Features list
const features = [
  'Dashboard Analytics',
  'Inventory Management',
  'Secure Stripe Payment',
  'Order Status Tracking',
  'User Authentication',
  'Profile Management',
  'Sales Analysis',
  'Wishlist Management',
  'Real-time Cart Updates',
  'Customer Ratings',
  'Email Notifications',
];

let observer: IntersectionObserver | null = null;

// Calculate 3D transform styles for each card (3D carousel effect)
const getCardStyle = (index: number) => {
  const offset = index - currentIndex.value;
  const isActive = offset === 0;

  // Top card leans back (negative angle), bottom card leans forward (positive angle)
  const rotateX = offset * -12; // Change the angle for cards at different position
  const translateY = offset * 65; // Increase spacing between cards
  const translateZ = isActive ? 0 : Math.abs(offset) * -60; // Push away based on distance

  return {
    transform: `translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg)`,
    opacity: Math.abs(offset) <= 2 ? 1 - Math.abs(offset) * 0.15 : 0, // Fade out effect
    zIndex: isActive ? 10 : Math.abs(offset) <= 2 ? 5 - Math.abs(offset) : 0,
  };
};

// Intersection Observer for scroll-based animation trigger
onMounted(() => {
  if (!sectionRef.value) return;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;

          // trigger once, prevent repeated triggers
          observer?.unobserve(entry.target);
        }
      });
    },
    // only 30% area visible to trigger
    { threshold: 0.3 }
  );

  observer.observe(sectionRef.value);
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<template>
  <section
    ref="sectionRef"
    class="relative overflow-hidden bg-gradient-to-br from-[#a8e4a0] via-[#b8ce9c] to-[#FFFD8F] flex items-center"
    style="min-height: 100vh"
  >
    <!-- enhance visual hierarchy -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute inset-0 opacity-[0.03]"
        style="
          background-image: radial-gradient(
            circle at 2px 2px,
            rgba(0, 0, 0, 0.15) 1px,
            transparent 0
          );
          background-size: 32px 32px;
        "
      ></div>

      <!-- top left halo effect -->
      <div class="absolute top-0 left-0 w-96 h-96 bg-white/30 rounded-full blur-3xl"></div>

      <!-- bottom right halo effect -->
      <div
        class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-200/30 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Grid Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr_1fr] gap-8 lg:gap-16 items-center">
        <!-- Left section -->
        <div
          :class="[
            'space-y-12 transition-all duration-1000 ease-out',
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0',
          ]"
        >
          <!-- Top left-aligned description -->
          <div class="text-left">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Real-Time
              <span
                class="block bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent mt-1"
              >
                Bookstore System
              </span>
            </h2>
            <p class="text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
              Instant updates for inventory, cart, and order status. Manage your entire bookstore
              with confidence.
            </p>
          </div>

          <!-- Bottom right-aligned description -->
          <div class="text-right">
            <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Powerful
              <span
                class="block bg-gradient-to-r from-green-800 to-emerald-600 bg-clip-text text-transparent mt-1"
              >
                Seller Dashboard
              </span>
            </h3>
            <p class="text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
              Track sales, manage inventory, and view customer ratings — all in one intuitive
              interface.
            </p>
          </div>
        </div>

        <!-- Middle section (product showcase) -->
        <div
          :class="[
            'flex justify-center items-center transition-all duration-1000 ease-out delay-300',
            isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0',
          ]"
        >
          <div class="relative">
            <!-- background light halo effect -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-white/40 to-green-200/30 rounded-3xl blur-3xl scale-110"
            ></div>

            <!-- product image showcase -->
            <div class="relative">
              <img
                src="@/assets/images/products/overview.png"
                alt="Overview"
                class="relative z-10 w-full max-w-[550px] h-auto object-contain rounded-3xl shadow-2xl hover:scale-[1.10] transition-transform duration-500 border-4 border-white/50"
              />

              <!-- ball decorators -->
              <div
                class="absolute -top-8 -right-8 w-24 h-24 bg-yellow-400/30 rounded-full blur-xl animate-pulse"
              ></div>
              <div
                class="absolute -bottom-10 -left-10 w-32 h-32 bg-green-500/40 rounded-full blur-2xl animate-float"
              ></div>
              <div
                class="absolute top-1/2 -right-6 w-24 h-24 bg-orange-400/35 rounded-full blur-lg animate-bounce-slow"
              ></div>
            </div>
          </div>
        </div>

        <!-- Right section - 3D Stacked Cards -->
        <div
          :class="[
            'transition-all duration-1000 ease-out delay-200',
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0',
          ]"
        >
          <div class="relative">
            <div
              class="relative h-[500px]"
              style="perspective: 1000px; perspective-origin: center center"
            >
              <!-- Loop features cards -->
              <div
                v-for="(feature, index) in features"
                :key="index"
                class="absolute top-1/2 left-1/2 w-full cursor-pointer transition-all duration-700 ease-out"
                :style="{
                  transform: `translate(-50%, -50%) ${getCardStyle(index).transform}`,
                  opacity: getCardStyle(index).opacity,
                  zIndex: getCardStyle(index).zIndex,
                }"
                @click="currentIndex = index"
              >
                <!-- glassmorphism cards -->
                <div
                  :class="[
                    'relative overflow-hidden rounded-2xl p-6 transition-all duration-500',
                    index === currentIndex ? 'scale-105' : 'hover:scale-[1.02]',
                  ]"
                >
                  <!-- light gradient effect on cards -->
                  <div
                    :class="[
                      'absolute inset-0 rounded-2xl transition-all duration-500',
                      index === currentIndex
                        ? 'bg-gradient-to-br from-white/30 via-white/10 to-transparent'
                        : 'bg-gradient-to-br from-white/15 via-white/5 to-transparent',
                    ]"
                    style="padding: 1px"
                  >
                    <div
                      class="w-full h-full rounded-2xl bg-gradient-to-br from-white/8 via-white/5 to-white/3 backdrop-blur-xl"
                    ></div>
                  </div>

                  <!-- light effect -->
                  <div
                    class="absolute inset-0 rounded-2xl opacity-50"
                    style="
                      background: radial-gradient(
                        circle at 30% 20%,
                        rgba(255, 255, 255, 0.15) 0%,
                        transparent 60%
                      );
                    "
                  ></div>

                  <!-- Content Layer (dot & text name)-->
                  <div class="relative z-10 flex items-center gap-4">
                    <div class="relative flex-shrink-0">
                      <!-- light halo -->
                      <div
                        :class="[
                          'absolute inset-0 rounded-full blur-md transition-all duration-300',
                          index === currentIndex
                            ? 'bg-green-400/60 scale-150'
                            : 'bg-green-500/30 scale-100',
                        ]"
                      ></div>
                      <!-- green light dot -->
                      <div
                        :class="[
                          'relative w-3 h-3 rounded-full transition-all duration-300',
                          index === currentIndex
                            ? 'bg-green-500 shadow-lg shadow-green-500/50 animate-pulse'
                            : 'bg-green-600/70',
                        ]"
                      ></div>
                    </div>

                    <!-- feature text -->
                    <span
                      :class="[
                        'text-lg font-semibold tracking-wide transition-all duration-300',
                        index === currentIndex
                          ? 'text-gray-900 drop-shadow-sm'
                          : 'text-gray-800/80',
                      ]"
                    >
                      {{ feature }}
                    </span>
                  </div>

                  <!-- shadow Layer -->
                  <div
                    :class="[
                      'absolute -inset-1 rounded-2xl -z-10 transition-all duration-500',
                      index === currentIndex ? 'opacity-100' : 'opacity-0',
                    ]"
                    style="
                      background: linear-gradient(
                        135deg,
                        rgba(34, 197, 94, 0.1),
                        rgba(16, 185, 129, 0.05)
                      );
                      filter: blur(20px);
                    "
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- bottom description -->
      <div
        :class="[
          'mt-6 text-center max-w-2xl mx-auto transition-all duration-1000 ease-out delay-500 animate-bounce-slow',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
        ]"
      >
        <p class="text-sm lg:text-lg text-gray-800 leading-tight">
          Fully equipped with <span class="text-green-900 font-bold">Dashboard Analytics</span>,
          <span class="text-green-800 font-bold">Order Tracking</span>,
          <span class="text-green-700 font-bold">Inventory Management</span>, and
          <span class="text-green-600 font-bold">Customer Ratings</span>.
        </p>
      </div>
    </div>

    <!-- footer smooth gradient -->
    <div
      class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white/85 pointer-events-none"
    ></div>
  </section>
</template>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}
</style>
