<script setup lang="ts">
import { useUserStore } from '~~/stores/userStore';
const userStore = useUserStore();
const router = useRouter();
if (!userStore.isAuthenticated) {
    router.push("/auth/login?redirect=/")
}

</script>
<template>
    <div class="grid grid-cols-2 gap-6">
        <div>

            <LazyDashboardRecentTransaction />
        </div>
        <div>
            <LazyDashboardSalesOverview />
        </div>
        <div class="col-span-2">

            <LazyDashboardMonthlyEarnings />

        </div>

    </div>
</template>