<template>
    <div class="mt-8">
        <div class="contianer mx-auto px-8">

            <!-- start form -->
            <form @submit.prevent="onSubmit">
                <div class="row">
                    <label for="fullName">
                        <span class="font-semibold block">
                            Full Name
                        </span>
                        <input
                            id="fullname"
                            class="px-4 py-3 rounded-lg border-gray-100 mt-1 border-2 w-full"
                            type="text"
                            placeholder="iMoney..."
                            v-model="fullName"
                        />
                    </label>
                </div>

                <div class="row">
                    <label for="emailAddress">
                        <span class="font-semibold block mt-8">
                            Email Address
                        </span>
                        <input
                            id="emailAddress"
                            class="px-4 py-3 rounded-lg border-gray-100 mt-1 border-2 w-full"
                            type="email"
                            placeholder="Email..."
                            v-model="email"
                        />
                    </label>
                </div>

                <div class="row">
                    <label for="password">
                        <span class="font-semibold block mt-8">
                            Password
                        </span>
                        <input
                            id="password"
                            class="px-4 py-3 rounded-lg border-gray-100 mt-1 border-2 w-full"
                            type="password"
                            placeholder="password..."
                            v-model="password"
                        />
                    </label>
                </div>

                <div class="row">
                    <button type="submit" class="bg-primary text-white rounded-lg font-bold w-full h-8 mt-8">
                        Sign Up
                    </button>
                </div>
            </form>

            <!-- end form -->

            <!-- start direction -->
            <div class="w-full text-center mt-8">
                <span class="font-semibold">
                    I'm already a member.
                </span>
                <span class="ml-1 text-primary font-semibold">
                    <router-link
                        :to="{ name: 'Login', params: {} }" class="text-primary font-semibold">
                        Sign In
                    </router-link>
                </span>
            </div>
            <!-- end direction -->
        </div>
    </div>
</template>

<script>
import { ref  } from 'vue';
import { useSignUp } from '@/composables/useSignUp';
export default {
    setup () {
        const { error, isPending, signup } = useSignUp();

        const fullName = ref("");
        const email = ref("");
        const password = ref("");


        async function onSubmit() {
            await signup(email.value, password.value);
        }
        return { fullName, email, password, error, isPending, onSubmit };
    },
}
</script>