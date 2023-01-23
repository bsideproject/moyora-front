import create from 'zustand';
import { devtools } from 'zustand/middleware';

export interface ISignupData {
  schoolCode?: string;
  schoolName?: string;
  graduationYear?: number;
  name?: string;
  nickname?: string;
  category?: string;
  job?: string;
  regionId?: number;
  parentRegion?: string;
  childRegion?: string;
  schoolComment?: string;
}

interface IStore {
  me: ISignupData | null;
  onResetSignup: () => void;
  onSaveSignup: (signupData: ISignupData) => void;
}

const useStore = create<IStore>()(
  devtools((set) => ({
    me: null,
    onSaveSignup: (signupData) => set((state) => ({ me: { ...state.me, ...signupData } })),
    onResetSignup: () => set(() => ({ me: null })),
  })),
);

export default useStore;
