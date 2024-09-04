export interface UserInterface {
    id: string;
    name: string;
    email: string;
    type: 'admin' | 'user'; // Tipe user bisa admin atau user
}

// interfaces/AuthResponse.ts
export interface AuthResponse {
    user: UserInterface;
    access_token: string;
}