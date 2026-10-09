// Ikonat e faqes — përdorin "remixicon" (tashmë në projekt), pa paketa shtesë.
import React from "react";
import "remixicon/fonts/remixicon.css";

const make = (name) => {
  const Icon = ({ className = "", ...rest }) => (
    <i className={`icon ${name} ${className}`.trim()} aria-hidden="true" {...rest} />
  );
  return Icon;
};

export const RiAddLine = make("ri-add-line");
export const RiBuilding2Line = make("ri-building-2-line");
export const RiCalendarLine = make("ri-calendar-line");
export const RiCheckLine = make("ri-check-line");
export const RiCloseLine = make("ri-close-line");
export const RiCommunityLine = make("ri-community-line");
export const RiCustomerService2Line = make("ri-customer-service-2-line");
export const RiFacebookLine = make("ri-facebook-line");
export const RiFlashlightLine = make("ri-flashlight-line");
export const RiGasStationLine = make("ri-gas-station-line");
export const RiInstagramLine = make("ri-instagram-line");
export const RiMailLine = make("ri-mail-line");
export const RiMapPin2Fill = make("ri-map-pin-2-fill");
export const RiMapPin2Line = make("ri-map-pin-2-line");
export const RiMapPinLine = make("ri-map-pin-line");
export const RiMenuLine = make("ri-menu-line");
export const RiPhoneLine = make("ri-phone-line");
export const RiPlaneLine = make("ri-plane-line");
export const RiRoadMapLine = make("ri-road-map-line");
export const RiRoadsterLine = make("ri-roadster-line");
export const RiSearchLine = make("ri-search-line");
export const RiSettings3Line = make("ri-settings-3-line");
export const RiStarFill = make("ri-star-fill");
export const RiTempHotLine = make("ri-temp-hot-line");
export const RiTiktokLine = make("ri-tiktok-line");
export const RiWhatsappLine = make("ri-whatsapp-line");
