import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools, persist } from 'zustand/middleware';

export const useContactsStore = create(persist(devtools(immer((set) => {
    return {
        contacts: [],
        addContact: (name, phone) => (
            set((store) => {
                store.contacts.unshift({
                    id: Date.now(),
                    name,
                    phone
                })
            })
        ),
        removeContact: (id) => (
            set((store) => {
                store.contacts = store.contacts.filter(c => c.id !== id)
            })
        )
    }
}))));