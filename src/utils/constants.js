export const LOGO="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
export const AVATAR = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"

export const API_Options =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer'+process.env.TMDB_KEY
    }
  };
  export const IMG_CDN = "https://image.tmdb.org/t/p/w500/";
  export const BG_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg'

  export const SUPPORTED_LANGUAGES = [
    {identifier:"English", name:"English"},
    {identifier:"Hindi", name:"Hindi"},
    {identifier:"Spanish", name:"Spanish"}
  ]

  export const GPT_KEY = "";