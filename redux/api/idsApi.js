import { apiSlice } from "@/redux/api/apiSlice";

export const idsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLeagues: builder.query({
      query: ({ page, limit, league, sort}) => ({
        url: "/leagues",
        params: {
          _page: page,
          _per_page: limit,
          ...(league && {
            "name:contains": league,
          }),
          ...(sort && {
            _sort: sort,
          }),
        }
      }),
    })
  })
});

export const { useGetLeaguesQuery } = idsApi;