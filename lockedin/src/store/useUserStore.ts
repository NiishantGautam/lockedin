import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type UserState = {
    hasFinishedOnboarding: boolean;
    toggleHasOnboarded: () => void;
};

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            hasFinishedOnboarding: false,
            toggleHasOnboarded: () => {
                set((state) => ({
                    ...state,
                    hasFinishedOnboarding: !state.hasFinishedOnboarding,
                }));
            },
        }),
        {
            name: "lockedin-user",
            storage: createJSONStorage(() => AsyncStorage),
        },
    ),
);
