import { create } from 'zustand';
import api from '../utils/api';

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  login: async (employeeId, password) => {
    set({ isLoading: true, error: null });
    try {
      // Mocking the backend response since the backend might not be fully functional yet
      // const response = await api.post('/auth/login', { employeeId, password });
      // const { user, accessToken } = response.data.data;
      
      // Mock behavior
      setTimeout(() => {
        const user = { id: 1, name: 'Admin User', employeeId, role: 'admin' };
        const accessToken = 'mock-jwt-token';
        
        localStorage.setItem('token', accessToken);
        set({ user, isAuthenticated: true, isLoading: false });
      }, 800);
      
    } catch (error) {
      set({ 
        error: error.response?.data?.message || 'Login failed', 
        isLoading: false 
      });
    }
  },

  register: async (name, employeeId, email, password) => {
    set({ isLoading: true, error: null });
    try {
      // Mocking the backend response
      // const response = await api.post('/auth/register', { name, employeeId, email, password });
      // const { user, accessToken } = response.data.data;
      
      // Mock behavior
      setTimeout(() => {
        const user = { id: 2, name, employeeId, email, role: 'member' };
        const accessToken = 'mock-jwt-token-new';
        
        localStorage.setItem('token', accessToken);
        set({ user, isAuthenticated: true, isLoading: false });
      }, 800);
      
    } catch (error) {
      set({ 
        error: error.response?.data?.message || 'Registration failed', 
        isLoading: false 
      });
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, isAuthenticated: false });
  },

  checkAuth: async () => {
    const token = localStorage.getItem('token');
    if (!token) return;
    
    set({ isLoading: true });
    try {
      // const response = await api.get('/auth/current-user');
      // set({ user: response.data.data, isAuthenticated: true, isLoading: false });
      
      // Mock behavior
      setTimeout(() => {
        set({ 
          user: { id: 1, name: 'Admin User', email: 'admin@test.com', role: 'admin' }, 
          isAuthenticated: true, 
          isLoading: false 
        });
      }, 500);
    } catch (error) {
      localStorage.removeItem('token');
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  }
}));

export default useAuthStore;
