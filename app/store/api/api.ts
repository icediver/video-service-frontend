import { API_URL } from '../../api/axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { USER } from '@/services/user.service';

import { IUser } from '@/types/user.interface';

import { TypeRootState } from '@/store/store';

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Video', 'Profile'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as TypeRootState).auth.accessToken;
			if (token) headers.set('Authorization', `Bearer ${token}`);
			return headers;
		},
	}),
	endpoints: builder => ({
		getPtofile: builder.query<IUser, any>({
			query: () => `${USER}/profile`,
			providesTags: () => [{ type: 'Profile' }],
		}),
		subscribeToChannel: builder.mutation<boolean, number>({
			query: chanelId => ({
				url: `${USER}/subscribe/${chanelId}`,
				method: 'PATCH',
			}),
			invalidatesTags: () => [{ type: 'Profile' }],
		}),
	}),
});
