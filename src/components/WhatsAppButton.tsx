import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
    const phoneNumber = "9600940618";
    const whatsappUrl = `https://wa.me/91${phoneNumber}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 group"
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle size={32} className="fill-current" />
            <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md pointer-events-none">
                Chat with us
            </span>
        </a>
    );
};

export default WhatsAppButton;
