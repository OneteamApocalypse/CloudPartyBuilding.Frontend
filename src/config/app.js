import { useApiUrl } from "@/config/apiUrl";
import CommonConfig from "@/config/common";
import SystemConfig from "@/config/system";
export default {
  ...CommonConfig,
  ...SystemConfig,
  apiUrl: useApiUrl,

};
