<template>
    <div class="mt-8">
        <div class="contianer mx-auto px-8">

            <!-- start form -->
            <form @submit.prevent="onSubmit">
                <div class="row">
                    <label for="emailAddress">
                        <span class="font-semibold block mt-8">
                            Email Address
                        </span>
                        <input id="emailAddress" class="px-4 py-3 rounded-lg border-gray-100 mt-1 border-2 w-full"
                            type="email" placeholder="Email..." />
                    </label>
                </div>

                <div class="row">
                    <label for="password">
                        <span class="font-semibold block mt-8">
                            Password
                        </span>
                        <input id="password" class="px-4 py-3 rounded-lg border-gray-100 mt-1 border-2 w-full"
                            type="password" placeholder="password..." />
                    </label>
                </div>

                <div class="row">
                    <button type="submit" class="bg-primary text-white rounded-lg font-bold w-full h-8 mt-8">
                        Sign In
                    </button>
                </div>
            </form>

            <!-- end form -->

            <!-- start direction -->
            <div class="w-full text-center mt-8">
                <span class="font-semibold">
                    I'm a new user.
                </span>
                <span class="ml-1">
                    <router-link
                        :to="{ name: 'Register', params: {} }"
                        class="font-bold text-primary">
                        Sign UP
                    </router-link>
                </span>
            </div>
            <!-- end direction -->
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        function onSubmit() { }
        return { onSubmit };
    },
}
</script>