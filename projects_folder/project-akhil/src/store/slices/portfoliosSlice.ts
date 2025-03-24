import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Portfolio {
  id: string;
  name: string;
  description: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface PortfoliosState {
  items: Portfolio[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PortfoliosState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchPortfolios = createAsyncThunk(
  'portfolios/fetchPortfolios',
  async () => {
    const response = await axios.get('/portfolios', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  }
);

export const createPortfolio = createAsyncThunk(
  'portfolios/createPortfolio',
  async (portfolioData: { name: string; description?: string }) => {
    const response = await axios.post('/portfolios', portfolioData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  }
);

const portfoliosSlice = createSlice({
  name: 'portfolios',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolios.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPortfolios.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchPortfolios.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(createPortfolio.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default portfoliosSlice.reducer;