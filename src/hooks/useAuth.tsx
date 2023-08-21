import { useContext } from 'react'
import { AuthContext } from '../contexts/auth.context'
import { AuthStatusType } from '../interfaces/auth.interface'
import { signInProps, signUpProps } from '../interfaces/hooks/auth'
import { FirebaseError } from '@firebase/util';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from '../config/firebase'
import { useProfile } from '../hooks/useProfile'

export const useAuth = () => {
    const { AuthStatus, setAuthStatus } = useContext(AuthContext) as AuthStatusType;
    const { AppLoading, setAppLoading } = useContext(AuthContext) as AuthStatusType;
    const { check: checkProfile, create: createProfile } = useProfile();

    async function Auth() {
        try {
            onAuthStateChanged(auth, async (data) => {
                if (data && data.email) {
                    const profile = await checkProfile(data.email);
                    if (!profile) throw new Error("Error");

                    setAuthStatus({
                        logged: true,
                        user: {
                            email: data.email,
                            phone: profile.phone,
                            img: profile.img,
                            role: profile.role
                        },
                    });
                }
                setAppLoading(false);
            });
        } catch (error) {
            console.log(error)
        }
    }

    async function SignIn({ email, password }: signInProps) {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            const profile = await checkProfile(email);
            if (!profile) throw new Error("This user does not have a profile!");

            setAuthStatus({
                logged: true,
                user: profile
            })
            setAppLoading(false)

            return {
                user: profile,
                message: "Sesión iniciada!"
            }
        } catch (error) {
            let message = "Error!"
            if (error instanceof FirebaseError) {
                if (error.message.includes("auth/invalid-email")) message = "Correo invalido";
                if (error.message.includes("auth/wrong-password")) message = "Contraseña incorrecta";
                if (error.message.includes("auth/user-not-found")) message = "Este correo no está registrado";
            }
            return { user: null, message }
        }
    }

    async function SignUp({ email, password, phone }: signUpProps) {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const profile = await createProfile({ email, phone, role: "user" });
            if (!profile) throw new Error("This user does not have a profile!");

            setAuthStatus({
                logged: true,
                user: profile
            });

        } catch (error) {
            console.log(error)
        }
    }

    async function SignOut() {
        try {
            await signOut(auth);
            setAuthStatus({ logged: false, user: null });
        } catch (error) {
            console.log(error);
        }
    }

    return { AppLoading, AuthStatus, Auth, SignIn, SignUp, SignOut }
}
