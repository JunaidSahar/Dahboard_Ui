<script setup lang="ts">
import { setCookie } from "@/mixins/cookies";
import { useUserStore } from "~~/stores/userStore";
import axios from "axios";
const config = useRuntimeConfig();
const userStore = useUserStore();
const router = useRouter();
definePageMeta({
    layout: "blank",
});

const userData = ref({
    userName: {
        label: "Email address",
        value: "",
        type: "text",
        placeHolder: "Enter Your Username or Email",
    },
    password: {
        label: "Password",
        value: "",
        type: "password",
        placeHolder: "Password",
    },
});

function login() {
    let data = {
        email: userData.value.userName.value,
        password: userData.value.password.value,
    };
    console.log(data)
    axios(config.public.API_BASE_URL + "user/login/", {
        // withCredentials: true,
        method: "post",
        data: data,
    }).then((res) => {
        console.log(res.data)
        userStore.isAuthenticated = true;
        userStore.user = res.data.user;
        setCookie("access_token", res.data.access_token, 7);
        setCookie("refresh_token", res.data.refresh_token, 365);
        router.push('/')
    }).catch((err) => {
        alert(err);
    });
}
</script>
<template>
    <div class="authentication">
        <v-container fluid class="pa-3">
            <v-row class="h-100vh d-flex justify-center align-center">
                <v-col cols="12" lg="4" xl="3" class="d-flex align-center">
                    <v-card rounded="md" elevation="10" class="px-sm-1 px-0 withbg mx-auto" max-width="500">
                        <v-card-item class="pa-sm-8">
                            <div class="d-flex justify-center py-4">
                                <LayoutFullLogo />
                            </div>
                            <div class="text-body-1 text-muted text-center mb-3">Your Social Campaigns</div>
                            <form @submit.prevent="login">
                                <div class="relative w-full mb-3" v-for="fieldData, index in userData" :key="index">
                                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password">
                                        {{ fieldData.label }}
                                    </label>
                                    <input :type="fieldData.type" value="" v-model="fieldData.value"
                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        :placeholder="fieldData.placeHolder" />
                                </div>
                                <div>
                                    <label class="inline-flex items-center cursor-pointer">
                                        <input id="customCheckLogin" type="checkbox"
                                            class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150" />
                                        <span class="ml-2 text-sm font-semibold text-blueGray-600">
                                            Remember me
                                        </span>
                                    </label>
                                </div>

                                <div class="text-center mt-6">
                                    <button
                                        class="bg-primary active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                        type="submit">
                                        Sign In
                                    </button>
                                </div>
                            </form>
                            <h6 class="text-h6 text-muted font-weight-medium d-flex justify-center align-center mt-3">
                                New to Modernize?
                                <NuxtLink to="/auth/register"
                                    class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium pl-2">
                                    Create an account</NuxtLink>
                            </h6>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
