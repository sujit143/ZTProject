import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import * as appSettings from '../../../assets/constant.json';
import { AppConstant } from '../../app.constant';
import * as _ from 'lodash';
import { Router, Params } from '@angular/router';
import { CommonHttpService } from './../../shared/common-http.service';

@Injectable()
export class ArticleService {
    appSettings: any = appSettings;
    api_url: string;
    appendpoint: string;
    ReadMore_URL: string;
    cpDefaultUrl: string;
    cpDefaultUpdateUrl: string;
    Edit_Fetch_URL: string;
    CAT_URL: string;
    INSERT_URL: string;
    Search_article: string;
    GetAllArticles: string;
    GETCATEGORIESBYID:string;
    GETADMINARTICLES:string;
    PAGINATION:string;
    Concat:string;
    // Edit_Fetch_URL: string = 'https://325cd82f.ngrok.io/api/KB/GetKBArticlesById?ArticleId=';
    // CAT_URL = 'https://325cd82f.ngrok.io/api/KB/GetCategories';
    // ReadMore_URL = 'https://325cd82f.ngrok.io/api/KB/GetReadArticle';
    // GetAllArticles = 'https://325cd82f.ngrok.io/api/KB/GetArticles?getall=0&categ=1';

    // Search_article = 'https://325cd82f.ngrok.io/api/KB/GetArticles?getall=0&categ=1&Page=1&SearchString=hundred';

    // INSERT_URL = 'https://325cd82f.ngrok.io/api/KB/InsertUpdateKBAricles';
    // CategoryId1 = 'https://325cd82f.ngrok.io/api/KB/GetArticles?getall=0&categ=1';
    // CategoryId2 = 'https://325cd82f.ngrok.io/api/KB/GetArticles?getall=0&categ=2';
    // CategoryId3 = 'https://325cd82f.ngrok.io/api/KB/GetArticles?getall=0&categ=3';

    constructor(
        private http: HttpClient, public router: Router,
        private CommonHttpService: CommonHttpService
    ) {
        this.api_url = AppConstant.API_ENDPOINT;
        this.appendpoint = this.api_url;
        this.ReadMore_URL = this.appendpoint + AppConstant.API_CONFIG.API_URL.KNOWLEDGE.READMORE;
        this.Edit_Fetch_URL = this.appendpoint + AppConstant.API_CONFIG.API_URL.KNOWLEDGE.FETCHARTICLEBYID;

        this.CAT_URL = this.appendpoint + AppConstant.API_CONFIG.API_URL.KNOWLEDGE.GETCATEGORIES;
        this.INSERT_URL = this.appendpoint + AppConstant.API_CONFIG.API_URL.KNOWLEDGE.INSERTARTICLE;
        this.Search_article = this.appendpoint + AppConstant.API_CONFIG.API_URL.KNOWLEDGE.SEARCHARTICLE;
        this.GetAllArticles = this.appendpoint + AppConstant.API_CONFIG.API_URL.KNOWLEDGE.GETALLARTICLE;
        this.GETADMINARTICLES=this.appendpoint + AppConstant.API_CONFIG.API_URL.KNOWLEDGE.GETADMINARTICLES;
        this.GETCATEGORIESBYID=this.appendpoint + AppConstant.API_CONFIG.API_URL.KNOWLEDGE.GETARTICLEBYID;
        this.PAGINATION=this.appendpoint + AppConstant.API_CONFIG.API_URL.KNOWLEDGE.PAGINATION;
    }
    // readmore
    public getArticleById(data: any): Promise<any> {
        console.log(data);
        return this.CommonHttpService.globalGetService(this.ReadMore_URL, data)
            .then(data => {
                return data;
            },
                err => {
                    console.log(err);
                });
    }

    // insert logic here
    // public addArticle(array) {
    //     let body = JSON.stringify(array);
    //     let head = new HttpHeaders().set("Content-Type", "application/json");
    //     console.log(array);
    //     return this.http.post(this.INSERT_URL, body, { headers: head });
    // }

    // insert logic
    public addArticle(data: any): Promise<any> {
        return this.CommonHttpService.globalPostService(this.INSERT_URL, data)
            .then(data => {
                return data;
        });
    }
    // public getPageByNumber(data: any): Promise<any> {
    //     return this.CommonHttpService.globalPostService(this.PAGINATION, data)
    //         .then(data => {
    //             return data;
    //     });
    // }
    public getPageByNumber(ArticleId,CatId) {
      //  console.log((this.Edit_Fetch_URL + ArticleId));
      if(CatId==0){
        this.Concat="categ="+"&Page="+ArticleId;
      console.log("Concat"+this.Concat)
        return this.http.get(this.PAGINATION + this.Concat);
        }else{
            this.Concat="categ="+CatId+"&Page="+ArticleId;
      console.log("Concat"+this.Concat)
        return this.http.get(this.PAGINATION + this.Concat);
        }
      }

    public getCategory() {
        console.log();
        return this.http.get(this.CAT_URL);
    }

    public getSearchById() {
        return this.http.get(this.Search_article);
    }

    public getKbArticleById(ArticleId) {
        console.log((this.Edit_Fetch_URL + ArticleId));
        return this.http.get(this.Edit_Fetch_URL + ArticleId);
    }
    public getCategoriesById(value)
    {
      return this.http.get(this.GETCATEGORIESBYID + value);
    }

    public getArticleBySearch(value) {
        return this.http.get(this.Search_article + value);
    }

    // public getKbArticleById(data) {
    //     return this.CommonHttpService.globalGetService(this.Edit_Fetch_URL, data)
    //         .then(data => {
    //             return data;
    //         });
    // }

    public editArticle(updateArr) {
        let body = JSON.stringify(updateArr);
        let head = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.put(this.INSERT_URL, body, { headers: head });
    }

    public getAllKbArticle() {
        return this.http.get(this.GetAllArticles);
    }

    public updateArticle(data: any): Promise<any> {
        return this.CommonHttpService.globalPostService(this.INSERT_URL, data)
            .then(data => {
                return data;
        });
    }
    public getAdminArticles(page:number){
        let con="&Page"+page;
        return this.http.get(this.GETADMINARTICLES+con);
    }

    // public getCategoriesById() {
    //     console.log();
    //     return this.http.get(this.CAT_URL);
    // }

}
