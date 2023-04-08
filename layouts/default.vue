<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useUserStore } from '~~/stores/userStore';
const title = ref("Modernize - Nuxt3 Typescript based Free Admin Dashboard Template");
useHead({
    meta: [{ content: title }],
    titleTemplate: (titleChunk) => {
        return titleChunk
            ? `${titleChunk} - Nuxt3 Typescript based Free Admin Dashboard Template`
            : "Modernize - Nuxt3 Typescript based Free Admin Dashboard Template";
    },
});

const userStore = useUserStore();
const router = useRouter();
if (!userStore.isAuthenticated) {
    router.push("/auth/login?redirect=/")
}

</script>

<template>
    <v-locale-provider>
        <v-app>
            <LayoutFullMain />
            <v-main>
                <v-container fluid class="page-wrapper">
                    <div class="maxWidth">
                        <RouterView />
                    </div>
                </v-container>
            </v-main>
        </v-app>
    </v-locale-provider>
</template>
