import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from "@material-tailwind/react";
import { EnvelopeIcon, EnvelopeOpenIcon } from "@heroicons/react/24/outline";
import { FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa";
export function SpeedDialWithTextOutside() {
  return (
    <div className=" fixed  bottom-2 right-8 mr-8">
      <div className="absolute  inset-0 border-2 border-transparent rounded-full spointer-events-none animate-neon-border"></div>
      <SpeedDial>
        <SpeedDialHandler>
          <IconButton size="lg" className="rounded-full">
            <EnvelopeOpenIcon className="hidden h-5 w-5 group-hover:block" />
            <EnvelopeIcon className="block h-5 w-5 group-hover:hidden" />
          </IconButton>
        </SpeedDialHandler>
        <SpeedDialContent>
          <SpeedDialAction className="h-16 w-16">
            <FaFacebookF className="h-5 w-5 " style={{ color: "#1877F2" }} />
            <Typography color="blue-gray" className="text-xs font-normal">
              Facebook
            </Typography>
          </SpeedDialAction>
          <SpeedDialAction className="h-16 w-16">
            <FaTiktok className="h-5 w-5" style={{ color: "#010101" }} />
            <Typography color="blue-gray" className="text-xs font-normal">
              Tiktok
            </Typography>
          </SpeedDialAction>
          <SpeedDialAction className="h-16 w-16">
            <FaWhatsapp className="h-5 w-5" style={{ color: "#25D366" }} />
            <Typography color="blue-gray" className="text-xs font-normal">
              Whatsapp
            </Typography>
          </SpeedDialAction>
        </SpeedDialContent>
      </SpeedDial>
    </div>
  );
}
export default SpeedDialWithTextOutside;
