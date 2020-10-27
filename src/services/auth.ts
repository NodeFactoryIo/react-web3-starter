// build with http://jwtbuilder.jamiekurtz.com/
// key = qwertyuiopasdfghjklzxcvbnm123456
const fakeToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MDM2OTYyMTQsImV4cCI6MTYzNTIzMjIxMCwiYXVkIjoiIiwic3ViIjoiIiwibmFtZSI6IkpvaG5ueSIsInN1cm5hbWUiOiJSb2NrZXQiLCJlbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJyb2xlIjpbIm1hbmFnZXIiLCJ1c2VyIl19.8dueGcmDVhU6i26LX9PPMpsBIva5wJbd4e8vgCpMRPg';

export const loginUser = (email: string, password: string): Promise<string> =>
  new Promise((resolve) => {
    console.log('start fake login with:', email, password);
    setTimeout(() => {
      resolve(fakeToken);
    }, 1.5 * 1000);
  });
