import { firestore } from '../config/firebase'
import { UserInformation } from '../interfaces/auth.interface'
import { createProfileProps, editProfileProps } from '../interfaces/hooks/auth'
import { doc, getDoc, setDoc, updateDoc, collection } from 'firebase/firestore'

const default_img =
    "https://i.pinimg.com/originals/3d/66/78/3d667893c5788613ff3590ca218a9cb2.jpg";

export const useProfile = () => {
    async function create({ email, phone, role }: createProfileProps) {
        try {
            const ref = collection(firestore, "users");
            await setDoc(doc(ref, email), {
                email,
                phone,
                img: default_img,
                role
            });
            return await get(email)
        } catch (error) {
            console.log(error);
            return null
        }
    }

    async function get(email: string): Promise<UserInformation | null> {
        try {
            const ref = doc(firestore, "users", email);
            const data = await getDoc(ref);

            if (data.exists()) return data.data() as UserInformation;
            else return null;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async function edit(email: string, data: editProfileProps): Promise<UserInformation | null> {
        try {
            const currentInfo = await get(email);
            if (!currentInfo) throw new Error("This user does not exist")

            const profile = {
                email,
                img: data.img ?? currentInfo.img,
                phone: data.phone ?? currentInfo.phone,
                role: data.role ?? currentInfo.role
            };
            const ref = doc(firestore, "users", email);
            await updateDoc(ref, profile);
            return profile;
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async function check(email: string) {
        try {
            const profile = await get(email);
            if (!profile) return await create({ email, phone: "123 123 1234", role: "user" })
            return profile;
        } catch (error) {
            console.log(error)
            return null
        }
    }

    return { create, get, edit, check }
}
