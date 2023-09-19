import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signup(email, password) {
    isPending.value = true;
    error.value = null;
    // try để xử lý logic thành công
    try {
        const response = await projectAuth.createUserWithEmailAndPassword(email, password);
        if (!response) throw new Error ("Could not create a new user.");
        return response;
    }
    // catch là phần xử lý lỗi
    catch (err) {
        console.log(err);
        error.value = err.message;
    }
    // finally phần để xử lý reset
    finally {
        isPending.value = false;
    }
}

export function useSignUp() {
    return { error, isPending, signup };
}
