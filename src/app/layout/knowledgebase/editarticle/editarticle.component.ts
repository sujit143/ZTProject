import { Component, OnInit, OnDestroy } from '@angular/core';
import { KBArticles } from '../../../Models/kbarticles';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Subscriber, Subscription, observable } from 'rxjs';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DdlCatogoryName } from '../../../Models/ddlcategory';
import { ArticleService } from '../../../services/appservices/article.service';
import _ from 'lodash';
@Component({
    selector: "app-editarticle",
    templateUrl: "./editarticle.component.html",
    styleUrls: ["./editarticle.component.scss"]
})
export class EditarticleComponent implements OnInit, OnDestroy {
    editForm: FormGroup;
    displayArticle: KBArticles;
    id: number;
    catname: string;
    catid: number;
    arr: DdlCatogoryName[] = [];
    public queryparams: any;
    private _subscriptions = new Subscription();

    constructor(
        private _data: ArticleService,
        private fb: FormBuilder,
        private _act: ActivatedRoute,
        private _router: Router)
    {
        this._subscriptions.add(
            this._router.routerState.root.queryParams.subscribe(
                (params: Params) => {
                    this.queryparams = params['ArticleId'];
                }
            )
        );
    }

    ngOnInit() {
        this.getArticleForEdit();
    }
    getArticleForEdit() {
        // var req = {
        //   ArticleId: this.queryparams
        // };
        // this._data.getKbArticleById(req)
        //   .then(res => {
        //     if (res) {
        //       if (!_.isEmpty(res)) {
        //         // this.arr = res;
        //         this.displayArticle = res[0];

        //         // this.messageService.add({ severity: 'success', summary: 'Success', detail: "success." });
        //       }
        //       else {
        //         this.arr = [];
        //         // this.messageService.add({ severity: 'error', summary: 'Error', detail: "failed." });
        //         return false;
        //       }
        //     }
        //   }, error => {

        //   })

        // this.id=this._act.snapshot.params["id"];
        this.id = this.queryparams;
        console.log(this.id);
        this._data.getKbArticleById(this.id).subscribe((x: KBArticles) => {
            this.displayArticle = x;
            this.catid = this.displayArticle.categoryId;
            console.log(this.displayArticle);
            this.editForm.patchValue({
                ArticleName: this.displayArticle.articleName,
                ArticleId: this.displayArticle.articleId,
                CategoryId: this.displayArticle.categoryId,
                CategoryName: this.displayArticle.categoryName,
                previewcontent: this.displayArticle.previewContent,
                Content: this.displayArticle.content
            });

        },
        function(err){
            alert('Internal Server');
        });
        // console.log(this.catid);
        // this._act.params.subscribe(
        //   (x)=>{
        //     this.id=this.catid;
        //      console.log(x);
        //   });
        this._data.getCategory().subscribe((data: DdlCatogoryName[]) => {
            //  console.log(data);
            this.arr = data;
        });

        console.log(this.catid);
        this.editForm = this.fb.group({
            ArticleName: new FormControl(null),
            ArticleId: new FormControl(null),
            CategoryName: new FormControl(null),
            CategoryId: new FormControl(this.catid),
            Content: new FormControl(null),
            previewcontent: new FormControl(null)
        });
    }

    onEditArticle() {
        var req = {
            ArticleName: this.editForm.value.ArticleName,
            ArticleId: this.editForm.value.ArticleId,
            CategoryId: this.editForm.value.CategoryId,
            CategoryName: this.editForm.value.CategoryName,
            Content: this.editForm.value.Content,
            previewcontent: this.editForm.value.previewcontent,
            CreatedBy: this.editForm.value.CreatedBy,
            CreatedByName: this.editForm.value.CreatedByName,
            CreatedDate: this.editForm.value.CreatedDate,
            ModifiedBy: this.editForm.value.ModifiedBy,
            ModifiedByName: this.editForm.value.ModifiedByName,
            ModifiedDate: this.editForm.value.ModifiedDate
        };
        console.log(req);
        this._data.updateArticle(req).then(
            res => {
                if (res) {
                    alert('Updated');
                    this._router.navigate(['/knowledge-base']);
                } else {
                    console.log('failed');
                }
            },
            error => {}
        );
    }

    ngOnDestroy() {
        this._subscriptions.unsubscribe();
    }
}

