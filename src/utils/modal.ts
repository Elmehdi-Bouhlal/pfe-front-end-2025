import { createApp, h } from "vue";
import Modal from "@/components/Modal.vue";

export function showPopup(data:any) {
  const popupContainer = document.createElement("div");
  document.body.appendChild(popupContainer);

  const appInstance = createApp({
    render() {
      return h(Modal, {
        data,
        onClose: () => {
          appInstance.unmount();
          document.body.removeChild(popupContainer);
        }
      });
    }
  });

  appInstance.mount(popupContainer);
}
