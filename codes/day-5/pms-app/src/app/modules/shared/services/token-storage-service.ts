import { Service, signal } from '@angular/core';

@Service()
export class TokenStorageService {
    private _store = signal<string | null>(null)

    saveToken(token: string) {
        this._store.set(token)
    }
    removeToken() {
        this._store.set(null)
    }
    get tokenStore() {
        return this._store
    }

    isLoggedIn() {
        return this._store() !== null
    }
}
