export const COMPANY_PHONE = "919876543210";

export function createWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${COMPANY_PHONE}?text=${encodedMessage}`;
}

export function createProductOrderMessage(productName: string, customerName: string = "", quantity: string = "", city: string = "", phone: string = ""): string {
  return `Hello Laxmi Biomedicals, I want to order: ${productName}. 
Name: ${customerName || '[Your Name]'}
Quantity: ${quantity || '[x]'}
City: ${city || '[Your City]'}
Phone: ${phone || '[Your Phone]'}

Please contact me for pricing and availability.`;
}

export function createGeneralInquiryMessage(): string {
  return `Hello Laxmi Biomedicals, I need information about your laboratory equipment and products. Please send me your catalog and pricing details.`;
}

export function createContactFormMessage(formData: {
  name: string;
  email: string;
  phone: string;
  productInterest?: string;
  message: string;
}): string {
  return `Hello Laxmi Biomedicals,

I am interested in your products. Here are my details:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Product Interest: ${formData.productInterest || 'General Inquiry'}
Message: ${formData.message}

Please contact me for further discussion.`;
}
