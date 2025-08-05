import axios from 'axios';
import { Tokens } from '../../shared/constants/url.constant';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://34.117.150.179'
    : 'http://34.117.150.179';

const talentEzzyApi = axios.create({
  baseURL,
});

if (typeof window !== 'undefined') {
  const authToken = localStorage.getItem(Tokens.TALENTEZZY_AUTH_TOKEN);
  // if (authToken) {
  //   talentEzzyApi.defaults.headers.common['Authorization'] =
  //      `Bearer ${authToken}`;
  // }
}

export default talentEzzyApi;
