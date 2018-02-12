import jwt from 'jwt-simple';

export const googleAppID = {
    development: "50054141864-skgi9qk2tj28625kgb4hs5jtr1qqv7p6.apps.googleusercontent.com",
    production: "50054141864-skgi9qk2tj28625kgb4hs5jtr1qqv7p6.apps.googleusercontent.com",
};

export const googleAppSecret = {
    development: "ZuSMG6Zc6eG4mUuyuTlHBH11",
    production: "ZuSMG6Zc6eG4mUuyuTlHBH11",
};

const appToken = {
    development: "gw*1ar4Y0*KoF!v#yu%b2kG3e<4{v(*WV|J}|M",
    staging: process.env.REACT_APP_SECRET_TOKEN,
    production: process.env.REACT_APP_SECRET_TOKEN
};

const appHeader = {
    development: "maekhongbike@version1.0",
    staging: process.env.REACT_APP_SECRET_HEADER,
    production: process.env.REACT_APP_SECRET_HEADER
};

export function createJwtFromToken(token='',auth_token=''){
    const u = {
        appKey: appHeader[process.env.NODE_ENV],
        tokenKey: auth_token,
        emailToken: token
    };

    return jwt.encode(u, appToken[process.env.NODE_ENV]);
    //return tempToken;
}

export function createJwtForUser(user={}){
    const u = {
        user: {
            username: user.username || "",
            password: user.password || "",
        }
    };

    return jwt.encode(u, appToken[process.env.NODE_ENV]);
}

export const cloudConfig = {
	cloud_name: process.env.REACT_APP_CLOUD_NAME,
	api_key: process.env.REACT_APP_API_KEY,
	api_secret: process.env.REACT_APP_API_SECRET
}