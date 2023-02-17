import { bus } from "@/utils/bus";

export const DetailItem = (name) => {
  return {
    created() {
      bus.$emit("start:spinner");
      const id = this.$route.params.id;
      this.$store.dispatch(name, id).then(() => {
        bus.$emit("end:spinner");
      });
    },
  };
};
