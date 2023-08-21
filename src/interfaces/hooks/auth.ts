export interface createProfileProps {
    email: string;
    phone: string;
    role: "user" | "admin"
}
export interface editProfileProps {
    img?: string;
    phone?: string;
    role?: "user" | "admin"
}


export interface signInProps {
    email: string;
    password: string;
}

export interface signUpProps {
    email: string;
    password: string;
    phone: string;
};