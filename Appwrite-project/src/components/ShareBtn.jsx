import React from "react";
import { BiShareAlt } from "react-icons/bi";

const ShareBtn = ({ imageUrl, title, text }) => {
  const shareContent = async () => {
    try {
      if (navigator.share) {
        // If Web Share API is supported, share using it
        const blob = await fetch(imageUrl).then((res) => res.blob());
        await navigator.share({
          title: title,
          text: `${title}\n${text}`, // Including title and text for Web Share API
          url: window.location.href,
          files: [new File([blob], "image.png", { type: "image/png" })],
        });
      } else if (/WhatsApp/.test(navigator.userAgent)) {
        const whatsappMessage = encodeURIComponent(
          `${title}\n${text}\n${imageUrl}`
        );
        const whatsappUrl = `whatsapp://send?text=${whatsappMessage}`;
        window.location.href = whatsappUrl;
      } else if (/Facebook/.test(navigator.userAgent)) {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          window.location.href
        )}&quote=${encodeURIComponent(title + "\n" + text)}`; // Including title and text for Facebook
        window.open(facebookUrl, "_blank");
      } else {
        window.open(window.location.href, "_blank");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };
  return (
    <button
      className="text-2xl hover:bg-gray-100 rounded-md  py-1 px-2"
      onClick={shareContent}
    >
      <BiShareAlt />
    </button>
  );
};

export default ShareBtn;
