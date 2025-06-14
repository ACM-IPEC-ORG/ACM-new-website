export const BASE_URL = "https://acm-dashboard-backend.vercel.app/api/v1"; //to run on production
// export const BASE_URL = "http://localhost:5000/api/v1"; //to run locally

export const AUTH_ROUTE = `${BASE_URL}/auth`;
export const FETCH_TEAM_ROUTE=`${BASE_URL}/teams/allTeam`
export const POST_TEAM=`${BASE_URL}/teams/postTeam`
export const FETCH_EVENT_ROUTE=`${BASE_URL}/events/allEvent`