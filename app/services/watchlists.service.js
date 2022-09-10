import qs from 'query-string';
import request from '../utils/request';

export const fetchWatchList = body => {
  let refactoredBody = { ...body };
  if (body.languages.length) {
    refactoredBody = {
      ...body,
      languages: body.languages.filter(item => item !== 'all').join(),
    };
  }
  const searchString = qs.stringify(refactoredBody);
  return request(
    `https://cf-endpoint-proxy.herokuapp.com/webapi/v1/stories?${searchString}`,
  );
};
