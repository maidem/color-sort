<script setup lang="ts">
definePageMeta({ middleware: [] });

const password = ref("");
const error = ref("");
const loading = ref(false);
const passwordInput = ref<HTMLInputElement | null>(null);

onMounted(() => passwordInput.value?.focus());

async function login() {
  error.value = "";
  loading.value = true;
  try {
    await $fetch("/api/auth/login", {
      method: "POST",
      body: { password: password.value },
    });
    const authed = useState("authed", () => false);
    authed.value = true;
    await navigateTo("/");
  } catch {
    error.value = "Falsches Passwort";
    password.value = "";
    passwordInput.value?.focus();
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-[#fafaf7] p-6"
  >
    <div class="w-full max-w-sm">
      <div class="mb-10 text-center">
        <div class="inline-flex items-center gap-3 mb-1">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            class="shrink-0"
          >
            <circle
              cx="8"
              cy="16"
              r="6"
              fill="#e63946"
              stroke="#111"
              stroke-width="2"
            />
            <circle
              cx="16"
              cy="16"
              r="6"
              fill="#f4a261"
              stroke="#111"
              stroke-width="2"
            />
            <circle
              cx="24"
              cy="16"
              r="6"
              fill="#2a9d8f"
              stroke="#111"
              stroke-width="2"
            />
          </svg>
          <h1 class="text-4xl tracking-wide">Color Sort</h1>
        </div>
        <p class="text-sm opacity-60">Marker-Farbpaletten verwalten</p>
      </div>

      <form
        class="border-2 border-black rounded-lg p-6 bg-white shadow-[3px_3px_0_#111]"
        @submit.prevent="login"
      >
        <label class="block text-sm mb-1 opacity-70" for="pw">Passwort</label>
        <input
          id="pw"
          ref="passwordInput"
          v-model="password"
          type="password"
          autocomplete="current-password"
          placeholder="••••••••"
          class="w-full border-2 border-black rounded px-3 py-2 bg-[#fafaf7] outline-none focus:shadow-[1px_1px_0_#111] mb-4"
        />

        <p
          v-if="error"
          class="text-sm text-red-600 mb-3 border border-red-200 bg-red-50 rounded px-3 py-2"
        >
          {{ error }}
        </p>

        <button
          type="submit"
          :disabled="loading || !password"
          class="w-full border-2 border-black rounded px-4 py-2 bg-black text-white hover:bg-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
        >
          {{ loading ? "…" : "Anmelden" }}
        </button>
      </form>
    </div>
  </div>
</template>
