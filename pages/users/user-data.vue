<script setup lang="ts">
import { getCookie } from "@/mixins/cookies";
import axios from "axios"
const config = useRuntimeConfig();
const userData = ref([])
const searchValue = ref('')
const source = ref('');
const startDate = ref('');
const endtDate = ref('');
let x = "Bearer "
let y = getCookie("access_token")
console.log()



watchEffect(() => {
    axios.get(config.public.API_BASE_URL + `user/users/?&q=${searchValue.value}&source=${source.value}&start_date=${startDate.value}&start_date=${endtDate.value}`, {
        headers: {
            Authorization: x + y,
        }
    }).then((res) => {
        userData.value = res.data
    })
})

function handlFilters() {
    axios.get(config.public.API_BASE_URL + `user/users/?&q=${searchValue.value}&source=${source.value}`).then((res) => {
        userData.value = res.data
    })
}
const items = ref([{ name: "Users Source", value: "" }, { name: "Islamic Academy Users", value: "islamicacademyuser" }, { name: "Alnafi Users", value: "alnafiuser" },]);

</script>

<template>
    <div class="space-y-4">
        <LazyDashboardYearlyBreakup />
        <v-card elevation="10" class="">
            <!-- {{ userData.results }} -->
            <v-card-item class="pa-6">
                <v-card-title class="text-h5 pt-sm-2 pb-7">User Data</v-card-title>
                <div class="flex flex-wrap px-4 py-8 items-center gap-6 justify-between">
                    <div class="flex md:flex-row flex-col gap-7">
                        <div class="flex relative">
                            <input type="email" v-model="searchValue" placeholder="Search by email or username"
                                class="block w-full py-2 px-10 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <span class="absolute translate-y-2 translate-x-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.9268 17.0401L20.4 20.4001M19.28 11.4401C19.28 15.77 15.7699 19.2801 11.44 19.2801C7.11006 19.2801 3.59998 15.77 3.59998 11.4401C3.59998 7.11019 7.11006 3.6001 11.44 3.6001C15.7699 3.6001 19.28 7.11019 19.28 11.4401Z"
                                        stroke="#989898" strokeWidth="2" stroke-linecap="round" />
                                </svg>
                            </span>
                        </div>
                        <div class="flex flex-col gap-2 font-medium">
                            <span class="absolute translate-y-2 translate-x-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.59995 12.0002H17.4M4.19995 7.2002H19.8M10.2 16.8002H13.8" stroke="#7D7D7D"
                                        strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            <select v-model="source" v-on:change="handlFilters"
                                class="block w-full px-10 py-2 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                <option value="">Users Source</option>
                                <option value="islamicacademyuser">
                                    Islamic Academy Users
                                </option>
                                <option value="alnafiuser">Alnafi Users</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div class="flex gap-7 md:flex-row flex-col font-medium">
                            <div class="space-y-2">

                                <span>Start Time</span>
                                <input type="date" v-model="startDate"
                                    class="block py-2 px-6 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div class="space-y-2">
                                <span>End Time</span>
                                <input type="date" v-model="endtDate"
                                    class="block py-2 px-6 w-fit text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                        </div>
                    </div>
                </div>
                <v-table class="month-table">
                    <thead>
                        <tr>
                            <th class="text-subtitle-1 font-weight-bold">
                                <h4>
                                    Username
                                </h4>
                            </th>
                            <th class="text-subtitle-1 font-weight-bold">
                                <h4>
                                    First Name
                                </h4>
                            </th>
                            <th class="text-subtitle-1 font-weight-bold">
                                <h4>
                                    Last Name
                                </h4>
                            </th>
                            <th class="text-subtitle-1 font-weight-bold">
                                <h4>
                                    Email
                                </h4>
                            </th>
                            <th class="text-subtitle-1 font-weight-bold">
                                <h4>
                                    Address
                                </h4>
                            </th>
                            <th class="text-subtitle-1 font-weight-bold" style="white-space: nowrap;">
                                <h4>
                                    Affiliate Code
                                </h4>
                            </th>
                            <th class="text-subtitle-1 font-weight-bold" style="white-space: nowrap;">
                                <h4>
                                    Mentor account
                                </h4>
                            </th>
                            <th class="text-subtitle-1 font-weight-bold">
                                <h4>
                                    Created At
                                </h4>
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr class="month-item" v-for="items in userData.results">
                            <td>
                                <div>

                                    <p class="text-15 font-weight-medium">{{ items.username }}</p>
                                </div>
                            </td>
                            <td>
                                <div>

                                    <p class="text-15 font-weight-medium">{{ items.first_name }}</p>
                                </div>
                            </td>
                            <td>
                                <div>

                                    <p class="text-15 font-weight-medium">{{ items.last_name }}</p>
                                </div>
                            </td>
                            <td>
                                <div>

                                    <p cclass="text-15 font-weight-medium">{{ items.email }}</p>
                                </div>
                            </td>
                            <td>
                                <div>

                                    <p class="text-15 font-weight-medium">{{ items.address }}</p>
                                </div>
                            </td>
                            <td>
                                <div>

                                    <p class="text-15 font-weight-medium">{{ items.affiliate_code || "-" }}</p>
                                </div>
                            </td>
                            <td>
                                <div>

                                    <p class="text-15 font-weight-medium">{{ items.isMentor ? "Yes" : "No" }}</p>
                                </div>
                            </td>
                            <td>
                                <div>

                                    <p cclass="text-15 font-weight-medium">{{ items.created_at }}</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-card-item>
        </v-card>
    </div>
</template>
