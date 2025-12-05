import { create } from "zustand";

export interface Attendance {
  id: string;
  name: string;
  status: "attending" | "not-attending" | "maybe";
  guestCount: number;
  dietaryRestrictions?: string;
  timestamp: number;
}

export interface GuestMessage {
  id: string;
  name: string;
  message: string;
  timestamp: number;
}

interface WeddingStore {
  attendances: Attendance[];
  messages: GuestMessage[];
  addAttendance: (attendance: Omit<Attendance, "id" | "timestamp">) => void;
  addMessage: (message: Omit<GuestMessage, "id" | "timestamp">) => void;
  loadFromStorage: () => void;
  getTotalAttending: () => number;
}

const STORAGE_KEYS = {
  ATTENDANCES: "wedding-attendances",
  MESSAGES: "wedding-messages",
};

const DUMMY_MESSAGES: GuestMessage[] = [
  {
    id: "dummy-1",
    name: "Sarah & Michael",
    message:
      "Wishing you both a lifetime of love and happiness! May your journey together be filled with endless joy and beautiful memories.",
    timestamp: Date.now() - 86400000 * 5,
  },
  {
    id: "dummy-2",
    name: "Emily Johnson",
    message:
      "Congratulations on your special day! May your love story continue to inspire everyone around you.",
    timestamp: Date.now() - 86400000 * 4,
  },
  {
    id: "dummy-3",
    name: "David & Lisa Chen",
    message:
      "So happy to celebrate this beautiful union with you! Wishing you endless love, laughter, and adventure together.",
    timestamp: Date.now() - 86400000 * 3,
  },
  {
    id: "dummy-4",
    name: "Robert Williams",
    message:
      "May your marriage be blessed with love, joy, and companionship for all the years of your lives. Congratulations!",
    timestamp: Date.now() - 86400000 * 2,
  },
  {
    id: "dummy-5",
    name: "Jennifer & Mark",
    message:
      "Two hearts, one love! Wishing you a wonderful life together filled with special moments and cherished memories.",
    timestamp: Date.now() - 86400000,
  },
  {
    id: "dummy-6",
    name: "Amanda Rodriguez",
    message:
      "Congratulations on finding your forever love! May every day be as magical as your wedding day.",
    timestamp: Date.now() - 43200000,
  },
];

export const useWeddingStore = create<WeddingStore>((set, get) => ({
  attendances: [],
  messages: DUMMY_MESSAGES,

  addAttendance: (attendance) => {
    const newAttendance: Attendance = {
      ...attendance,
      id: crypto.randomUUID(),
      timestamp: Date.now(),
    };

    set((state) => {
      const updated = [...state.attendances, newAttendance];
      localStorage.setItem(STORAGE_KEYS.ATTENDANCES, JSON.stringify(updated));
      return { attendances: updated };
    });
  },

  addMessage: (message) => {
    const newMessage: GuestMessage = {
      ...message,
      id: crypto.randomUUID(),
      timestamp: Date.now(),
    };

    set((state) => {
      const updated = [...state.messages, newMessage];
      localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(updated));
      return { messages: updated };
    });
  },

  loadFromStorage: () => {
    if (typeof window === "undefined") return;

    const attendances = localStorage.getItem(STORAGE_KEYS.ATTENDANCES);
    const messages = localStorage.getItem(STORAGE_KEYS.MESSAGES);

    set({
      attendances: attendances ? JSON.parse(attendances) : [],
      messages: messages ? JSON.parse(messages) : DUMMY_MESSAGES,
    });
  },

  getTotalAttending: () => {
    const { attendances } = get();
    return attendances
      .filter((a) => a.status === "attending")
      .reduce((sum, a) => sum + a.guestCount, 0);
  },
}));
