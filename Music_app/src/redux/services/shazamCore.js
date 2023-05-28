import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c0fed0d8d0msh5230d26a99c651ap11a6e5jsn2ad74256565f',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    {/*send API request to fetch data from rapidAPI shazam world charts endpoints*/ }
    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: () => {
                headers.set('X-RapidAPI-key', 'c0fed0d8d0msh5230d26a99c651ap11a6e5jsn2ad74256565f');

                return headers;
            },
        }),
        //query defined as a function that return data from an endpoint
        endpoints: (builder) => ({
            getTopCharts: builder.query({query: () => '/charts/world'}),
        }),
    })

    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi;