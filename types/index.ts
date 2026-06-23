export interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: string[];
}

export interface Vendor {
  _id: string;
  businessName: string;
  slug: string;
  description: string;
  logo: string;
  coverImage: string;
  categories: string[];
  isApproved: boolean;
  isActive: boolean;
  totalEarnings: number;
  pendingPayout: number;
}

export interface Gift {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  discountPrice?: number;
  images: string[];
  categories: string[];
  occasions: string[];
  recipientTypes: string[];
  isActive: boolean;
  stock: number;
}

export interface Order {
  _id: string;
  orderNumber: string;
  totalAmount: number;
  status: string;
  createdAt: string;
  items: Array<{
    _id: string;
    giftId: Gift | string;
    quantity: number;
    unitPrice: number;
    subtotal: number;
    status: string;
  }>;
  recipient: {
    name: string;
    phone: string;
    address: string;
    note: string;
  };
}
