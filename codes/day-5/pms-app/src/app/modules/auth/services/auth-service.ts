import { inject, Service } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../../../config/constants';
import { ApiResponse } from '../../shared/models/api-response';

@Service()
export class AuthService {
    private http = inject(HttpClient)
    private AUTH_API_URL = `${API_BASE_URL}/auth`

    authenticate(user: User) {
        return this.http.post<ApiResponse<string>>(`${this.AUTH_API_URL}/login`, user)
    }
    register(user: User) {
        return this.http.post<ApiResponse<User>>(`${this.AUTH_API_URL}/register`, user)
    }
}
