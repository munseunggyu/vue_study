import ListView from "./ListView.vue";
import { bus } from "@/utils/bus";

// HOC

export default function createListView(name) {
  return {
    name: name,
    created() {
      bus.$emit("start:spinner");
      const currentUrl = this.$route.fullPath;
      this.$store
        .dispatch("FETCH_DATA", currentUrl)
        .then(() => {
          bus.$emit("end:spinner");
        })
        .catch((error) => console.log(error));
    },
    render(createElement) {
      return createElement(ListView);
    },
  };
}
