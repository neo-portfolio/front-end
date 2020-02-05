export interface ChildListener<T> {
    sendMessage: (message: T) => void
}