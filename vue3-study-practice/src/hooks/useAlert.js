import { ref } from "vue";
const showAlert = ref(false);
const alertType = ref("error");
const message = ref("");
export function useAlert() {
  const vAlert = (msg, type = "error") => {
    showAlert.value = true;
    message.value = msg;
    alertType.value = type;
    setTimeout(() => {
      showAlert.value = false;
    }, 2000);
  };
  const vSuccess = (msg) => vAlert(msg, "success");

  return {
    vSuccess,
    vAlert,
    showAlert,
    message,
    alertType,
  };
}
