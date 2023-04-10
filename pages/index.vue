<script setup>
import axios from 'axios';
import { useUserStore } from '~~/stores/userStore';
import { useTheme } from 'vuetify';
const theme = useTheme();
const config = useRuntimeConfig();
const primary = theme.current.value.colors.primary;
const lightprimary = theme.current.value.colors.lightprimary;
const userStore = useUserStore();
const allPayment = ref([])
const router = useRouter();
if (!userStore.isAuthenticated) {
    router.push("/auth/login?redirect=/")
}

axios.get(config.public.API_BASE_URL + "payments/nofpayments/").then((res) => {
    allPayment.value = res.data.stripe_payments
    // console.log(allPayment)
})


const chartOptions = computed(() => {
    return {
        labels: ['series-1', 'series-2', 'series-3'],
        chart: {
            type: 'donut',
            fontFamily: `inherit`,
            foreColor: '#a1aab2',
            toolbar: {
                show: false
            }
        },
        colors: [primary, lightprimary, '#F9F9FD'],
        plotOptions: {
            pie: {
                startAngle: 0,
                endAngle: 360,
                donut: {
                    size: '75%',
                    background: 'transparent'
                }
            }
        },
        stroke: {
            show: false
        },

        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        tooltip: { theme: "light", fillSeriesColor: false },
    };
});
const chart = [38, 40, 25];




</script>
<template>
    <div class="space-y-12">
        <div>
            <LazyDashboardYearlyBreakup :height="250" :option="chartOptions" :chart="chart" />
        </div>
        <div class="grid grid-cols-2 gap-8">
            <div>
                <LazyDashboardYearlyBreakup />
            </div>
            <div>
                <!-- <LazyDashboardMonthlyEarnings /> -->
                <LazyDashboardYearlyBreakup />

            </div>

        </div>
    </div>
</template>