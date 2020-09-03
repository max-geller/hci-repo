export interface UserInterface {
    // Basics
    id?: string;
    uid?: string;
    displayName?: string;
    photoUrl?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
    company?: string;
    verifiedAccount?: boolean;
    sendWelcomeEmail?: boolean;
    role?: string;

    // State Tracking
    lastLogin?: Date;
    connectionStatus?: string;
    showTutorial?: boolean;
    emailVerified?: boolean;
    isActive?: boolean;
    userSince?: Date;
}
export interface Role {
    id?: string;
}
