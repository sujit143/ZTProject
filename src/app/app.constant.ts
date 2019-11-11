import * as c from '../assets/constant.json';
////console.log("constant file",c);

export const AppConstant = Object.freeze({
  APP: {
    MODULE_NAME: 'ChatApp-CpMp'
  },
  API_ENDPOINT: 'https://cc4cc882.ngrok.io/api/KB/',
  FILE_LOCATION: {
    base: "wwwroot",
    ConnectionFilesPath: "StaticFiles/ConnectionFiles/HTML/",
    DocumentFilePath: "StaticFiles/TempFiles/Documents/",
    Connection: "XML",
  },
  ENCRYPTDECRIYPTKEY: 'moc.ppa-tahc-key', //chat-app-key
  API_CONFIG: {
    APP_CONTENT: {
      APP_NAME: 'KnowledgeBase',
      APP_DESC: 'KnowledgeBase',
    },
    LOCALSTORAGE: {
      STR_PREFIX: 'ichatUP-',
      STR_PREFIX_UP: 'ichatUP-',
      ISMOBILEDEV : 'ismobileDevice',
      TOKEN: 'token',
      TOKEN_TYPE: 'token_type',
      TOKEN_EXPIRES: "expires_in",
      ROLE: "rl",
      USERINFO: "userinfo",
      IS_ACTINGCP: "isActingCp",
      IS_ACTINGUP: "isActingUp",
      APPSETTING: 'appsettings',
      CompanyId: "companyId",
      SelectedModel: "selectedModel",
      SelectedModuleId: "selectedModuleid",
      isRefModule: "isRefModule",
      RefModuleId: "RefModuleId",
      COMPANYINFO: "companyinfo",
      PREFERENCESETTINGS: "preferenceSettings",
      DOCUMENTACCESSRIGHTS: "documentaccessRights",
      EMPINFOID: "empinfoid",
      EMPMANAGERID: "empmanagerid",
      SELCTEDEMPNAME: "selectedempname",
      ISLOGGEDIN: "isLoggedIn"
    },
    M_ACCOUNT_URL: 'V1/account/',
    M_CONNECT_URL: 'connect/',
    M_BASE_URL: 'api/',
    IDENTITY_CONFIG: {
      GRAND_TYPE: "password",
      SCOPE: "api1 openid",
      CLIENTID: "ro.angular",
      CLIENTSECRET: "secret"
    },
    HEADER_CONTENT_TYPE: {
      FORM_URL_ENCODE: 'application/x-www-form-urlencoded;charset=utf-8;',
      APPLICATION_JSON: 'application/json',
    },
    DATE: {
      format1: 'dd-MM-yyyy',
      apiFormat: 'YYYY-MM-DD',  // A valid moment js data format. Refer https://momentjs.com/docs/#/parsing/string-format/
      displayFormat: 'DD-MM-YYYY',
      sqlDateFormat: 'DD-MM-YYYY',
      dotnetDateFormat: 'MM/DD/YYYY',
      dotnetFullDateFormat: 'YYYY-MM-DD HH:mm:ss',
    },
    ANG_DATE: {
      displaydtime: 'dd-MMM-yyyy HH:mm',
      displayMediumFormat: 'MMM d, y, h:mm:ss a',
      displayFormat: 'dd-MM-y', // 01-31-2019 y-MM-dd
      apiFormat: 'y-MM-dd',
      apiTSFormat: 'y-MM-dd HH:mm',

    },
    EmployeeCategory: {
      MANAGER: 1,
    },
    API_URL: {
      UP_Login: "token",
      UP_userinfo: "userinfo",
      iconPath: "StaticFiles/icons/",
      iconsizeLimit: 20480,//4 kb
      iconDimLimit: 100,//4 kb
      photoPath: "UserPhotos/",
      photosizeLimit: 102400,//102 kb
      photoDimLimit: 600,//600 pixels
      account: {
        BASE: "Account",
        REGISTER: "/register",
        LOGOUT: "/logout",
        LOGIN: "/login",
        FORGOT: "/forgot",
        RESET: "/reset"
      },
      SMS: {
        BASE: "company"
      },
      COMPANY: {
        BASE: "company",
        CPDEFAULT: "CpDefaults",
        UPDATE: "/update"
      },
      COMMON: {
        StatusList: "CpStatus",
        CpPayTypeList: "CpPayType",
        EmpCategoryList: "MpCategory"
      },
      EMPLOYEE: {
        BASE: "Employee",
        GETBYCOMPANY: "/GetByCompany",
        REGISTEREMPLOYEE: "registeremployee",
      },
      KNOWLEDGE: {
        FETCHARTICLEBYID:'GetKBArticlesById?ArticleId=',
        GETARTICLEBYID: "GetArticles?getall=0&categ=",
        GETCATEGORIES: "GetCategories",
        READMORE: 'GetReadArticle',
        INSERTARTICLE: "InsertUpdateKBAricles",
        SEARCHARTICLE: "GetArticles?getall=0&categ=&Page=1&SearchString=",
        // SEARCHARTICLE1:'GetArticles?getall=0&categ=&Page=1&SearchString=',
        GETALLARTICLE: "GetArticles?getall=0&categ=",
        GETADMINARTICLES:'GetArticles?getall=1&categ=1',
        PAGINATION:'GetArticles?getall=0&'
      },
      NOTIFICATION: {
        BASE: "TextEmail"
      },
      MESSAGES: {
        BASE: "TextEmail"
      },
    }
  }
});
